import React from "react";

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full bg-[#0d1117] text-white py-16 px-6 md:px-20 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-300 mb-6 text-center">
        My Skill Set
      </h2>

      <p className="text-gray-300 text-lg max-w-3xl text-center leading-relaxed mb-10">
        I’m a passionate <span className="text-yellow-300 font-semibold">Software Developer</span> with deep technical knowledge and a strong foundation in both development and design. From writing efficient algorithms to crafting beautiful, responsive web interfaces — I thrive on building meaningful, modern digital experiences.
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-4xl w-full">
        <div className="bg-[#161b22] p-5 rounded-lg shadow hover:shadow-yellow-600 transition">
          <h3 className="text-xl font-semibold text-yellow-300 mb-2">Programming Languages</h3>
          <ul className="text-gray-300 space-y-1">
            <li>• C++ (DSA, Competitive Coding)</li>
            <li>• Java (OOP, Projects, DSA)</li>
            <li>• Python (for Data Science, Automation)</li>
          </ul>
        </div>

        <div className="bg-[#161b22] p-5 rounded-lg shadow hover:shadow-yellow-600 transition">
          <h3 className="text-xl font-semibold text-yellow-300 mb-2">Web Development</h3>
          <ul className="text-gray-300 space-y-1">
            <li>• HTML, CSS, JavaScript</li>
            <li>• React.js (SPA, Hooks, UI Libraries)</li>
            <li>• Node.js, Express.js, MongoDB</li>
            <li>• REST APIs, Full Stack Projects</li>
          </ul>
        </div>

        <div className="bg-[#161b22] p-5 rounded-lg shadow hover:shadow-yellow-600 transition">
          <h3 className="text-xl font-semibold text-yellow-300 mb-2">UI/UX & Frontend Design</h3>
          <ul className="text-gray-300 space-y-1">
            <li>• Responsive Design with Tailwind CSS</li>
            <li>• UI/UX Principles and Figma</li>
            <li>• Modern Animations & Transitions</li>
          </ul>
        </div>

        <div className="bg-[#161b22] p-5 rounded-lg shadow hover:shadow-yellow-600 transition">
          <h3 className="text-xl font-semibold text-yellow-300 mb-2">Software Engineering</h3>
          <ul className="text-gray-300 space-y-1">
            <li>• Software Architecture</li>
            <li>• Clean Code & Design Patterns</li>
            <li>• Version Control (Git/GitHub)</li>
          </ul>
        </div>

        <div className="bg-[#161b22] p-5 rounded-lg shadow hover:shadow-yellow-600 transition">
          <h3 className="text-xl font-semibold text-yellow-300 mb-2">Data Science & Analytics</h3>
          <ul className="text-gray-300 space-y-1">
            <li>• Python (NumPy, Pandas, Matplotlib)</li>
            <li>• Data Cleaning & Analysis</li>
            <li>• Basic Machine Learning (scikit-learn)</li>
          </ul>
        </div>

        <div className="bg-[#161b22] p-5 rounded-lg shadow hover:shadow-yellow-600 transition">
          <h3 className="text-xl font-semibold text-yellow-300 mb-2">Exploring Now</h3>
          <ul className="text-gray-300 space-y-1">
            <li>• Blockchain Technology</li>
            <li>• AR Development (Three.js, WebXR)</li>
            <li>• AI & Advanced Data Science</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
