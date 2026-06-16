import React from "react";
import { ArrowUpRight, MapPin, Calendar } from "lucide-react";

export default function InternshipCard({ internship }) {
  return (
    <a
      href={internship.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white rounded-xl border border-gray-100 p-5 hover:border-[#007BFF] hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-3">
        <span className="font-mono text-[10px] tracking-wider uppercase bg-blue-50 text-[#007BFF] px-2.5 py-1 rounded-md">
          {internship.field}
        </span>
        <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 text-[#007BFF] transition-opacity flex-shrink-0" />
      </div>

      <h3 className="font-display font-bold text-base md:text-lg tracking-tight mb-4 leading-tight">
        {internship.title}
      </h3>

      <div className="space-y-1.5">
        <div className="flex items-center gap-1.5 font-mono text-[11px] text-gray-400">
          <MapPin size={11} />
          <span>{internship.location}</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[11px] text-gray-400">
          <Calendar size={11} />
          <span>{internship.deadline}</span>
        </div>
      </div>

      {internship.grade && (
        <div className="mt-4 pt-3 border-t border-gray-50">
          <span className="font-mono text-[10px] text-gray-350">
            Grade: {internship.grade}
          </span>
        </div>
      )}
    </a>
  );
}
