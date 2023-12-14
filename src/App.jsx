/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Cse from "./pages/Cse";
import Aboutus from "./pages/Aboutus";
import Agenda from "./pages/Agenda";
import Faq from "./pages/Faq";
import Circles from "./components/Circles";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import './App.css'
import Footer from "./components/footer";

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMobileScreen, setIsMobileScreen] = useState(false)
  const [showFooter, setShowFooter] = useState(false)

  // set isSidebarOpen to false if the screen's width >=768
  useEffect(() => {
    const handleResize = () => {
      // Check the screen width here
      const screenWidth = window.innerWidth;
      const isSmallScreen = screenWidth < 768; // Change this value to suit your needs

      // Update the state based on screen size
      setIsSidebarOpen(isSmallScreen ? isSidebarOpen : false);
      setIsMobileScreen(screenWidth < 768); // Set isMobileScreen based on screen width
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
      <Navbar isMobileScreen={isMobileScreen} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} setShowFooter={setShowFooter}/>
      {isMobileScreen && <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} setShowFooter={setShowFooter}/>}
      <div className="w-screen min-h-[86.7vh] relative overflow-hidden">
        <div className="max-w-6xl m-auto px-12">
          <Circles/>
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
        {showFooter && <Footer isMobileScreen={isMobileScreen}/>}
      </div>
    </BrowserRouter>
  )
}

export default App
