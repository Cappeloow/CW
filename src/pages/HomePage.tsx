import React from 'react'
import { IoMusicalNotes, IoCodeSlash } from "react-icons/io5";
import { MdAddAPhoto, MdDesignServices } from "react-icons/md";
import { FaQrcode } from "react-icons/fa";
const HomePage = () => {
  return (
    <main>
        <section className='main-section'>
          <div className='left-border-container'>
            <div className='title-section'>
              <h1>Casper Wernersson</h1>
              <p>Web Developer / Visual Designer</p>
            </div>
          </div>
            <div className='slogan-section'>
              <span>
                “Let me tell you about myself.”
              </span>
            </div>
        </section>
       
        <section className='introduction-section'>
          <aside className='left-icon-aside'>
            <div className='left-icon-container'>
              <button>
                <IoCodeSlash />
              </button>
              <button>
                <IoMusicalNotes/>
              </button>
              <button>
                <MdAddAPhoto />
              </button>
            </div>
          </aside>
          <section className='article-container'>
            <article>
              <div className='img-section'>
                <div className='img-container'>
                  <img src="" alt="" />
                </div>
              </div>
              <div className='text-section'>
                <div className='text-container'>
                  <h2>Web Development</h2>
                  <br />
                  <p>I offer affordable web development services.</p>
                </div>
              </div>
            </article>
            <div className='shadow-pool'></div>
          </section>
          <aside className='right-icon-aside'>
            <div className='right-icon-container'>
              <button>
                <MdDesignServices />
              </button>
              <button>
                <FaQrcode/>
              </button>
            </div>
          </aside>
        </section>
    </main>
  )
}

export default HomePage
