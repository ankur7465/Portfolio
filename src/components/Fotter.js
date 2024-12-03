import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section - Contact and Social Media */}
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold mb-2">Ankur Kumar</h2>
            <p className="text-lg mb-2">Software Developer | Tech Enthusiast</p>
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/ankur7465" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github text-2xl hover:text-blue-500"></i>
              </a>
              <a href="https://www.linkedin.com/in/ankur-kumar-a396b0263/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin text-2xl hover:text-blue-700"></i>
              </a>
              <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-envelope text-2xl hover:text-red-500"></i>
              </a>
            </div>
            <p className="text-sm text-gray-400">Let's Connect!</p>
          </div>

          {/* Right Section - Quick Links */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="text-lg text-gray-300">
              <li><a href="/" className="hover:text-blue-400 mb-2">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400 mb-2">About Me</a></li>
              <li><a href="/projects" className="hover:text-blue-400 mb-2">Projects</a></li>
              <li><a href="/contact" className="hover:text-blue-400 mb-2">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ankur Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
