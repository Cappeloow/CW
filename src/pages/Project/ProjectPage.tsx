import { useEffect, useState } from 'react'
import { IoCodeSlash } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import { GrApps } from "react-icons/gr";
import {FaArrowAltCircleRight } from "react-icons/fa";
import { IoChevronBackCircle } from "react-icons/io5";
import data from '../../data/projects.json';

import { ICategory, IProject } from '../../interfaces';
import TechStackContainer from './components/TechStackContainer';
const ProjectPage = () => { 
  const [category, setCategory] = useState<ICategory>(
    data[0]
  );
  const [project, setProject] = useState<IProject>(data[0].projects[0]);
  const [loadedElement, setLoadedElement] = useState(false);
  const [showBtn, isShowBtn] =useState(false); 
  const [isMinimizedImage, setIsMinimizedImage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadedElement(true);
    },2000)
  },[]);
  

  return (
    <main className='projects'>
      <section className='left-project-section'>
        <aside>
          <ul>
            <li className={loadedElement && category == data[0] ? 'activated-btn' : "icon-btn"} onClick={() => {
              setCategory(data[0]);
              setProject(data[0].projects[0]);
            }}>
              <IoCodeSlash/>
            </li>
            {/* <li className={category == data[1] ? 'activated-btn' : "icon-btn"} onClick={() => {
              setCategory(data[1])
              setProject(data[1].projects[0]);
            }}>
              <IoMusicalNotes/>
            </li> */}

            {/* <li className={category == data[2] ? 'activated-btn' : "icon-btn"}onClick={() => {
              setCategory(data[2])
              setProject(data[2].projects[0]);
            }}>
              <MdAddAPhoto/>
            </li> */}
            <li className={category == data[1] ? 'activated-btn' : "icon-btn"} onClick={() => {
              setCategory(data[1])
              setProject(data[1].projects[0]);
            }}>
              <MdDesignServices/>
            </li>
            <li className={category == data[2] ? 'activated-btn' : "icon-btn"}onClick={() => {
              setCategory(data[2])
              setProject(data[2].projects[0]);
            }}>
              <GrApps/>
            </li>
          </ul>
        </aside>
      </section>
      
      <section className='right-project-section'
      onMouseEnter={() => isShowBtn(true)} 
      onMouseLeave={() => isShowBtn(false)}
      >
        <div className='project-title-container'>
          <h1>{category.categoryName}</h1>
          <FaArrowAltCircleRight 
          className='directional-icon' 
          onClick={() => {
            const currentIndex = data.findIndex(item => item.categoryName === category.categoryName);
            const newIndex = (currentIndex - 1 + data.length) % data.length;

            setCategory(data[newIndex]);
            setProject(data[newIndex].projects[0]);
          }}
          />
        </div>
        <div className='project-main-container'>
          <div className={!isMinimizedImage ? 'project-img-container' :"minimized-project-img-container"}>
            <img src={project.img} alt="" 
            onClick={() => setIsMinimizedImage(false)}
            />
            {showBtn && !isMinimizedImage && <button
            onClick={() => setIsMinimizedImage(true)}
            ><IoChevronBackCircle/></button>}
          </div>
          <div className={!isMinimizedImage ? 'project-content-container' :"expanded-project-content-container"}>
            {project.techStack && <TechStackContainer techStack={project.techStack}/>}
            <article>
            <div>
              <h2>{project.name}</h2>
            </div>
            <br />
            <p>{project.description}</p>
            </article>
          </div>
        </div>
        <div className='project-pagination-container'>
          {category.projects && category.projects.slice(0, 5).map((proj, idx) => {
            return (
              <button
              className={proj.description === project.description ? 'activated-pagination-btn' : 'pagination-btn'}
              key={idx}
              onClick={() => setProject(proj)}
            >
              {idx + 1}
            </button>
            );
          })}
        </div>
      </section>
    </main>
  )
}

export default ProjectPage
