import React from "react";

const About = () => {
  return (
    <section className="bg-gray-50 py-12  dark:bg-gray-900 ">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Column - Image */}
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <img
              src="a1.jpg" // Replace with your image URL
              alt="Ankur Kumar, Software Developer"
              className="w-48 h-48 object-cover rounded-full mx-auto shadow-lg"
            />
          </div>

          {/* Right Column - Text Content */}
          <div className="lg:w-2/3 text-center lg:text-left">
            <h2 className="text-3xl font-semibold mb-4 font-serif">
              About Me
            </h2>
            <p className="text-lg  mb-6 font-serif">
              Hi, I’m Ankur Kumar, a motivated and enthusiastic software developer eager to kickstart my career in the tech industry. I recently graduated with a degree in <strong>BCA</strong> from <strong>Dr. Bhimrao Ambedkar University, Agra</strong>, where I gained hands-on experience in front-end and back-end development using technologies like <strong>React, HTML, Node.js, MongoDB, JavaScript, and Tailwind CSS</strong>.
            </p>
            <p className="text-lg mb-6 font-serif">
              I am passionate about creating user-friendly, responsive applications and solving problems through code. My academic projects have allowed me to apply my skills in a real-world context, and I am always looking for opportunities to learn and grow.
            </p>
            <p className="text-lg mb-6 font-serif">
              Outside of coding, I enjoy exploring new tech trends, reading about the latest developments in software, and working on personal projects to expand my knowledge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
