import React from "react";
 // Replace with your image path

const About = () => {
  return (
    <div
      id="/about"
      className="w-full bg-[#0d1117] text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10"
    >
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 max-w-sm">
        <img
          src=""
          alt="About Moin"
          className="w-full rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-1/2 max-w-2xl text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-300 mb-4">
          About Me
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          I'm <span className="text-yellow-300 font-semibold">Moin Qadir</span>, a full stack developer who’s passionate about building modern, scalable web applications and pushing the boundaries of technology through AR and data science.
        </p>

        <p className="text-gray-400 text-md mb-4">
          From frontend design to backend architecture, I enjoy crafting complete solutions that solve real-world problems. My curiosity drives me to explore new areas like augmented reality and AI-driven insights — blending creativity with logic in every project I work on.
        </p>

        {/* Highlights List */}
        <ul className="text-left mt-4 space-y-2 text-gray-300">
          <li>✅ Full Stack Developer (React, Node.js, MongoDB)</li>
          <li>✅ AR Development Enthusiast (Three.js, WebXR)</li>
          <li>✅ Data Science Explorer (Python, Pandas, ML Basics)</li>
          <li>✅ Strong UI/UX focus with Tailwind CSS & Vite</li>
          <li>✅ Passionate about clean code & creative innovation</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
