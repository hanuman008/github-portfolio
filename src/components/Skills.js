import React from "react";
import { FaNodeJs, FaReact, FaJs } from "react-icons/fa";
import { SiElixir, SiPhoenixframework, SiPostgresql } from "react-icons/si";

const skills = [
  { name: "Node.js", icon: <FaNodeJs className="text-blue-600 w-8 h-8" /> },
  { name: "React.js", icon: <FaReact className="text-blue-500 w-8 h-8" /> },
  { name: "Elixir", icon: <SiElixir className="text-blue-700 w-8 h-8" /> },
  { name: "Phoenix", icon: <SiPhoenixframework className="text-blue-700 w-8 h-8" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600 w-8 h-8" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 w-8 h-8" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-50 py-12 px-6">
      <h2 className="text-2xl font-bold text-center mb-8">Technical Skills</h2>
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6">
        {skills.map(({ name, icon }) => (
          <div
            key={name}
            className="bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-6 w-32 hover:shadow-xl transition-shadow cursor-default"
          >
            {icon}
            <p className="mt-3 text-sm font-semibold text-gray-900">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
