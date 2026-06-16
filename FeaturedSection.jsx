import React from "react";
import { ArrowUpRight } from "lucide-react";

const FEATURED = [
  { title: "Google CSSI", field: "CS", location: "U.S./Virtual", deadline: "Mar", url: "https://buildyourfuture.withgoogle.com/programs/computer-science-summer-institute" },
  { title: "NASA High School Internship", field: "STEM", location: "U.S.", deadline: "Mar", url: "https://intern.nasa.gov/" },
  { title: "Harvard SRMP", field: "Medicine", location: "MA", deadline: "Jan", url: "https://srmp.med.harvard.edu/" },
  { title: "Adobe Creative Challenges", field: "Design", location: "Virtual", deadline: "Rolling", url: "https://adobe.com/" },
  { title: "Bank of America Student Leaders", field: "Leadership/Business", location: "U.S. cities", deadline: "Mar", url: "https://about.bankofamerica.com/en/making-an-impact/student-leaders" },
  { title: "AI Scholars Live Online", field: "AI", location: "Virtual", deadline: "Rolling", url: "https://aischolars.org/" },
];

export default function FeaturedSection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-8">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-gray-400">
            Trending Now
          </span>
          <h2 className="font-display font-bold text-2xl md:text-3xl mt-1 tracking-tight">
            Featured Opportunities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURED.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl border border-gray-100 p-6 hover:border-[#007BFF] hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="font-mono text-[10px] tracking-wider uppercase bg-blue-50 text-[#007BFF] px-2.5 py-1 rounded-md">
                  {item.field}
                </span>
                <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 text-[#007BFF] transition-opacity" />
              </div>
              <h3 className="font-display font-bold text-lg mb-3 tracking-tight">
                {item.title}
              </h3>
              <div className="flex items-center gap-3 font-mono text-xs text-gray-400">
                <span>{item.location}</span>
                <span>·</span>
                <span>{item.deadline}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
