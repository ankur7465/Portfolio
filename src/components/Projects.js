import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: " Amazon sales Dashboard   .",
      link: "https://github.com/ankur7465/Amazon-Sales-Dashboard",
      image: "s.png", // Replace with your project image URL
    },
    {
      title: "Project Two",
      description: "A brief description of project two.",
      link: "https://project-two.com",
      image: "https://via.placeholder.com/300", // Replace with your project image URL
    },
    {
      title: "Project Three",
      description: "A brief description of project three.",
      link: "https://project-three.com",
      image: "https://via.placeholder.com/300", // Replace with your project image URL
    },
  ];

  return (
    <div className="bg-gray-50 py-12   dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl text-center font-bold  mb-8 mt-7">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-all hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 "
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
