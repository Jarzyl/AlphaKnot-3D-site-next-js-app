import React from 'react';
import Link from 'next/link';
import SlipknotLoad from './Loaders/SlipknotLoad';

const About = () => {
  return (
    <section id='about' className='w-full xl:h-screen p-2 flex items-center py-4 px-6 md:px-10 dark:text-gray-600 text-gray-200'>
      <div className='w-full md:grid grid-cols-2 gap-8'>
        <div className='w-full mt-10'>
          {/* <SlipknotLoad/> */}
        </div>
        
        <div className='bg-blue-500 w-full text-center text-white rounded-3xl md:h-96 md:mt-16'>
        <div className='grid md:flex justify-center'>
          <h1 className="text-3xl xl:text-6xl font-bold mb-6 mt-6">What is Alphaknot?</h1>
          
        </div>
        <p className='m-4 mt-0 text-sm'>AlphaKnot – server to measure entanglement in AlphaFold-solved protein models while considering pLDDT confidence values. AlphaKnot has two main functions: 1) providing researchers with a webserver for analyzing knotting in their own AlphaFold predictions and 2) cataloging knotting in AlphaFold predictions from 21 proteomes for which models have been published. Depending on the pLDDT confidence values, entanglements are classified as knots, unsure, and artifacts. The topology is defined in a probabilistic way. The dominant knot type as well as the computed locations of the knot cores (i.e. minimal portions of protein backbones that form a given knot type) are shown for each protein structure. The knotting complexity of proteins is presented in the form of a matrix diagram that shows users the knot type for the entire polypeptide chain and for each of its subchains.</p>
        <button className='text-white text-base md:text-2xl font-bold bg-gray-500 rounded-lg h-10 w-32 hover:scale-105 duration-200 mb-6'>Learn more</button>
      </div>

      </div>
    </section>
  );
};

export default About;