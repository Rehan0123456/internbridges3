import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Explore", path: "/internships" },
  { label: "Partners", path: "/partnerships" },
  { label: "About", path: "/about" },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"
      } border-b border-gray-100`}
    >
      <div className="flex items-center justify-between h-16 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <svg width="34" height="34" viewBox="0 0 32 32" className="flex-shrink-0">
            {/* Towers */}
            <rect x="6" y="4" width="3" height="20" fill="#002855" />
            <rect x="23" y="4" width="3" height="20" fill="#002855" />
            {/* Main cables */}
            <path d="M7.5 6 Q16 -1 24.5 6" stroke="#007BFF" strokeWidth="1.8" fill="none" />
            {/* Deck */}
            <rect x="4" y="20" width="24" height="2" fill="#002855" />
            {/* Vertical suspenders */}
            <line x1="9" y1="8" x2="8.5" y2="20" stroke="#007BFF" strokeWidth="1" />
            <line x1="13" y1="4.5" x2="13" y2="20" stroke="#007BFF" strokeWidth="1" />
            <line x1="19" y1="4.5" x2="19" y2="20" stroke="#007BFF" strokeWidth="1" />
            <line x1="23" y1="8" x2="23.5" y2="20" stroke="#007BFF" strokeWidth="1" />
          </svg>
          <span className="font-display font-bold text-lg tracking-tight hidden sm:block">
            INTERN<span className="text-[#007BFF]">BRIDGE</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-md font-mono text-xs tracking-wider uppercase transition-all duration-200 ${
                  isActive
                    ? "bg-[#007BFF] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden w-10 h-10 rounded-md flex items-center justify-center hover:bg-gray-100 transition-all"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-6 py-3.5 font-mono text-xs tracking-wider uppercase transition-all ${
                  isActive ? "bg-[#007BFF] text-white" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
