import React from 'react';
import Image from 'next/image';
import KnotLoad from './Loaders/KnotLoad';
import logo from '../public/img/logo.png';

const Search = () => {
  return (
    <section className='w-full h-full md:h-screen p-2 flex items-center py-4 px-6 md:px-10 dark:text-gray-600 text-gray-200 mt-16 lg:mt-12'>
  <div className='w-full flex justify-center'>
    <div className='w-full lg:grid grid-cols-2 gap-8 justify-items-center'>
      <div className='bg-sky-400 w-full md:w-3/4 text-center text-white rounded-3xl md:h-72 mx-auto'>
        <div className='grid md:flex justify-center'>
          <h1 className="text-3xl xl:text-4xl font-bold mb-6 mt-6">AlphaKnot</h1>
          <Image src={logo} width={55} className='mx-auto md:mx-0 md:ml-5 mb-4 mt-2' alt='alphaknot-logo'/>
        </div>
        <input type="text" placeholder='Search by Uniprot ID, PDB Code, Organism, Knot Fingerprint or Name of Protein' className='mb-6 w-72 md:h-8 text-lg md:text-xl focus:outline-none text-gray-400'/>
        <p className='m-4 mt-0 font-bold text-lg'>Examples: Q8WXI7, 1J8E, HUMAN, K 6.3, 3.1, Titin</p>
        <button className='text-white text-base md:text-xl font-bold bg-gray-500 rounded-lg h-8 pl-1 pr-1 hover:scale-105 duration-200 mb-6'>Search</button>
      </div>
       
      <div className='w-full mt-10 md:mt-0 h-64 md:h-96 xl:h-full'>
        <KnotLoad/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;