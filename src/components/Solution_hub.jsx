import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import React, { useState } from "react";
import { assets } from "../assets/assets";


const HomeTabs = () => {
  

  

  return (
    <div id="HomeTabs" className="-mt-80 md:mt-0">
      
      <div className='px-8 py-6 md:px-28 md:py-28 min-h-screen mb-4 bg-cover bg-cente bg-gradient-to-b from-sky-600 from-4% via-sky-950 via-7% to-black to-30% bg-opacity-20'>
        <div className='text-white md:ml-4 mb-8 text-xl md:text-2xl poppins-light'>
          <span className='text-black text-3xl text-center md:text-3xl text-glow1'> + </span>
          Next-Gen Technology Services
        </div>
        <div className='text-white flex flex-wrap md:flex-nowrap  md:w-[1232px] md:h-[320px] md:mx-12 justify-start '>
          <div className='md:w-96 text-4xl md:text-5xl poppins-medium leading-relaxed '>
          Integrated<span className='bg-gradient-to-b from-sky-400 to-blue-700 text-transparent bg-clip-text' > Solutions</span> for the Future.
          </div>
          <div className='text-xl  py-6 pt-36 ml-3 md:px-14 md:ml-8 poppins-light'>
          <HiMiniWrenchScrewdriver className='text-blue-600 md:text-5xl rounded-md text-3xl shadow-glow'/>
          <p className='md:w-10/12 px-8 md:px-14 '>TechNova delivers tailored technology solutions,<br /> from AI to cloud services, 
          designed to drive business growth. <br /> We help you innovate,
           optimize, and future-proof your operations</p>
          </div>    
        </div>
      </div> 
      
   
      <div className="mx-auto max-w-screen-xl px-4 py-8 md:px-6 -mt-80 md:-mt-32">
        <div className="grid grid-cols-1 gap-4 px-4 pt-6 pr-6 md:grid-cols-2 md:items-center ">
          <div>
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-2xl font-semibold text-white md:text-3xl">
                <span className='bg-gradient-to-b from-sky-400 to-blue-700 text-transparent bg-clip-text' >TechNova</span> WebCraft
              </h2>

              <p className="mt-4 text-white poppins-light">
              Whether it’s a sleek corporate site, a dynamic e-commerce platform, or a custom web application, our expert developers use the latest technologies to deliver exceptional digital solutions.
              </p>
            </div>
          </div>

          <div>
            <video autoPlay loop muted playbackrate={0.5}
              src={assets.webvid}
              className=" h-full w-full rounded-lg object-contain "
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 px-4 pr-6 pt-6 md:grid-cols-2 md:items-center ">
          <div>
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-2xl font-semibold text-white md:text-3xl">
              <span className='bg-gradient-to-b from-sky-400 to-blue-700 text-transparent bg-clip-text' >TechNova</span> CloudX
              </h2>

              <p className="mt-4 text-white poppins-light">
              From cloud migration to management and security, our experts design tailored solutions that ensure your data is always secure, accessible, and optimized for growth.
              </p>
            </div>
          </div>

          <div>
            <video autoPlay loop muted playbackrate={0.5}
              src={assets.cloud}
              className=" h-full w-full rounded-lg object-contain"
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 px-4 pr-6 pt-6 md:grid-cols-2 md:items-center ">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-white md:text-3xl">
                <span className='bg-gradient-to-b from-sky-400 to-blue-700 text-transparent bg-clip-text' >MachineMind</span> by TechNova
                </h2>

                <p className="mt-4 text-white poppins-light">
                Our tailored AI/ML services are designed to optimize operations, enhance customer experiences, and drive innovation.
                </p>
              </div>
            </div>

            <div>
              <video autoPlay loop muted playbackrate={0.5}
                src={assets.aiml}
                className=" h-full w-full rounded-lg object-contain"
                alt=""
                />
            </div>
        </div>
      </div>
  </div>
  );
};

export default HomeTabs;