import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar2 from './components/Navbar2';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Certificate from './components/Certificate';
import Projects from './components/Projects';
import Footer from './components/Fotter';

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* Navbar and Theme Toggle */}
      <Navbar2 />
    
      <Routes>
        {/* Main Route - Home and Sections */}
        <Route 
          path="/" 
          element={
            <>
              <Home />
              <Experience />
              <Projects />
              <Certificate/>
              <About />
              <Contact />
              
              
              
              
            </>
          }
        />
        {/* Individual Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificate" element={<Certificate />} />
       
      </Routes>
     <Footer/>
    </div>
  );
}

export default App;
