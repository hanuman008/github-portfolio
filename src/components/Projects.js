import React from "react";
import Tilt from "react-parallax-tilt";

const projects = [
  {
    name: "Sass Portal",
    team: 5,
    skills: ["ReactJs", "NodeJs", "Postgresql", "git"],
    summary:
      "A portal used by internal users and clients to process claims, check claim details, and add rules while processing claims.",
    achievements: [
      "Completed successfully to process provider using importer called direct contract.",
      "Displayed claim details and policy data using API of another project.",
    ],
  },
  {
    name: "Med_sense",
    team: 5,
    skills: ["Elixir", "Phoenix frameworks", "Postgresql"],
    summary:
      "Used by clients and internal users to price claims and automate claim qualification without manual correction.",
    achievements: [
      "Worked on network roster and claim qualification for automatic claim processing based on network type.",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 bg-gray-100 max-w-6xl mx-auto px-6 rounded-lg"
    >
      <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map(({ name, team, skills, summary, achievements }, idx) => (
          <Tilt
            key={idx}
            glareEnable={true}
            glareMaxOpacity={0.25}
            scale={1.05}
            transitionSpeed={300}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="mb-1 font-semibold text-indigo-700">Team size: {team}</p>
            <p className="mb-2">
              Skills:{" "}
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="inline-block bg-indigo-200 text-indigo-800 px-2 py-1 rounded-full mr-2 text-sm"
                >
                  {skill}
                </span>
              ))}
            </p>
            <p className="mb-3 text-gray-700">{summary}</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              {achievements.map((ach, i) => (
                <li key={i}>{ach}</li>
              ))}
            </ul>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
