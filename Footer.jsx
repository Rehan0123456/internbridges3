import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const PULSE_POINTS = [
  { x: 25, y: 35, label: "US" },
  { x: 48, y: 30, label: "EU" },
  { x: 55, y: 42, label: "ME" },
  { x: 65, y: 38, label: "IN" },
  { x: 78, y: 52, label: "AU" },
  { x: 30, y: 60, label: "BR" },
  { x: 52, y: 55, label: "AF" },
  { x: 72, y: 35, label: "CN" },
  { x: 82, y: 30, label: "JP" },
  { x: 20, y: 45, label: "MX" },
  { x: 42, y: 25, label: "UK" },
  { x: 60, y: 28, label: "RU" },
];

export default function Footer() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const w = canvasRef.width;
    const h = canvasRef.height;

    let frame = 0;
    const animate = () => {
      frame++;
      ctx.clearRect(0, 0, w, h);

      ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
      for (let x = 0; x < w; x += 12) {
        for (let y = 0; y < h; y += 12) {
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      PULSE_POINTS.forEach((p, i) => {
        const px = (p.x / 100) * w;
        const py = (p.y / 100) * h;
        const pulse = Math.sin((frame + i * 20) * 0.03) * 0.5 + 0.5;

        ctx.beginPath();
        ctx.arc(px, py, 4 + pulse * 8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 123, 255, ${0.1 + pulse * 0.15})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#007BFF";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <footer className="bg-slate-900 text-white">
      {/* Global Pulse Map */}
      <div className="relative w-full h-48 md:h-64 overflow-hidden">
        <canvas
          ref={canvasRef}
          width={1200}
          height={300}
          className="w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-white/25">
            Global Internship Pulse
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <svg width="30" height="30" viewBox="0 0 32 32">
                  <rect x="6" y="4" width="3" height="20" fill="white" />
                  <rect x="23" y="4" width="3" height="20" fill="white" />
                  <path d="M7.5 6 Q16 -1 24.5 6" stroke="#007BFF" strokeWidth="1.8" fill="none" />
                  <rect x="4" y="20" width="24" height="2" fill="white" />
                  <line x1="9" y1="8" x2="8.5" y2="20" stroke="#007BFF" strokeWidth="1" />
                  <line x1="13" y1="4.5" x2="13" y2="20" stroke="#007BFF" strokeWidth="1" />
                  <line x1="19" y1="4.5" x2="19" y2="20" stroke="#007BFF" strokeWidth="1" />
                  <line x1="23" y1="8" x2="23.5" y2="20" stroke="#007BFF" strokeWidth="1" />
                </svg>
                <span className="font-display font-bold text-lg">
                  INTERN<span className="text-[#007BFF]">BRIDGE</span>
                </span>
              </div>
              <p className="font-body text-sm text-white/50 max-w-sm leading-relaxed">
                Bridging the gap between academic potential and professional opportunity.
                Built for high school students ready to make an impact.
              </p>
            </div>

            <div>
              <h4 className="font-mono text-xs tracking-[0.2em] uppercase mb-4 text-white/35">Navigate</h4>
              <div className="space-y-2">
                <Link to="/" className="block font-body text-sm text-white/60 hover:text-[#007BFF] transition-colors">Home</Link>
                <Link to="/internships" className="block font-body text-sm text-white/60 hover:text-[#007BFF] transition-colors">Explore</Link>
                <Link to="/partnerships" className="block font-body text-sm text-white/60 hover:text-[#007BFF] transition-colors">Partners</Link>
                <Link to="/about" className="block font-body text-sm text-white/60 hover:text-[#007BFF] transition-colors">About</Link>
              </div>
            </div>

            <div>
              <h4 className="font-mono text-xs tracking-[0.2em] uppercase mb-4 text-white/35">Top Fields</h4>
              <div className="space-y-2 font-body text-sm text-white/50">
                <p>STEM</p>
                <p>Business</p>
                <p>Medicine</p>
                <p>Engineering</p>
                <p>Design</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-mono text-xs text-white/30">
              © {new Date().getFullYear()} InternBridge. All rights reserved.
            </p>
            <p className="font-mono text-xs text-white/30">
              {new Date().getFullYear() === 2026 ? "229+ Opportunities Live" : "250+ Opportunities Live"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
