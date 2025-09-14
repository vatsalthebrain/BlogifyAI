import React from 'react';
import { assets } from '../assets/assets'

const Footer = ({ footer_data = [] }) => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 520 140"
            role="img"
            aria-label="Blogify logo"
            className="w-32 sm:w-44"
          >
            <defs>
              <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="50%" stopColor="#22C55E" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="none" />
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontFamily="-apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif"
              fontSize="64"
              fontWeight="800"
              fill="url(#g)"
              letterSpacing="1"
            >
              BlogifyAi
            </text>
          </svg>

          <p className="max-w-[410px] mt-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit corrupti, eaque
            libero voluptatibus dolore ratione itaque, facilis saepe dignissimos autem soluta vitae asperio
          </p>
        </div>

        <div className="flex flex-wrap justify-center w-full md:w-[45%] gap-5">
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3 className="mb-2 font-semibold text-gray-900 md:mb-5 ">{section.title}</h3>
              <ul className="text-sm space-y-1">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="hover:underline transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
        Copyright 2025 © BlogifyAi — Vatsal Arora — All rights reserved
      </p>
    </div>
  );
};

export default Footer;
