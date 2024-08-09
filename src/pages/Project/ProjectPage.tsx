import React from 'react'
import { IoMusicalNotes, IoCodeSlash } from "react-icons/io5";
import { MdAddAPhoto, MdDesignServices } from "react-icons/md";
import { FaQrcode } from "react-icons/fa";
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
          <h1>My Title</h1>
        </div>
        <div className='project-main-container'>
          <div className='project-img-container'>
            <img src="" alt="placeholder text" />
          </div>
          <div className='project-content-container'>
            <div>
        
            </div>
            <article>

            </article>
          </div>
        </div>
        <div>Pagination
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
