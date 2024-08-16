import { FaLinkedin, FaGithub, FaLocationArrow, FaHome } from 'react-icons/fa';
import { LayoutRouteProps } from 'react-router-dom';
import cwIcon from '../../images/cw_icon.png';
import { CiMail, CiUser } from 'react-icons/ci';
const Layout = ({ children }:LayoutRouteProps) => {
 return (
 <>
 <header>
   <section>
    <a href="/">
     <img src={cwIcon} alt="CW logo"/>
    </a>
   </section>
   <nav>
    <ul>
      <li><a href="/about">About</a></li>
      <li><a href="/projects">Projects</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
   </nav>
 </header>
 <>
 {children}
 </>
 <footer>
   <div className='main-footer-container'>
   <section className='quick-links-section'>
    <li><a href="/about"><FaLocationArrow/> About</a></li>
    <li><a href="/projects"><FaLocationArrow/> Projects</a></li>
    <li><a href="/contact"><FaLocationArrow/> Contact</a></li>
    </section>
   <section className='general-info-section'>
    <div>
      <p><CiUser/> Casper Wernersson</p>
      <p><FaHome/> Karlshamn</p>
      <p><a href="mailto:cappew1996@gmail.com"><CiMail/> Cappew1996@gmail.com</a></p>
    </div>
   </section>
    <section className='social-media-section'>
    <a href="https://www.linkedin.com/in/cw1996/" target="_blank" rel="noopener noreferrer">
     <FaLinkedin/>
    </a>
    <a href="https://github.com/Cappeloow" target="_blank" rel="noopener noreferrer">
     <FaGithub/>
    </a>
    <a href="mailto:cappew1996@gmail.com" target="_blank" rel="noopener noreferrer">
     <CiMail/>
    </a>
   </section>
    </div>
    <div className='copyright-container'>
      <p>Copyright © 2024 Casper Wernersson</p>
    </div>
 </footer>
 </>
 );
};
export default Layout;