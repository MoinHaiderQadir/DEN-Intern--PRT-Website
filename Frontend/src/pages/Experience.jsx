import React from "react";
import ExperienceCard from "../components/ExperienceCard";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Nettax",
    period: "Sep 2024 – Nov 2024",
    shortDesc:
      "Worked as a Frontend Developer, building sleek, responsive user interfaces with React.js and Tailwind CSS.",
    fullDesc:
      "At Nettax, I developed a fully responsive tax calculator platform that allowed users to calculate taxes, view breakdowns, and understand tax rules. My role focused on crafting intuitive UI components, ensuring seamless user experience, and integrating APIs with the backend team.",
  },
  {
    role: "Full Stack Developer",
    company: "M/S Jatoi & Co",
    period: "Dec 2024 – Jan 2025",
    shortDesc:
      "Led full-stack development for a construction management solution.",
    fullDesc:
      "I built a comprehensive software solution covering data gathering, deployment, and ongoing maintenance tailored to client needs. This sharpened my backend API development with Node.js, strengthened my React.js frontend work, and gave me leadership exposure in project coordination and client management.",
  },
  {
    role: "Full Stack Developer (Team Collaboration)",
    company: "BlessPK.com",
    period: "2025",
    shortDesc:
      "Collaborated with a team to develop an e-commerce platform with modern shopping features.",
    fullDesc:
      "At BlessPK.com, I worked within a collaborative team on a full-featured e-commerce website. The platform included product listings, shopping cart functionality, secure payment methods, and smooth navigation. My role emphasized both frontend development with React.js + Tailwind CSS and backend integration for scalable performance.",
  },
];

const Experience = () => {
  return (
    <section className="py-12 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Experience
        </h2>
        <p className="text-gray-600 mt-3">
          My journey as a frontend and full-stack developer.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
