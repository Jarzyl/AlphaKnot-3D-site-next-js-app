import Image from "next/image";
import ilbsm from '../public/img/ilbsm.png';

function Footer () {
    return (
      <footer className="bg-sky-400 text-center text-xs xl:text-base  text-white">
    <div className="grid items-center justify-center mt-1">
      <h1 className="text-lg font-bold cursor-pointer"> AlphaKnot
      </h1>
      <h2 className="text-gray-600 cursor-pointer">Server to measure entanglement in AlphaFold-solved protein models while considering pLDDT confidence values.</h2>
      <hr className="w-1/2 mx-auto h-0.5 bg-white mb-2 mt-1"></hr>

      <div className="mx-auto text-gray-600 cursor-pointer"><Image src={ilbsm} className='mx-auto' alt="logo"/> Interdisciplinary Laboratory of Biological Systems Modelling
      <p>Center of New Technologies, University of Warsaw</p></div>
      
      <a href="http://jsulkowska.cent.uw.edu.pl" target='_blank'>
      <p> Questions should be addressed to: Joanna Sulkowska (jsulkowska AT cent.uw.edu.pl)</p></a>
      <p className="cursor-pointer">Technical support: Paweł Rubach (prubach AT cent.uw.edu.pl)</p>
      <div className="text-xs mt-1"> 
        <p className="text-base cursor-pointer">Authors</p>  
        <span className="cursor-pointer">This database has been created in a joint collaboration between:
        W. Niemyska<sup>1,2</sup>, P. Rubach<sup>1,3</sup>, B. Greń<sup>1</sup>,
        M. Lan Nguyen<sup>1</sup>, W. Garstka<sup>1</sup>, F. Bruno<sup>1</sup>, 
        E. J. Rawdon<sup>4</sup>, J. I. Sulkowska<sup>1</sup>, B. Jarzyło<sup>3</sup>:</span>
        <p className="cursor-pointer">
        1. <i>University of Warsaw, Centre of New Technologies</i>;
        2. <i>University of Warsaw, MIM</i>;
        3. <i>Warsaw School of Economics</i>; 
        4. <i>University of St. Thomas, Saint Paul, MN, USA, Department of Mathematics</i>.</p></div>
        <div className="flex items-center justify-center mt-1 mb-1">
        <p className="text-base"> &copy; All rights reserved |</p> <button className=' text-base ml-2'>How to cite</button>
        </div>
    </div>
    
  <hr className="w-1/2 mx-auto h-0.5 bg-white"></hr>
      <div className="bg-sky-400 pt-1 pb-1 text-center xl:text-base text-white"> © 2023 Copyright: Bartosz Jarzyło
      
      </div>
      
</footer>
  );
};

export default Footer;