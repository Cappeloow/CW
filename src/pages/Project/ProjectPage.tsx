import React from 'react'
import { IoMusicalNotes, IoCodeSlash } from "react-icons/io5";
import { MdAddAPhoto, MdDesignServices } from "react-icons/md";
import { FaQrcode } from "react-icons/fa";
import project_jarekon from '../../assets/web_project_jarekon.png';
const ProjectPage = () => {
  return (
    <main className='projects'>
      <section className='left-project-section'>
        <aside>
          <ul>
            <li className='icon-btn'>
              <IoCodeSlash/>
            </li>
            <li className='icon-btn'>
              <IoMusicalNotes/>
            </li>
            <li className='icon-btn'>
              <MdAddAPhoto/>
            </li>
            <li className='icon-btn'>
              <MdDesignServices/>
            </li>
            <li className='icon-btn'>
              <FaQrcode/>
            </li>
          </ul>
        </aside>
      </section>
      
      <section className='right-project-section'>
        <div className='project-title-container'>
          <h1>Web Development</h1>
        </div>
        <div className='project-main-container'>
          <div className='project-img-container'>
            <img src={project_jarekon} alt="" />
          </div>
          <div className='project-content-container'>
            <div>
        
            </div>
            <article>

            </article>
          </div>
        </div>
        <div className='project-pagination-container'>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </div>
      </section>
    </main>
  )
}

export default ProjectPage
