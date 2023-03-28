import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../public/img/logo_w.png';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [nav, setNav] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownRef1 = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const toggleDropdown1 = () => {
    setDropdownOpen1(!dropdownOpen1);
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) {
        setDropdownOpen1(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [dropdownRef1]);

  return (
    <div className="w-full shadow-md bg-sky-400 fixed top-0 z-10 h-16 lg:h-18 xl:h-20">
      <div className="justify-between md:justify-start flex px-4 mr-5 mt-4 xl:max-w-full md:items-center md:px-8 h-10">
      <Image src={logo} width={40} alt='logo' className="justify-start hover:scale-110 duration-200 xl:mb-5 2xl:mt-10 mr-3"/>
      <p className='text-white mt-1 text-xl md:text-2xl xl:text-3xl md:mt-0 xl:mt-3 font-bold'>Alphaknot</p>
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
          <div className='absolute mt-2 w-48 rounded-md shadow-lg shadow-sky-300 py-2 bg-white focus:outline-none text-gray-400'>
            <a href="#" className="block px-3 py-1 hover:bg-gray-200">About</a>
            <a href="#" className="block px-3 py-1 hover:bg-gray-200">Knot detection</a>
            <a href="#" className="block px-3 py-1 hover:bg-gray-200">How to interpret knotting data</a>
            <a href="#" className="block px-3 py-1 hover:bg-gray-200">How to use the server</a>
            <a href="#" className="block px-3 py-1 hover:bg-gray-200">How to search and browse the database</a>
            <a href="#" className="block px-3 py-1 hover:bg-gray-200">Server status</a>
            <a href="#" className="block px-3 py-1 hover:bg-gray-200">Database statistics</a>
            <a href="#" className="block px-3 py-1 hover:bg-gray-200">API</a>
            <a href="#" className="block px-3 py-1 hover:bg-gray-200">Contact & References</a>
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
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen' : ''}>

        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? 'fixed left-0 top-0 bottom-0 w-[100%] h-screen bg-sky-400 text-center p-6 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center'>
              <div onClick={handleNav} className='rounded-full bg-white text-gray-500 p-2 cursor-pointer'><AiOutlineClose/>
              </div>
            </div>
          </div>
          <div className='py-2 flex flex-col'>
            <ul className='uppercase text-white text-lg'>
              <li onClick={() => setNav(false)} className='py-2'>
              <a href=''>Browse Database</a>
              </li>
              <hr className="w-1/2 mx-auto h-0.5 bg-white mb-1"></hr>
              <li onClick={() => setNav(false)} className='py-2'>
              <a href=''>Advanced Search</a>
              </li>
                <hr className="w-1/2 mx-auto h-0.5 bg-white mb-1"></hr>
              <li onClick={() => setNav(false)} className='py-2'>
              <a href=''>Process my structure</a>
              </li>
                <hr className="w-1/2 mx-auto h-0.5 bg-white mb-1"></hr>
              <li className='md:ml-14 relative' ref={dropdownRef1}>
        <span className='cursor-pointer' onClick={toggleDropdown1}>Read More</span>
        {dropdownOpen1 && (
          <div className='mx-auto mt-2 w-64 rounded-md shadow-lg shadow-sky-300 py-2 bg-white  focus:outline-none text-gray-400'>
            <a href="#" className="block py-1">About</a>
            <a href="#" className="block py-1">Knot detection</a>
            <a href="#" className="block py-1">How to interpret knotting data</a>
            <a href="#" className="block py-1">How to use the server</a>
            <a href="#" className="block py-1">How to search and browse the database</a>
            <a href="#" className="block py-1">Server status</a>
            <a href="#" className="block py-1">Database statistics</a>
            <a href="#" className="block py-1">API</a>
            <a href="#" className="block py-1">Contact & References</a>
          </div>
        )}
      </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;