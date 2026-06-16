import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function FeaturedBanner() {
  return (
    <section className="bg-gradient-to-r from-[#002855] to-[#007BFF] text-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-white/50 mb-3 block">
          Featured Opportunity
        </span>
        <h2 className="font-display font-bold text-2xl md:text-4xl tracking-tight mb-4">
          Featured Internship Opportunity with Cyma
        </h2>
        <p className="font-body text-base md:text-lg text-white/70 mb-8 max-w-2xl leading-relaxed">
          Gain hands-on experience working with an innovative team while building
          valuable professional skills. Apply today to take the next step in your career journey.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeEYfjnnL2RJmKLIMbYwoUmaKWqo3lrwoApOearUmiVx9JVMA/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-[#002855] px-6 py-3.5 rounded-lg font-mono text-sm tracking-wider uppercase hover:bg-gray-100 transition-all duration-200 group shadow-md"
        >
          Apply Now
          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
        <p className="font-mono text-xs text-white/35 mt-4">
          Powered by Cyma × InternBridge
        </p>
      </div>
    </section>
  );
}
