import React from 'react'
import letterfront from '../../assets/letter-front.png';
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import letterback from '../../assets/letter-back.png';
const ContactPage = () => {
  return (
    <main className='contact'>
      <div className='contact-img-container'>
        <img src={letterfront} alt="" />
        <img src={letterback} alt="" />
        <div className='contact-btn-container'>
          <button className='icon-btn'><CiMail/></button>
          <button className='icon-btn'><FaLinkedin/></button>
          <button className='icon-btn'><CiMail/></button>
        </div>
      </div>
    </main>
  )
}

export default ContactPage
