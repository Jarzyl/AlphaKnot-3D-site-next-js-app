import React from 'react';
import KnotLoad from './Loaders/KnotLoad';
import Image from 'next/image';
// import KnotDraco from './KnotDraco'
import logo from '../public/img/logo.png';

const Search = () => {
  return (
    <section id='Search' className='w-full h-full xl:h-screen p-2 flex items-center py-4 px-6 md:px-10 dark:text-gray-600 text-gray-200 mt-20 md:mt-44 lg:mt-12'>
  <div className='w-full flex justify-center'>
    <div className='w-full md:grid grid-cols-2 gap-8 justify-items-center'>
      <div className='bg-blue-500 w-full md:w-3/4 text-center text-white rounded-3xl md:h-72 md:mt-16'>
        <div className='grid md:flex justify-center'>
          <h1 className="text-4xl xl:text-6xl font-bold mb-6 mt-6">Alphaknot</h1>
          <Image src={logo} width={55} className='mx-auto md:mx-0 md:ml-5 mb-4 mt-2'/>
        </div>
        <input type="text" placeholder='Search by Uniprot ID, PDB Code, Organism, Knot Fingerprint or Name of Protein' className='mb-6 w-72 md:h-8 text-lg md:text-xl focus:outline-none text-gray-400'/>
        <p className='m-4 mt-0 font-bold text-lg'>Examples: Q8WXI7, 1J8E, HUMAN, K 6.3, 3.1, Titin</p>
        <button className='text-white text-base md:text-2xl font-bold bg-gray-500 rounded-lg h-10 w-24 hover:scale-105 duration-200 mb-6'>Search</button>
      </div>
       
      <div className='w-full mt-10'>
        {/* <KnotLoad/> */}
      </div>
    </div>
  </div>
</section>

  );
};

export default Search;