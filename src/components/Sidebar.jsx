import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenu } from 'react-icons/hi';
import { logo } from '../assets';
import { links } from '../assets/constants';

const NavLinks = () => (
 <div className='mt-10'>
  {links.map(link => 
   (<NavLink 
        className="flex flex-row justify-start items-center my-10 text-sm text-gray-300 hover:text-cyan-400"
        to={link.to}
        key={link.name}
    >
      <link.icon className='w-6 h-6 mr-2'/>
      {link.name}
    </NavLink>
   ) 
  )}
 </div>
)

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      <div className='w-[250px] md:flex flex-col hidden bg-[#191624] py-10 px-10' >
        <img src={logo} alt="logo" className='w-30 h-14 self-center' />
        <NavLinks/>
      </div>
      <div className='absolute top-6 right-3 block md:hidden'>
        {mobileMenuOpen? 
        <RiCloseLine onClick={()=> setMobileMenuOpen(false)} className='w-6 h-6 text-white'/> : 
        <HiOutlineMenu onClick={()=> setMobileMenuOpen(true)} className='w-6 h-6 text-white'/>
        }
      </div>
      { mobileMenuOpen &&     
       (<div className='absolute top-0 left-0 h-screen w-1/2 md:hidden flex flex-col bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg z-10 py-10 px-10 animate-slideleft' >
        <div className='flex justify-center text-center'>
          <img src={logo} alt="logo" className='w-32 h-14' />
        </div>
        <NavLinks/>
       </div>)
      }
    </>
  )
}

export default Sidebar
