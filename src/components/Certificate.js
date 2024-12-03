import React, { useState } from 'react';


export default function Certificate() {
  const certificates = [
    {
      title: "Data science and Machine learning Internship",
      description: "We learned Data science and machine learning at Ybi Foundation.",
      imgSrc: "C4.png",
    },
    {
      title: "Python Programming",
      description: "We learned Python programming on Coursera.",
      imgSrc: "C1.png",
    },
    {
      title: "React Js Certificate",
      description: "Understanding of React components, lifecycle, state, props management, and building single-page apps with React Router.",
      imgSrc: "C2.png",
    },
    {
      title: "Java Programming",
      description: "Specialized in website development for educational institutions.",
      imgSrc: "C3.png",
    },
    {
      title: "AWS Cloud Certificate",
      description: "Learning cloud computing fundamentals through AWS services.",
      imgSrc: "C5.png",
    },
    {
      title: "Node Js Certificate",
      description: "Enhanced project creation and database connectivity skills using Node.js.",
      imgSrc: "c.png",
    },
    {
      title: "Flipkart Participation Certificate",
      description: "Participating in big companies like Flipkart enhanced creativity and potential.",
      imgSrc: "C6.png",
    },
    {
     title:"Backend Bootcamp Certificate  ",
     description:"A Backend Bootcamp Certificate signifies the completion of a training program focused on backend development. It demonstrates proficiency in server-side programming, database management, and API development.",
     imgSrc:"c7.png"
    },
    {
    title:"Accenture Internship Certificate ",
    description:"The Developer and Technology Job Simulation Certificate of Completion recognizes the successful completion of an immersive training program designed to simulate real-world developer and technology roles.",
    imgSrc:"c8.png"
    },
  ];

  return (
    <div>
      <section className="services bg-[#dededed9] py-12 bg-gray-50   dark:bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {certificates.map((certificate, index) => (
              <FlippingCard key={index} certificate={certificate} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Flip card component
function FlippingCard({ certificate }) {
  const [flipped, setFlipped] = useState(true);

  const toggleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div 
      className="relative w-full h-80 bg-gray-100 shadow-lg rounded-lg perspective-1000 cursor-pointer"
      onClick={toggleFlip}
    >
      <div 
        className={`w-full h-full transition-transform duration-700 ease-in-out transform-style-3d ${flipped ? 'rotate-y-180' : ''}`}
      >
        
        {/* Front of the card */}
        <div className={`absolute inset-0 bg-white p-6   dark:bg-gray-900 rounded-lg shadow-lg ${flipped ? 'opacity-0' : 'opacity-100'}`}>
          <img 
            src={certificate.imgSrc}
            alt={certificate.title}
            className="w-full h-60 object-cover mb-4 rounded-lg"
          />
          {/* <h3 className="text-2xl font-semibold font-serif mb-2 text-blue-500">{certificate.title}</h3> */}
        </div>

        {/* Back of the card */}
        <div className={`absolute inset-0 bg-white p-6    dark:bg-gray-900 rounded-lg shadow-lg rotate-y-180 ${flipped ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-2xl font-semibold font-serif mb-2 text-[#282099] mt-5" >{certificate.title}</h3>
          <p className="text-[#298a97] font-serif mt-6">{certificate.description}</p>
        </div>
      </div>
    </div>
  );
}
