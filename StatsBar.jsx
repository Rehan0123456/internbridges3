import React from "react";

const STATS = [
  { value: "229+", label: "Opportunities" },
  { value: "83+", label: "Fields" },
  { value: "42+", label: "Locations" },
  { value: "HS", label: "Grade Level" },
];

export default function StatsBar() {
  return (
    <section className="bg-white py-10 md:py-14 border-y border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 px-4 md:px-8">
        {STATS.map((stat, i) => (
          <div
            key={i}
            className={`px-4 py-3 rounded-lg group hover:bg-blue-50 transition-all duration-200 ${
              i < STATS.length - 1 ? "md:border-r border-gray-200" : ""
            }`}
          >
            <p className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight group-hover:text-[#007BFF] transition-colors">
              {stat.value}
            </p>
            <p className="font-mono text-xs tracking-[0.15em] uppercase mt-2 text-gray-400 group-hover:text-[#007BFF]/60 transition-colors">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
