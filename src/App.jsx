/* eslint-disable no-unused-vars */
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Cse from "./pages/Cse";
import Aboutus from "./pages/Aboutus";
import Agenda from "./pages/Agenda";
import Faq from "./pages/Faq";
import Navbar from "./components/Navbar";

import './App.css'
import { useState, useEffect } from "react";

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // set isSidebarOpen to false if the screen's width >=768
  useEffect(() => {
    const handleResize = () => {
      // Check the screen width here
      const screenWidth = window.innerWidth;
      const isSmallScreen = screenWidth < 768; // Change this value to suit your needs

      // Update the state based on screen size
      setIsSidebarOpen(isSmallScreen ? isSidebarOpen : false);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize on initial render
    handleResize();

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isSidebarOpen]);

  return (
    <BrowserRouter>
      <Navbar sidebarOpen isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="max-w-6xl m-auto px-12">
        {!isSidebarOpen && 
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="cse" element={<Cse/>} />
            <Route path="about-us" element={<Aboutus/>} />
            <Route path="agend" element={<Agenda/>} />
            <Route path="faq" element={<Faq/>} />
          </Route>
        </Routes>}
      </div>
    </BrowserRouter>
  )
}

export default App
