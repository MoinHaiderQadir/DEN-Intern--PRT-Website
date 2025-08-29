import React, { useState } from "react";

const ProjectCard = ({ title, role, shortDesc, fullDesc }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{role}</p>
        <p className="text-gray-700 leading-relaxed">
          {expanded ? fullDesc : shortDesc}
        </p>
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 self-start px-4 py-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-sm font-semibold rounded-full shadow-md hover:from-pink-600 hover:to-orange-600 transition-all duration-300"
      >
        {expanded ? "Read Less ▲" : "Read More ▼"}
      </button>
    </div>
  );
};

export default ProjectCard;
