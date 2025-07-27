import React from "react";

export default function Experience() {
  const experiences = [
    {
      company: "AMPS Healthcare Pvt Ltd",
      period: "2022 - Present",
      role: "Full-Stack Developer",
      projects: [
        {
          name: "Portal",
          description:
            "Led the development of a comprehensive healthcare management system using Node.js and React.js, improving operational efficiency by 40%.",
        },
        {
          name: "ClaimInsight",
          description:
            "Architected and implemented an advanced analytics platform using Elixir and Phoenix framework, processing millions of records in real-time.",
        },
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="max-w-4xl mx-auto px-6 py-12"
    >
      <h2 className="text-3xl font-bold mb-8 border-b-4 border-indigo-600 inline-block pb-1">
        Experience
      </h2>

      {experiences.map((exp, idx) => (
        <div key={idx} className="mb-10">
          <div className="flex justify-between items-center mb-1">
            <h3 className="text-xl font-semibold">{exp.company}</h3>
            <span className="text-gray-500">{exp.period}</span>
          </div>
          <p className="italic mb-4">{exp.role}</p>

          {exp.projects.map((project, i) => (
            <div key={i} className="mb-3 pl-4 border-l-4 border-indigo-400">
              <h4 className="font-semibold text-indigo-700">{project.name}</h4>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
