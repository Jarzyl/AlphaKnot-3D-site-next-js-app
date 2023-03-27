import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import ProtLoad from './Loaders/ProtLoad';

function showDropdown() {
  document.getElementById("dropdown-options").classList.toggle("hidden");
}

const About = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  
  return (
    <section id='about' className='w-full xl:h-screen p-2 flex items-center py-4 px-6 md:px-10 dark:text-gray-600 text-gray-200'>
      <div className='w-full md:grid grid-cols-2 gap-8 justify-items-center'>
      <form id='form' className="w-full xl:w-3/5 md:w-4/5 mt-5 p-8 pt-2 md:p-0 md:pt-0 md:ml-36 bg-blue-500 rounded-3xl items-center text-white">
        <p className='text-center  text-xl md:text-2xl xl:text-4xl mb-3 mt-2'>Process my structure</p>
      <hr className="w-1/2 mx-auto h-0.5 bg-white mb-6"></hr>
      <div className='grid items-center justify-center'>
        <div className="mb-4 ">
    <label htmlFor="project-name" className="font-bold mr-2">
      Project name 
    </label>
    <input
      id="project-name"
      type="text"
      placeholder="Project name (optional)"
      className="w-60 px-4 py-2 rounded-lg border-2 border-white focus:outline-none text-gray-400"
    />
  </div>
  <div className="mb-4 ">
    <label htmlFor="email" className="font-bold mr-2">
      Email 
    </label>
    <input
      id="email"
      type="email"
      placeholder="Email (optional)"
      className="w-60 px-4 py-2 rounded-lg border-2 border-white focus:outline-none text-gray-400 md:ml-12"
    />
  </div>
  <div className="mb-4 grid md:flex ">
  <label htmlFor="input-format" className=" font-bold mr-2">
    Input data format
  </label>
  <select id="input-format" className="shadow appearance-none border text-gray-500 text-xs md:text-sm rounded focus:outline-none focus:shadow-outline w-32 py-1 px-3">
    <option disabled selected value="">
      Input file format
    </option>
    <option value="SPC" className='fond-bold m-1 text-lg'>Single protein chain</option>
    <option value="cif">cif|cif.gz format</option>
    <option value="pdb">pdb format</option>
    <option value="MC" className='fond-bold m-1 text-lg'>Multiple chains</option>
    <option value="cif">cif|cif.gz|pdb format</option>
  </select>
</div>
</div>
<div className="flex justify-center items-center">
  <button className='text-white text-lg font-medium bg-gray-500 rounded-lg h-8 w-14 hover:scale-105 duration-200' onClick={(e) => {
        e.preventDefault();}}>
    Help
  </button>
  <div className="text-left ml-5" ref={dropdownRef}>
      <button
        className='text-white text-lg font-medium bg-gray-500 rounded-lg h-10 w-36 hover:scale-105 duration-200'
        onClick={(e) => {
          e.preventDefault();
          toggleDropdown();
        }}>
        Example Results
      </button>
      {dropdownOpen && (
        <div
          id="dropdown-options"
          className="absolute z-50 mt-2 py-2 w-28 bg-white rounded-md shadow-xl">
          <p
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            value="Option 1">
            Knotted chain
          </p>
          <p
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            value="Option 2">
            Knotted Multimodel
          </p>
          <p
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            value="Option 3">
            Unknotted chain
          </p>
        </div>
      )}
    </div>
    </div>
<hr className="w-1/2 mx-auto h-0.5 bg-white mt-6 mb-6"></hr>
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-gray-500 text-white rounded-lg hover:scale-105 duration-200 p-1 xl:text-2xl mb-3 h-10 xl:h-14"
            onClick={(e) => {e.preventDefault();}}>Submit data</button>
        </div>
      </form>
        <div className='w-full md:mt-5 h-96'>
          {/* <ProtLoad/> */}
        </div>
        </div>
    </section>
  );
};

export default About;