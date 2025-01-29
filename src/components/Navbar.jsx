import React, { useEffect, useState } from 'react'
import { HiMiniEquals, HiMiniXMark } from "react-icons/hi2";
import {assets} from '../assets/assets'

const Navbar = () => {

    const [showMobileMenu,setShowMobileMenu] = useState(false)
useEffect(()=>{
    if(showMobileMenu){
        document.body.style.overflow='hidden'
    }else{
        document.body.style.overflow='auto'
    }
    return()=>{
         document.body.style.overflow='auto'
    }
},[showMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full  overflow-hidden z-10'>
        <div className='container mx-auto flex justify-between items-center rounded-md px-6 md:px-0 md:mx-10 md:h-[50px]  md:mt-8 mt-3
         fixed top-0 right-0 left-0 backdrop-blur-md'>
        <a href="/" className=" relative w-[128px] h-[30px] md:w-[213px] md:h-[50px]  ">
                <img src={assets.logo_bhnd} className="grayscale h-full w-full rounded-lg object-contain" alt="logo" />
                <video autoPlay loop muted className="grayscale absolute top-0 h-full w-full rounded-lg object-contain">
                    <source src={assets.logo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </a>

            <ul className='hidden text-lg  md:flex gap-7 text-white  poppins-light'>
                <a href ="#Header" className='cursor-pointer text-glow px-2 hover:text-l_blue' >Home</a>
                <a href ="#HomeTabs" className='cursor-pointer text-glow px-2 hover:text-l_blue' >Digital Solutions Hub</a>
                <a href ="#About" className='cursor-pointer text-glow px-2 hover:text-l_blue' >About Us</a>
                <a href ="#Contact" className='cursor-pointer text-glow px-2 hover:text-l_blue' >Contact Us</a>
            </ul>
            <button className='hidden md:block bg-white text-center hover:bg-transparent hover:text-l_blue px-8 text-xl py-2 bebas-neue-regular rounded-full shadow-lg  hover:shadow-glow hover:scale-105 transition-all duration-300'>Sign Up</button>
            <HiMiniEquals onClick ={()=> setShowMobileMenu(true)}  className='md:hidden w-8 h-8 cursor-pointer text-white' />
        </div> 
        {/*--------mobile view--------*/} 
        <div className={`md:hidden fixed inset-0 w-full h-full backdrop-blur-lg bg-black/50 transition-transform duration-300 ease-in-out 
    ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className='flex justify-end p-6 cursor-pointer'>
                <HiMiniXMark onClick={()=>setShowMobileMenu(false)} className='w-10 h-10 text-white cursor-pointer' />
            </div>
    <ul className='flex flex-col items-center text-white gap-4 mt-5 px-5 text-xl font-medium bebas-neue-regular'>
        <a onClick={()=>setShowMobileMenu(false)} href="#Header" className='px-4 py-2 hover:text-l_blue'>Home</a>
        <a onClick={()=>setShowMobileMenu(false)} href="#HomeTabs" className='px-4 py-2 hover:text-l_blue'>Digital Solution</a>
        <a onClick={()=>setShowMobileMenu(false)} href="#About" className='px-4 py-2 hover:text-l_blue'>About Us</a>
        <a onClick={()=>setShowMobileMenu(false)} href="#Contact" className='px-4 py-2 hover:text-l_blue'>Contact Us</a>    
    </ul>    
    </div>  
    </div>
  )
}

export default Navbar
