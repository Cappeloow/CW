import React, { useState } from 'react'
import { IoMusicalNotes, IoCodeSlash } from "react-icons/io5";
import { MdAddAPhoto, MdDesignServices } from "react-icons/md";
import { FaQrcode } from "react-icons/fa";
import { IoPlaySharp } from "react-icons/io5";
import data from '../../data/projects.json';
import project_jarekon from '../../assets/web_project_jarekon.png';
import { ICategory } from '../../interfaces';
const ProjectPage = () => { 
  const [category, setCategory] = useState<ICategory>(data[0]);
  const [project, setProject] = useState(data[1].projects[0]);
  console.log(data);

  return (
    <main className='projects'>
      <section className='left-project-section'>
        <aside>
          <ul>
          <li className='icon-btn' onClick={() => setCategory(data[0])}>
              <IoCodeSlash/>
            </li>
            <li className='icon-btn' onClick={() => setCategory(data[1])}>
              <IoMusicalNotes/>
            </li>
            <li className='icon-btn' onClick={() => setCategory(data[2])}>
              <MdAddAPhoto/>
            </li>
            <li className='icon-btn' onClick={() => setCategory(data[3])}>
              <MdDesignServices/>
            </li>
            <li className='icon-btn' onClick={() => setCategory(data[4])}>
              <FaQrcode/>
            </li>
          </ul>
        </aside>
      </section>
      
      <section className='right-project-section'>
        <div className='project-title-container'>
          <h1>{category.categoryName}</h1>
        </div>
        <div className='project-main-container'>
          <div className='project-img-container'>
            <img src={project.img} alt="" />
          </div>
          <div className='project-content-container'>
            <div>
              <h2>{project.name}</h2>
            </div>
            <br />
            <article>
              <p>{project.description}</p>
            </article>
          </div>
        </div>
        <div className='project-pagination-container'>
          {category.projects && category.projects.slice(0, 5).map((project, idx) => {
            return (
              <button key={idx} onClick={() => setProject(project)}>
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
