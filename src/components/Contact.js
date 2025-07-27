import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold mb-10 text-center">Let's Connect</h2>
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Panel */}
        <div className="bg-white rounded-lg shadow-md p-8 flex-1 space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div className="flex items-center gap-3 mb-2">
              <FaEnvelope className="text-blue-600" />
              <span>hanumannamas8@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <FaPhone className="text-blue-600" />
              <span>+91 7799644699</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-600" />
              <span>Hyderabad, India</span>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Connect on Social Media</h3>
            <div className="flex gap-6 text-3xl">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-700 hover:text-gray-900"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-700 hover:text-gray-900"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="bg-white rounded-lg shadow-md p-8 flex-1">
          <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="name" className="font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />

            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />

            <label htmlFor="message" className="font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Your message..."
              className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />

            <button
              type="submit"
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
