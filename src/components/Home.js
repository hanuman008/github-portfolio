import React from "react";

export default function Home() {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-indigo-900 to-purple-900 text-white flex flex-col items-center justify-start px-6 pt-20 pb-10 text-center"
      style={{ minHeight: "180px" }}
    >
      <h1 className="text-4xl font-extrabold mb-2">Full-Stack Developer</h1>
      <p className="text-xl max-w-xl mb-6">
        Crafting robust web applications with modern technologies
      </p>

      <div className="flex space-x-6">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-300 transition-colors"
        >
          <svg
            fill="currentColor"
            className="w-8 h-8"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 0C5.373 0 0 5.372 0 12a12 12 0 008.208 11.385c.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.204.085 1.838 1.236 1.838 1.236 1.07 1.832 2.807 1.302 3.492.995.108-.774.42-1.302.763-1.602-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.52.118-3.176 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 016 0c2.29-1.552 3.296-1.23 3.296-1.23.655 1.657.243 2.874.12 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.82 1.1.82 2.22 0 1.6-.015 2.89-.015 3.28 0 .322.216.697.825.578A12 12 0 0024 12c0-6.628-5.373-12-12-12z" />
          </svg>
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-gray-300 transition-colors"
        >
          <svg
            fill="currentColor"
            className="w-8 h-8"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037-1.85 0-2.134 1.444-2.134 2.939v5.667h-3.555V9h3.414v1.561h.05c.476-.9 1.637-1.849 3.37-1.849 3.602 0 4.27 2.37 4.27 5.452v6.288zM5.337 7.433a2.062 2.062 0 11-.001-4.125 2.062 2.062 0 01.001 4.125zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.22.792 24 1.771 24h20.451C23.2 24 24 23.22 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
          </svg>
        </a>
      </div>
    </section>
  );
}
