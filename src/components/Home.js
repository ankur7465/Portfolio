import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="mt-6 max-w-screen-2xl container mx-auto px-4 md:px-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-10 md:mt-16">
        
        {/* Text Section */}
        <div className="md:w-1/2 space-y-6 md:space-y-8 px-6 md:px-0">
          <h1 className="text-3xl md:text-4xl font-serif mb-4">
            Welcome to My Portfolio
          </h1>
          
          <p className="text-xl text-gray-700">
            I am a <span className="text-cyan-400 font-bold">Software Engineer</span>.
          </p>
          
          <h2 className="text-lg md:text-xl font-medium text-gray-600 mb-1 font-serif">
            This is my personal website. Discover my skill set, career achievements, and creative portfolio here.
          </h2>
          
          <h3 className="text-lg md:text-xl font-medium text-gray-600 font-serif">
            I am pursuing an MCA from Chandigarh University.
          </h3>
          
          <div className="flex flex-col space-y-4">
            <h4 className="text-xl font-medium">Available on:</h4>
            <div className="flex space-x-6">
              {/* Social Media Icons */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <FaFacebook size={40} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                <FaTwitter size={40} />
              </a>
              <a href="https://www.linkedin.com/in/ankur-kumar-a396b0263/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                <FaLinkedin size={40} />
              </a>
              <a href="https://github.com/ankur7465" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700">
                <FaGithub size={40} />
              </a>
            </div>

            {/* Download Resume Button */}
            <div>
              <a
                href="AnkurKumar1.pdf" // Path to your resume file
                download="AnkurKumar1.pdf" // Downloaded file name
                className="mt-4 inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded shadow-lg transition duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img 
            src="/a1.jpg" 
            alt="Profile" 
            className="w-[350px] h-[350px] md:w-[400px] md:h-[400px] rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
