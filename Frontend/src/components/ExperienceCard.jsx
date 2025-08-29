import React, { useState } from "react";

const ExperienceCard = ({ role, company, period, shortDesc, fullDesc }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-gray-900">{role}</h3>
        <p className="text-gray-600 text-sm mb-3">
          {company} | <span className="italic">{period}</span>
        </p>
        <p className="text-gray-700 leading-relaxed">
          {expanded ? fullDesc : shortDesc}
        </p>
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 self-start px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold rounded-full shadow-md hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
      >
        {expanded ? "Read Less ▲" : "Read More ▼"}
      </button>
    </div>
  );
};

export default ExperienceCard;
