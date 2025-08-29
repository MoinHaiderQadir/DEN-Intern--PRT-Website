import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "AI Digital Marketer",
    role: "Full Stack Developer",
    shortDesc:
      "An AI-powered marketing agent that helps businesses optimize their social media presence.",
    fullDesc:
      "I developed an AI agent that assists users in marketing their posts across social media platforms. The agent analyzes the content and suggests the best platforms, timing, and posting strategies for maximum reach and profit. If the user approves, the system automatically schedules and posts it, making marketing seamless and intelligent.",
  },
  {
    title: "EcoTracker",
    role: "Full Stack Developer",
    shortDesc:
      "A community-driven environmental reporting and monitoring platform.",
    fullDesc:
      "EcoTracker allows users to report environmental issues with real-time map-based tracking, staff assignment, and analytics. I built a robust MERN stack system integrating Leaflet.js for maps, role-based access for administrators, and live updates for efficient resource allocation and better environmental management.",
  },
  {
    title: "Rent-a-Car Platform",
    role: "Full Stack Developer",
    shortDesc:
      "A full-featured car rental application built with modern web technologies.",
    fullDesc:
      "This platform allows users to search, book, and manage car rentals in real time. I developed secure user authentication, real-time rental availability updates, and admin dashboards for pending/approved status management. It delivers a smooth rental process for both customers and admins.",
  },
  {
    title: "HRM - Employee Management System",
    role: "Full Stack Developer",
    shortDesc:
      "A complete HR management system streamlining employee data and operations.",
    fullDesc:
      "I created a system to handle employee data management, attendance tracking, and performance monitoring. With role-based access and secure authentication, the HRM system enables efficient operations and real-time updates for HR teams.",
  },
  {
    title: "MrDoc",
    role: "Full Stack Developer",
    shortDesc:
      "A document management and collaboration system for professionals.",
    fullDesc:
      "MrDoc is a platform designed for secure document storage, sharing, and real-time collaboration. I built authentication features, access-level permissions, and an intuitive UI for seamless navigation. It helps teams work efficiently while maintaining security and accessibility.",
  },
];

const Projects = () => {
  return (
    <section className="py-12 px-4 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Projects
        </h2>
        <p className="text-gray-600 mt-3">
          Full-stack solutions I’ve built to solve real-world challenges.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
