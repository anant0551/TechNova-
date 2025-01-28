import React from 'react'
import { assets, Team_MemberData } from '../assets/assets';
import { motion } from "framer-motion"
import { HiMiniCubeTransparent } from 'react-icons/hi2';

const About_us = () => {
  return (
    <motion.div
    initial={{opacity:0, y:100}}
    transition={{duration:1.5}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}} className='overflow-hidden' id='About'>
   
  <section className="bg-gray-300 mx-5 mb-8 md:mx-10">
  <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
    <div className="md:flex md:items-end md:justify-between">
      <div className="max-w-xl md:max-w-3xl">
        <h2 className="text-4xl font-bold tracking-tight text-black poppins-light sm:text-5xl">
        <span className='text-black text-4xl text-center md:text-5xl text-glow1'> + </span>
        Who We Are
        </h2>

        <p className="mt-6 md:mt-10 max-w-lg md:max-w-3xl font-semibold text-md md:text-xl leading-relaxed text-black">
        TechNova is committed to driving technological innovation that enhances productivity, security, and creativity. We bridge the gap between cutting-edge advancements and real-world applications, empowering businesses and individuals globally.
        </p>
      </div>

      <a
        href="#team"
        className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-cyan-600 px-5 py-3 text-cyan-600 transition hover:bg-blue-600 hover:text-white md:mt-0"
      >
        <span className="font-medium poppins-light"> Meet Our Team </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-4 rtl:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>
    </div>

    <article className="flex-col  mt-10 md:mt-24  " id='team'>
    {Team_MemberData.map((Team_Member, index)=>(
      <div key={index} className='flex flex-col sm:flex-row mb-6 border-white bg-slate-400 md:shadow-blue-500 md:hover:shadow-lg md:hover:scale-110 transition-all duration-300 border-2 rounded-lg'>
      <div className="md:rotate-180 p-2 md:[writing-mode:_vertical-lr]">
        
          <span>Exp.</span>
          <span className="w-px flex-1 bg-gray-900/10"></span>
          <span>{Team_Member.experience}</span>
        
      </div>

      <div className="hidden sm:block sm:basis-56">
        <img
          alt={Team_Member.alt}
          src={Team_Member.image}
          className="aspect-square h-full rounded-lg w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
          <a href="#">
            <h3 className="font-bold uppercase text-gray-900">
              {Team_Member.name}
            </h3>
            <p className='text-gray-500 mb-4 text-sm'>{Team_Member.title}</p>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
          {Team_Member.description}
          </p>
        </div>

        <div className="sm:flex sm:items-end sm:justify-end">
          <a
            href="#"
            className="block bg-sky-400 px-5 py-3 rounded-lg text-center text-xs font-bold uppercase text-black transition hover:bg-sky-600"
          >
            Know More
          </a>
        </div>
      </div>
      </div>))}
    </article>
      <span className="flex mt-5 items-center">
        <span className="h-px flex-1 w-2/4 text-left bg-black "></span>
        <HiMiniCubeTransparent className="pl-6 text-blue-700 text-5xl md:text-8xl animate-pulse text-glow1"/>
      </span>
    </div>
  </section>
</motion.div>
  )
}

export default About_us
