import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../assets/Header-LogoV2.png';
import Resume from '../assets/AaronFW-Resume-2025.pdf';

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='bg-[#9e1313] z-50 fixed top-0 left-0 w-full border-b-4 border-shade'>
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#ecebf3]'>
        <a href='#intro' target='_self'>
          <img className='w-[60px] my-4' src={Logo} alt='A logo' />
        </a>
        <ul className='hidden text-xl md:flex'>
          <li className='p-4'>
            <a className='hover:underline' href='#project-sec' target='_self'>
              Projects
            </a>
          </li>
          <li className='p-4'>
            <a className='hover:underline ' href='#about-sec' target='_self'>
              About
            </a>
          </li>
          <li className='p-4'>
            <a className='hover:underline' href='#footer-sec' target='_self'>
              Contact
            </a>
          </li>
          <li className='p-4'>
            <a className='hover:underline' href={Resume} target='_blank' rel='noreferrer'>
              Resume
            </a>
          </li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        <div
          className={
            !nav
              ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-700'
              : 'fixed left-[-100%]'
          }>
          <img className='w-[80px] my-4 ml-4' src={Logo} alt='A logo' />
          <ul className='p-4 uppercase'>
            <li className='p-4 border-b border-gray-600'>
              <a onClick={handleNav} href='#project-sec' target='_self'>
                Projects
              </a>
            </li>
            <li className='p-4 border-b border-gray-600'>
              <a onClick={handleNav} href='#about-sec' target='_self'>
                About
              </a>
            </li>
            <li className='p-4 border-b border-gray-600'>
              <a onClick={handleNav} href='#footer-sec' target='_self'>
                Contact
              </a>
            </li>
            <li className='p-4 border-b border-gray-600'>
              <a onClick={handleNav} href={Resume} target='_blank' rel='noreferrer'>
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
