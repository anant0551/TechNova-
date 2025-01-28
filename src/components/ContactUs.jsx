import React, { useState } from 'react';


const ContactUs = () => {
  

  return (
    <section id="Contact" className=" bg-black py-16 flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className='md:w-96 w-full px-6 mx-0 text-white text-4xl md:text-5xl md:flex items-center justify-center poppins-medium leading-relaxed '>
          IntegratedNeed <span className='bg-gradient-to-b from-sky-400 to-blue-700 text-transparent bg-clip-text' > Assistance?</span> 
      </div>
      <div className="container px-5 py-24  mx-auto flex sm:flex-nowrap flex-wrap">
        {/* Map Section */}
        <div className="lg:w-2/3 md:w-1/2 bg-blue-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=London+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
            style={{ filter: "grayscale(0) contrast(1.2) opacity(0.6)" }}
          ></iframe>
          <div className="bg-white relative poppins-medium flex flex-wrap py-6 rounded shadow-md w-full">
            <div className="lg:w-1/2 px-6">
              <h2 className="font-bold text-gray-800">ADDRESS</h2>
              <p className="mt-1">123 Main Street, London, UK</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="font-bold text-gray-800">EMAIL</h2>
              <a href="mailto:your@email.com" className="text-teal-500 leading-relaxed">
                your@email.com
              </a>
              <h2 className="font-bold text-gray-800 mt-4">PHONE</h2>
              <a href="tel:123-456-7890" className="leading-relaxed">
                123-456-7890
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="lg:w-1/3 md:w-1/2 bg-white flex px-5 py-5 flex-col poppins-medium md:ml-auto md:px-5 rounded-md w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-teal-500 text-lg mb-2 font-medium">Get in Touch</h2>
          <p className="mb-5 text-gray-600">
            Have questions, suggestions, or just want to say hello? We'd love to hear from you! Drop us a message and we'll get back to you as soon as possible.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-800">
              Name
            </label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 text-base outline-none text-gray-800 py-1 px-3 leading-8" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-800">
              Email
            </label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 text-base outline-none text-gray-800 py-1 px-3 leading-8" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-800">
              Message
            </label>
            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 h-32 text-base outline-none text-gray-800 py-1 px-3 resize-none"></textarea>
          </div>
           <button className="inline-flex h-12 animate-shimmer items-center  justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
           Let’s Connect
        </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
