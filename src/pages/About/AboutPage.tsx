import React from 'react'
import ProfileHeader from '../../components/ProfileHeader'
import profilcasper from '../../assets/profilbild-casper-svartvit.jpg'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FcDocument } from 'react-icons/fc';
import { motion } from 'framer-motion';
import { elementDown, elementUp } from '../../animations/element';

const AboutPage = () => {
  return (
    <main className='about'>
      <div className='container'>
        <section className='about-image-section'>
          <ProfileHeader/>
          <div className='about-image-container'>
            <a className="download-cv-btn" href="src/assets/Casper CV.pdf" title="" download>
              Download CV
            </a>
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
        <motion.div
        initial="init"
        animate="anim"
        variants={elementDown}
        >
        <p>
          I am a newly graduated full-stack developer with a passion for building meaningful applications and further developing my skills. During my two years as a student, I have deepened my knowledge in both front-end and back-end technologies, and I've had the opportunity to work on everything from building responsive web applications to designing efficient databases.
        </p>
        <br />
        <p>
         On my free time I dedicate myself to projects that I am passionate about. I write, sing, and produce music, developing physical products, baking napolitan pizza. 
        </p>
        <br />
        <p>
          During the pandemic, I bought a bicycle to undertake a 2200 km journey from Bromölla to Kiruna, where I lived in a tent for 17 days and finished by climbing Kebnekaise. This adventure has been significant for me in my work life as well, as I learned the importance of breaking down goals into milestones and celebrating victories along the way.
        </p>
        </motion.div>
      </section>
    </div>
    </main>
  )
}

export default AboutPage
