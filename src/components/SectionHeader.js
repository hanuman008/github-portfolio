import React from "react";

export default function SectionHeader({ title }) {
  return (
    <div className="text-center mb-6">
      <h2 className="text-3xl font-bold text-indigo-800 border-b-4 border-indigo-300 inline-block pb-1">
        {title}
      </h2>
    </div>
  );
}
