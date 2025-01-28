import React from 'react'
import ContactUs from './components/ContactUS';
import Header from './components/Header';

import Footer from './components/Footer';
import HomeTabs from './components/Solution_hub';

import About_us from './components/AboutUS';

const App = () => {
  return (
    <div className="bg-black">
      <Header/>
      <HomeTabs/>
      <About_us/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default App
