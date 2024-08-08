import React from 'react';
import { LayoutRouteProps } from 'react-router-dom';
import cwIcon from '../assets/cw_icon.png';
const Layout = ({ children }:LayoutRouteProps) => {
 return (
 <>
 <header>
   <section>
     <img src={cwIcon} alt="CW logo" height={70} width={70}/>
   </section>
   <nav>
    <ul>
      <li>one</li>
      <li>two</li>
      <li>three</li>
    </ul>
   </nav>
 </header>
 <main>
 {children}
 </main>
 <footer>
   <p>Footer</p>
 </footer>
 </>
 );
};
export default Layout;