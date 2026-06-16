import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left */}
        <div>
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-gray-400 mb-4 block">
            Your Future Starts Now
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tighter leading-[0.95]">
            READY TO<br />
            <span className="text-[#007BFF]">LAUNCH?</span>
          </h2>
        </div>

        {/* Right */}
        <div>
          <p className="font-body text-gray-500 leading-relaxed mb-8">
            We're on a mission to democratize access to career-building experiences.
            No matter your background, zip code, or connections — the right internship is out there for you.
          </p>
          <Link
            to="/internships"
            className="inline-flex items-center gap-2 bg-[#002855] text-white px-6 py-3.5 rounded-lg font-mono text-sm tracking-wider uppercase hover:bg-[#007BFF] transition-all duration-200 group shadow-sm"
          >
            Start Exploring
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
