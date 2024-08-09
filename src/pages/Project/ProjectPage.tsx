import React from 'react'
import { IoMusicalNotes, IoCodeSlash } from "react-icons/io5";
import { MdAddAPhoto, MdDesignServices } from "react-icons/md";
import { FaQrcode } from "react-icons/fa";
const ProjectPage = () => {
  return (
    <main className='projects'>
      <section className='left-project-container'>
        <aside>
          <ul>
            <li>
              <IoCodeSlash/>
            </li>
            <li>
              <IoMusicalNotes/>
            </li>
            <li>
              <MdAddAPhoto/>
            </li>
            <li>
              <MdDesignServices/>
            </li>
            <li>
              <FaQrcode/>
            </li>
          </ul>
        </aside>
      </section>
      
      <section className='right-project-container'>
        <div>
          <h1>My Title</h1>
        </div>
        <div>
          <div>
            <img src="" alt="placeholder text" />
          </div>
          <article>Text of the project</article>
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
