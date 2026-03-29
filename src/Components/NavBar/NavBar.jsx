
import { Menu, X } from 'lucide-react';
import Link from './Link'
import React, { useState } from 'react';

const navigationData = [
  {
    id: 1,
    name: "Google",
    path: "https://www.google.com"
  },
  {
    id: 2,
    name: "YouTube",
    path: "https://www.youtube.com"
  },
  {
    id: 3,
    name: "Facebook",
    path: "https://www.facebook.com"
  },
  {
    id: 4,
    name: "Twitter (X)",
    path: "https://twitter.com"
  },
  {
    id: 5,
    name: "Instagram",
    path: "https://www.instagram.com"
  },
  {
    id: 6,
    name: "LinkedIn",
    path: "https://www.linkedin.com"
  },
  {
    id: 7,
    name: "GitHub",
    path: "https://github.com"
  },
  {
    id: 8,
    name: "Stack Overflow",
    path: "https://stackoverflow.com"
  },
  {
    id: 9,
    name: "Wikipedia",
    path: "https://www.wikipedia.org"
  },
  {
    id: 10,
    name: "Netflix",
    path: "https://www.netflix.com"
  }
];
const NavBar = () => {
  const [open,setOpen]=useState(false);
  const links= navigationData.map(route => <Link key={route.id} route={route}></Link>)
          
    return (
        <nav className='flex justify-between mx-10 '>
          <span className='flex' onClick={()=>setOpen(!open)}> 
            {
            open ? <X className='md:hidden'></X> :  <Menu className='md:hidden'></Menu>
            }
            
           <ul className={`md:hidden absolute duration-1000 ${open ? 'top-8' : '-top-60'} bg-amber-300 `}>
            {links}
           </ul>
          <h3 className='ml-4'>My Navbar</h3>
          </span>
            <ul className='md:flex hidden'>
                {
                   links
                }
            </ul>
            <button>Sign in</button>
        </nav>
    );
};

export default NavBar;