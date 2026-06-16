import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const FIELD_TAGS = [
  "STEM", "Law", "Design", "Business", "AI", "Medicine", "Arts",
  "Engineering", "CS", "Science", "Research", "Tech", "Finance",
  "Healthcare", "Policy", "Journalism"
];

const TICKER_ITEMS = [
  "Google CSSI — CS — U.S./Virtual",
  "NASA Internship — STEM — U.S.",
  "Harvard SRMP — Medicine — MA",
  "Adobe Challenges — Design — Virtual",
  "Bank of America Leaders — Business — U.S.",
  "AI Scholars — AI — Virtual",
  "MIT Beaver Works — Engineering — MA",
  "Goldman Sachs Insight — Finance — U.S.",
  "Yale Young Global Scholars — Multiple — CT",
  "Wharton Global Youth — Business — PA",
];

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[82vh]">
        {/* Left: Main heading */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-16 lg:py-0">
          <div className="mb-6">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-gray-400 bg-blue-50/50 px-3 py-1.5 rounded-md inline-block">
              229+ Opportunities Live
            </span>
          </div>
          
          <h1 className="font-display font-bold text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-tighter mb-6">
            BRIDGE<br />
            THE<br />
            <span className="text-[#007BFF]">GAP.</span>
          </h1>

          <p className="font-body text-base md:text-lg text-gray-500 max-w-md leading-relaxed mb-10">
            Discover amazing internship opportunities across STEM, law, arts, business, and more. Built for high school students ready to make an impact.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/internships"
              className="inline-flex items-center gap-2 bg-[#002855] text-white px-6 py-3.5 rounded-lg font-mono text-sm tracking-wider uppercase hover:bg-[#007BFF] transition-all duration-200 group shadow-sm"
            >
              Explore Internships
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 px-6 py-3.5 rounded-lg font-mono text-sm tracking-wider uppercase hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
            >
              Learn More
            </Link>
          </div>

          {/* Field Tags */}
          <div className="flex flex-wrap gap-2 mt-10">
            {FIELD_TAGS.map((tag) => (
              <Link
                key={tag}
                to={`/internships?field=${tag}`}
                className="font-mono text-xs text-gray-500 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-md hover:bg-[#007BFF] hover:text-white hover:border-[#007BFF] transition-all duration-150"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Ticker */}
        <div className="flex flex-col justify-center px-6 md:px-12 py-16 lg:py-0 bg-gray-50/50">
          <h3 className="font-mono text-xs tracking-[0.3em] uppercase text-gray-400 mb-6">
            Latest Placements
          </h3>
          <div className="space-y-px">
            {TICKER_ITEMS.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-3 px-3 rounded-md group hover:bg-white hover:shadow-sm transition-all duration-200 cursor-pointer"
              >
                <span className="font-mono text-sm text-gray-700">{item}</span>
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 text-[#007BFF] transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
