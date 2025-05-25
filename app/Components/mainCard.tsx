"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Download,} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DeveloperHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center  py-8 sm:px-6 md:px-12 relative overflow-hidden">
  
      {/* Floating code snippets */}
      {/* <div className="hidden md:block absolute top-10 right-10 opacity-20  font-mono text-xs text-cyan-400 transform rotate-12 animate-float">
        <Code className="inline-block mr-1" size={12} />
        const skills = ["React", "Next.js"];
      </div>
      <div className="hidden md:block absolute bottom-10 left-10 opacity-20 font-mono text-xs text-purple-400 transform -rotate-12 animate-float delay-1000">
        <Sparkles className="inline-block mr-1" size={12} />
        building(); // awesome stuff
      </div> */}

      {/* Main card */}
      <div
        className={`relative md:max-w-2xl w-full transition-all duration-1000 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
        onMouseMove={handleMouseMove}
      >
        <div
          className="relative bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-slate-700/50 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 group"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(14, 165, 233, 0.15), transparent 40%)`,
          }}>

          {/* Glow border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-pink-500/50 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>

          {/* Profile Section */}
          <div className="flex flex-col sm:flex-row items-center md:pr-24  justify-center gap-6 mb-8 text-center sm:text-left">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1 shadow-lg shadow-cyan-500/25">
                <div className="w-full h-full rounded-full bg-slate-700 overflow-hidden relative">
                  <Image
                    src="/logo1.jpg"
                    alt="Profile Picture"
                    width={80}
                    height={80}
                    className="object-cover w-full h-full rounded-full"
                    priority
                    sizes="(max-width: 768px) 64px, 80px"
                  />
                  <div className="absolute w-6 h-6 bg-slate-600 rounded-full bottom-3 right-3 shadow-md"></div>
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-slate-800 animate-pulse"></div>
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                  Nishul
                </span>
              </h1>
            </div>
          </div>

          {/* Tagline */}
          <h2 className="text-xl sm:text-2xl font-bold text-slate-200 mb-6 leading-relaxed text-center sm:text-left">
            Full-Stack Developer
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-300 mb-12 leading-relaxed max-w-md mx-auto sm:mx-0">
            I'm a Computer Science student and full-stack developer.
            <br />
             work with technologies like React, Next.js, Tailwind CSS, Node.js,
            TypeScript, and MongoDB.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center gap-3">
                <Link href="https://github.com/nishuldhakar" target="_blank" className="flex items-center gap-2">
                  <span>See My Work</span>
                </Link>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>

            <button className="group px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25">
              <div className="flex items-center justify-center gap-3">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <Link href="https://drive.google.com/file/d/1R0qPNijh5FBUTJv20U9P6kr7irMuD3X2/view?usp=drive_link" target="_blank" className="flex items-center gap-2">
                <span>Download Resume</span>
                </Link>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(12deg);
          }
          50% {
            transform: translateY(-10px) rotate(12deg);
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
