import React from 'react'
import ProfileHeader from '../../components/ProfileHeader'
import profilcasper from '../../assets/profilbild-casper-svartvit.jpg'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const AboutPage = () => {
  return (
    <main className='about'>
      <section className='about-image-section'>
        <ProfileHeader/>
        <div className='about-image-container'>
          <img src={profilcasper} alt="" />
          <div>
            <a href="https://www.linkedin.com/in/cw1996/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin/>
            </a>
            <a href="https://github.com/Cappeloow" target="_blank" rel="noopener noreferrer">
              <FaGithub/>
            </a>
          </div>
        </div>
      </section>
    
      <section className='about-text-section'>
        <h2>About Me</h2>
        <br />
        <p>
          I'm a freelance graphic designer and aspiring artist. I've been working in the industry for over 10 years, focusing primarily on branding, marketing, and visual communication. I've collaborated with some of the most renowned brands in the world and have a deep appreciation for the power of storytelling through design.
        </p>
        <p>
          My passion for creating bold, engaging, and visually stunning visuals started when I was a teenager. I used to spend hours sketching and painting, trying to capture the essence of different cultures and their stories. Over time, I developed a unique style and started selling my work at local galleries and art fairs.
        </p>
      </section>
    </main>
  )
}

export default AboutPage
