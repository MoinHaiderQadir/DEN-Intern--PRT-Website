import React, { useState } from "react";

const OtherCard = ({ title, category, shortDesc, fullDesc }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{category}</p>
        <p className="text-gray-700 leading-relaxed">
          {expanded ? fullDesc : shortDesc}
        </p>
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 self-start px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white text-sm font-semibold rounded-full shadow-md hover:from-green-600 hover:to-teal-600 transition-all duration-300"
      >
        {expanded ? "Read Less ▲" : "Read More ▼"}
      </button>
    </div>
  );
};

export default OtherCard;
