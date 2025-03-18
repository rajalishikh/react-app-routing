import React, { useState } from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import NavBarDetails from '../Navbardetails/NavBardetails';

const Navbar = () => {
    const navbarData = [
        { id: 1, name: 'Home', link: '/' },
        { id: 2, name: 'About', link: '/about' },
        { id: 3, name: 'Services', link: '/services' },
        { id: 4, name: 'Contact', link: '/contact' },
        { id: 5, name: 'Blog', link: '/blog' }
      ];
      const [open,setOpen]=useState(true)
      
    return (
        <div>
            <div onClick={
                ()=>setOpen(!open)
               } className='text-3xl md:hidden'>
                {
                    open?<IoHomeOutline />:<MdOutlineClose />
                }

            </div>
            <ul>
            <div className={`md:flex gap-3 relative duration-1000 md:static ${open?'top-2':"-top-60 "} `}>
            {
                navbarData.map(item=><NavBarDetails item={item}></NavBarDetails>)
            }
            </div>
            </ul>
        </div>
    );
};

export default Navbar;