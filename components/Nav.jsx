import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import logo from '../public/img/logo_w.png'

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [nav, setNav] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="w-full shadow-md bg-blue-500 fixed top-0 z-10 h-16 lg:h-18 xl:h-20">
      <div className="justify-between md:justify-start flex px-4 mr-5 mt-4 xl:max-w-full md:items-center md:px-8 h-10">
      <Image src={logo} width={40} alt='logo' className="justify-start hover:scale-110 duration-200 xl:mb-5 2xl:mt-10 mr-3"/>
      <p className='text-white mt-1 text-xl md:text-2xl xl:text-3xl md:mt-0 xl:mt-3'>Alphaknot</p>
          <ul className='hidden md:mt-0 text-base xl:text-xl font-bold md:flex xl:flex text-white xl:mt-2 xl:mr-5'>      
            <li className=' md:ml-14 hover:scale-105 duration-200'>
            <a href=''>Browse Database</a>
            </li>
            <li className=' md:ml-14 hover:scale-105 duration-200'>
            <a href=''>Advanced Search</a>
            </li>
            <li className=' md:ml-14 hover:scale-105 duration-200'>
            <a href=''>Process my structure</a>
            </li>
            <li className='md:ml-14 relative' ref={dropdownRef}>
        <span className='cursor-pointer' onClick={toggleDropdown}>Read More</span>
        {dropdownOpen && (
          <div className='absolute right-0 mt-2 w-48 rounded-md shadow-lg py-2 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Check this 1</a>
        
          </div>
        )}
      </li>

          </ul>

          {/* Hamburger Icon */}
          <div className='md:hidden ml-auto hover:scale-105 duration-200 text-white' onClick={handleNav}><AiOutlineMenu size={35}/>
          </div>

        </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }>

        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-900 p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <div onClick={handleNav} className='rounded-full bg-gray-500 text-purple-600 p-3 cursor-pointer'><AiOutlineClose/>
              </div>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase font-bold text-purple-600 text-lg'>
              <li onClick={() => setNav(false)} className='py-4'>
              <a href=''>Browse Database</a>
              </li>
              <li onClick={() => setNav(false)} className='py-4'>
              <a href=''>Advanced Search</a>
              </li>
              <li onClick={() => setNav(false)} className='py-4'>
              <a href=''>Process my structure</a>
              </li>
              <li onClick={() => setNav(false)} className='py-4'>
              <a href=''>Read More</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;