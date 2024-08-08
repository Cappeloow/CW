import React from 'react';
import { LayoutRouteProps } from 'react-router-dom';
import cwIcon from '../assets/cw_icon.png';
const Layout = ({ children }:LayoutRouteProps) => {
 return (
 <>
 <header>
   <section>
    <a href="/">
     <img src={cwIcon} alt="CW logo" height={70} width={70}/>
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
   <p>Footer</p>
 </footer>
 </>
 );
};
export default Layout;