import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="font-bold text-xl cursor-default select-none">Hanuman Nama</div>
      <nav>
        <ul className="flex space-x-8 text-sm font-semibold">
          <li>
            <a href="#home" className="hover:text-indigo-400 transition">Home</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-indigo-400 transition">Skills</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
          </li>
          <li>
            <a href="#experience" className="hover:text-indigo-400 transition">Experience</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
