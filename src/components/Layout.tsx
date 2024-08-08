import React from 'react';
import { LayoutRouteProps } from 'react-router-dom';
const Layout = ({ children }:LayoutRouteProps) => {
 return (
 <>
 <header>
   <p>Header</p>
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