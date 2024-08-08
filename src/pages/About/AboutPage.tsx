import React from 'react'
import ProfileHeader from '../../components/ProfileHeader'
import profilcasper from '../../assets/profilbild-casper-svartvit.jpg'
const AboutPage = () => {
  return (
    <main>
      <section className='about-image-section'>
        <ProfileHeader/>
        <div className='about-image-container'>
          <img src={profilcasper} alt="" />
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
