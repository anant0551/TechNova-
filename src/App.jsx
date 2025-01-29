import React, { useState, useEffect } from "react";
import ContactUs from './components/ContactUs';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeTabs from './components/Solution_hub';
import Loader from "./components/Loader";
import About_us from './components/AboutUS';



const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Simulating content loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="flex h-screen items-center justify-center bg-black text-white text-2xl">
          <Loader/>
        </div>
      ) : (
         <div className="content bg-black">
            <Header/>
            <HomeTabs/>
            <About_us/>
            <ContactUs/>
            <Footer/>
          </div>
        
      )}
    </div>
   
  )
}

export default App
