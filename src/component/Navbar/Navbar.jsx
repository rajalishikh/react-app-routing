import React, { useState } from 'react';
import { MdOutlineClose } from "react-icons/md";
import { SlHome } from "react-icons/sl";

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
            <ul className='md:flex gap-3 items-center'>
            <div className='text-3xl' onClick={()=>setOpen(!open)}>
            {
                open?<SlHome/>:<MdOutlineClose />
            }
            </div>

            {
                navbarData.map(item=><li>{item.name}</li>)
            }
            
            </ul>
        </div>
    );
};

export default Navbar;