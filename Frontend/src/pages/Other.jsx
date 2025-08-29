import React from "react";
import OtherCard from "../components/OtherCard";

const others = [
  {
    title: "Special Mention – MUET MUN 2025",
    category: "Model United Nations",
    shortDesc:
      "Recognized at MUET MUN 2025 as the South Korea delegate in the UNDP committee.",
    fullDesc:
      "I was awarded Special Mention at MUET MUN 2025 while representing the Republic of Korea in the UNDP Committee. This experience sharpened my diplomacy, critical thinking, and debate skills on global policy discussions.",
  },
  {
    title: "MUDDS – Debate & Drama Society",
    category: "Certificate of Participation (2023)",
    shortDesc:
      "Earned a certificate for active participation in MUET's debate & drama society.",
    fullDesc:
      "In 2023, I was awarded a certificate by the Mehran University Dramatic & Debate Society (MUDDS) for active contributions and performance in university-level debating events.",
  },
  {
    title: "Winner – Debate Competition",
    category: "Oct 10, 2024",
    shortDesc:
      "Secured first place in a university-wide debate competition in 2024.",
    fullDesc:
      "On October 10, 2024, I competed in and won a prestigious debate competition, showcasing strong argumentative, presentation, and public speaking skills against top peers.",
  },
  {
    title: "Employee of the Month",
    category: "Workplace Recognition (M/S Jatoi & Co)",
    shortDesc:
      "Honored twice as Employee of the Month in Dec 2024 and Jan 2025.",
    fullDesc:
      "At M/S Jatoi & Co, I received 'Employee of the Month' recognition for two consecutive months (December 2024 and January 2025). This highlighted my consistency, leadership, and ability to deliver high-quality full-stack solutions under deadlines.",
  },
];

const Other = () => {
  return (
    <section className="py-12 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Certificates & Achievements
        </h2>
        <p className="text-gray-600 mt-3">
          Recognitions, awards, and milestones beyond coding that shaped my journey.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {others.map((item, index) => (
          <OtherCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Other;
