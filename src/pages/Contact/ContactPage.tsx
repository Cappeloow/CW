import letterfront from '../../../images/letter-front.png';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import letterback from '../../../images/letter-back.png';
import ProfileHeader from '../../components/ProfileHeader';
const ContactPage = () => {
  return (
    <main className='contact'>
      <div className="container">
        <div className='contact-img-container'>
          <img src={letterfront} alt="" />
          <img src={letterback} alt="" />
          <div className='contact-btn-container'>
            <a href="https://github.com/Cappeloow" target="_blank" rel="noopener noreferrer">
            <button className='icon-btn'><FaGithub/></button>
            </a>
            <a href="mailto:cappew1996@gmail.com" target="_blank" rel="noopener noreferrer">
            <button className='icon-btn'><CiMail/></button>
            </a>
            <a href="https://www.linkedin.com/in/cw1996/" target="_blank" rel="noopener noreferrer">
            <button className='icon-btn'><FaLinkedin/></button>
            </a>
          </div>
        </div>
        <div className='container-widescreen'>
          <ProfileHeader/>
        </div>
      </div>
    </main>
  )
}

export default ContactPage
