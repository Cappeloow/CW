import letterfront from '../../../public/images/letter-front.png';
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import letterback from '../../../public/images/letter-back.png';
import ProfileHeader from '../../components/ProfileHeader';
const ContactPage = () => {
  return (
    <main className='contact'>
      <div className="container">
        <div className='contact-img-container'>
          <img src={letterfront} alt="" />
          <img src={letterback} alt="" />
          <div className='contact-btn-container'>
            <button className='icon-btn'><CiMail/></button>
            <button className='icon-btn'><FaLinkedin/></button>
            <button className='icon-btn'><CiMail/></button>
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
