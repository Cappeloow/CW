import { useEffect, useState } from 'react'
import { IoCodeSlash } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import { GrApps } from "react-icons/gr";
import {FaArrowAltCircleRight } from "react-icons/fa";
import { IoChevronBackCircle } from "react-icons/io5";
import { projectList } from '../../data/projects';
import { ICategory, IProject } from '../../interfaces';
import TechStackContainer from './components/TechStackContainer';
const ProjectPage = () => { 
  const [category, setCategory] = useState<ICategory>(
    projectList[0]
  );
  const [project, setProject] = useState<IProject>(projectList[0].projects[0]);
  const [loadedElement, setLoadedElement] = useState(false);
  const [showBtn, isShowBtn] =useState(false); 
  const [isMinimizedImage, setIsMinimizedImage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadedElement(true);
    },2000)
  },[]);
  

  const handleImageClick = () => {
    if (isMinimizedImage) {
      setIsMinimizedImage(false);
    } else {
      if (category.projects.length > 1) {
      const currentIndex = category.projects.findIndex(proj => proj === project);
        console.log("truetype");
      const nextIndex = (currentIndex + 1) % category.projects.length;
      setProject(category.projects[nextIndex]);
      }
    }
  };


  return (
    <main className='projects'>
      <section className='left-project-section'>
        <aside>
          <ul>
            <li className={loadedElement && category == projectList[0] ? 'activated-btn' : "icon-btn"} onClick={() => {
              setCategory(projectList[0]);
              setProject(projectList[0].projects[0]);
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
            <li className={category == projectList[1] ? 'activated-btn' : "icon-btn"} onClick={() => {
              setCategory(projectList[1])
              setProject(projectList[1].projects[0]);
            }}>
              <MdDesignServices/>
            </li>
            <li className={category == projectList[2] ? 'activated-btn' : "icon-btn"}onClick={() => {
              setCategory(projectList[2])
              setProject(projectList[2].projects[0]);
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
            const currentIndex = projectList.findIndex(item => item.categoryName === category.categoryName);
            const newIndex = (currentIndex - 1 + projectList.length) % projectList.length;

            setCategory(projectList[newIndex]);
            setProject(projectList[newIndex].projects[0]);
          }}
          />
        </div>
        <div className='project-main-container'>
          <div className={!isMinimizedImage ? 'project-img-container' :"minimized-project-img-container"}>
            <img src={project.img} alt="" 
            onClick={handleImageClick}
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
            <br />
            {project.features && <>
              {!isMinimizedImage && <button  className="readmore-btn" onClick={() => setIsMinimizedImage(true)}>Features</button>}
              {isMinimizedImage && <h4>Features</h4>}
              <br />
              <p>{isMinimizedImage && project.features}</p>
            </>}
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
