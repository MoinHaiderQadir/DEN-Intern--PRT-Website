import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-[#0d1117] text-white flex flex-col md:flex-row items-center justify-center px-6 py-12 gap-10">
      {/* Left Text Section */}
      <div className="flex-1 max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-100">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
          I’m <strong className="text-yellow-300">Moin Qadir</strong>, a software engineer building immersive, animated, and interactive web experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="px-6 py-2 rounded-md bg-yellow-600 hover:bg-yellow-700 transition text-white font-medium"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-2 rounded-md border border-yellow-600 hover:bg-yellow-600 transition text-yellow-300 font-medium"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="flex-1 max-w-sm w-full">
        <img
          src="../public/moin.png"
          alt="Moin Qadir"
          className="w-full h-auto object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;
