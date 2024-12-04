import React from "react";

// Qualification Section
const Qualification = () => {
  const qualifications = [
    {
      degree: "Master of Computer Applications",
      field: "Computer Science",
      institution: "Chandigarh University Punjab",
      year: "2023-2025",
    },
    {
      degree: "Bachelor of Computer Applications",
      field: "Computer Science",
      institution: "Institute of Basic Science, Khandari Campus, Agra",
      year: "2020-2023",
    },
    {
      degree: "Intermediate",
      field: "Mathematics",
      institution: "Swami Dayal Inter College, Uttar Pradesh",
      year: "2020",
    },
    {
      degree: "High School",
      field: "Science and Mathematics",
      institution: "Swami Dayal Inter College, Uttar Pradesh",
      year: "2018",
    },
  ];

  return (
    <section className="bg-gray-100 py-10 rounded-lg dark:bg-gray-900 ">
      <div className="max-w-5xl mx-auto px-6 ">
        <h2 className="text-3xl font-bold text-center mb-5 mt-7">Qualifications</h2>
        
        <ul className="space-y-6 font-serif bg-white rounded-lg dark:bg-gray-900">
          {qualifications.map((qual, index) => (
            <li
              key={index}
              className="shadow-lg  p-6 hover:shadow-2xl transition-shadow bg-white rounded-lg dark:bg-gray-900"
            >
              <h3 className="text-xl font-semibold ">
                {qual.degree} in {qual.field}
              </h3>
              <p className="font-serif">{qual.institution}</p>
              <p className="font-serif font-bold">Year: {qual.year}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

// Achievement Section
const Achievement = () => {
  const achievements = [
    {
      title: "First Place - HighSchool",
      description:
        "Secured first place for academic and leadership excellence at Swami Dayal Inter College, Uttar Pradesh.",
    },
    {
      title: "Data Science Internship",
      description:
        "Completed an internship at YBI Foundation, specializing in AI/ML algorithms and data analysis.",
    },
    {
      title: "We Got the Bronze Medal in 100m Race",
      description:
        "Achieved the bronze medal in the 100m race in DR.Bhimrao Ambedkar University Agra , showcasing determination and athletic skills.",
    },
    {
      title: "Flutter Learning App",
      description:
        "Designed and developed a student learning app featuring animations and Firebase integration.",
    },
    {
      title: "Top College Performer",
      description:
        "Recognized as a top performer in college events, including technical workshops and projects.",
    },
    {
      title: "Employee Leave System",
      description:
        "Developed a complete leave management system with admin and employee panel functionalities.",
    },
  ];

  return (
    <section
      id="achievements"
      className="bg-gradient-to-b bg-white rounded-lg dark:bg-gray-900 py-16"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-6">Achievements</h2>
        <p className="text-lg text-gray-600 mb-12">
          Milestones that reflect my hard work and dedication.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((ach, index) => (
            <div
              key={index}
              className="group relative bg-white  dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="absolute inset-0 bg-[#0f1924] opacity-0 group-hover:opacity-90 rounded-lg transition duration-300"></div>
              <h3 className="text-2xl font-bold font-serif text-[#1a4380] group-hover:text-white relative z-10">
                {ach.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white mt-4 relative z-10">
                {ach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

//internship 
const Internship = () => {
  const internships = [
    {
      role: "Data Science Intern",
      company: "YBI Foundation",
      duration: "1 Month",
      details: [
        "Gained hands-on experience in AI and ML algorithms.",
        "Improved Python programming and model training skills.",
        "Analyzed datasets and visualized trends effectively.",
        "Built confidence in solving real-world data challenges.",
      ],
    },
    // Add more internship objects here if needed
  ];

  return (
    <section className="bg-gray-100 py-10 rounded-lg dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-5">Internship</h2>
        
        <ul className="space-y-6 font-serif bg-white rounded-lg dark:bg-gray-900">
          {internships.map((qual, index) => (
            <li
              key={index}
              className="shadow-lg  p-6  transition-shadowshadow-lg hover:shadow-xl transition duration-300 bg-white rounded-lg dark:bg-gray-900"
            >
              <h3 className="text-xl font-semibold ">
                {qual.role} in {qual.company}
              </h3>
              <p className="font-serif ">{qual.duration}</p>
              <p className="font-serif  ">Year: {qual.details}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};




// Skills Section
const SkillsSection = () => {
  const skills = [
    { name: "React", level: 86 },
    { name: "JavaScript", level: 80 },
    { name: "CSS", level: 87 },
    { name: "Node.js", level: 85 },
    { name: "Java", level: 80 },
    { name: "HTML", level: 90 },
    { name: "SQL", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "Python", level: 80 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Computer Knowledge", level: 85 },
    { name: "DBMS", level: 85 },
  ];

  return (
    <section className="max-w-[1000px] mx-auto p-6 bg-white rounded-lg dark:bg-gray-900">
      <h2 className="text-2xl font-bold text-center mb-3 mt-0">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-sm text-gray-500">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-blue-500 h-4 rounded-full transition-all duration-700 ease-in-out"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Main Component
const PortfolioSection = () => {
  return (
    <div>
      <Qualification />
      <SkillsSection />
      <Achievement />
      <Internship/>
    </div>
  );
};

export default PortfolioSection;
