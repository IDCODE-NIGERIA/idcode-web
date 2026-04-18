"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

// Re-using the structure from Navbar
const NAV_LINKS = {
  products: [
    { name: "Access Code", link: "#products" },
    { name: "Identity Code", link: "#products" },
    { name: "Product Code", link: "#products" },
  ],
  company: [
    { name: "About", link: "/about" },
    { name: "Press", link: "/press" },
    { name: "Careers", link: "/careers" },
    { name: "Contact Us", link: "/contact" },
    { name: "Scancodes", link: "/scancodes" },
    { name: "Deallock", link: "/deallock" },
    { name: "Vasset Global", link: "/vasset-global" },
  ],
  developers: [
    { name: "Documentation", link: "/docs" },
    { name: "API Reference", link: "/docs/api" },
  ],
  external: [
    { name: "Agency", link: "/agency" },
    { name: "Pricing", link: "/pricing" },
    { name: "Login", link: "/login" },
  ]
};

const POLICIES = [
  "Privacy Policy",
  "Cookie Policy",
  "Usage Policy",
  "Terms & Conditions",
  "Data Processing Agreement",
  "Data Retention Policy"
];

// Utility for staggered text effect
const titleAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const letterAnimation = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 150,
      damping: 10,
    },
  },
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#93D291] pt-24 pb-8 overflow-hidden relative text-black">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 mb-24">
          
          {/* Left Column - Wow Factor Text Effect */}
          <div className="flex flex-col justify-between items-start h-full">
            <div className="max-w-md mb-8">
               <span className="text-xl font-medium tracking-tight mb-4 inline-block">Ready to scale?</span>
               <p className="text-black/80 font-medium max-w-sm">
                 Bring unbreakable trust to your application today.
               </p>
            </div>
            
            <motion.div
              variants={titleAnimation}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="flex items-center flex-wrap"
            >
              {"IDCODE".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  variants={letterAnimation}
                  className="text-7xl sm:text-8xl md:text-[8rem] lg:text-[10rem] font-display font-black tracking-tighter leading-none block"
                  style={{ textShadow: "0px 10px 30px rgba(0,0,0,0.05)" }}
                >
                  {letter}
                </motion.span>
              ))}
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", delay: 0.8, stiffness: 200 }}
                viewport={{ once: true }}
                className="w-4 h-4 md:w-6 md:h-6 bg-black rounded-full ml-4 md:ml-6 mt-16 md:mt-24 inline-block"
              ></motion.span>
            </motion.div>
          </div>

          {/* Right Column - Nav Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col space-y-6">
              <h4 className="font-bold text-lg">Products</h4>
              <ul className="flex flex-col space-y-4">
                {NAV_LINKS.products.map((item, i) => (
                  <li key={i}>
                    <Link href={item.link} className="text-black/80 hover:text-black font-medium transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <h4 className="font-bold text-lg pt-4">General</h4>
              <ul className="flex flex-col space-y-4">
                {NAV_LINKS.external.map((item, i) => (
                  <li key={i}>
                    <Link href={item.link} className="text-black/80 hover:text-black font-medium transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col space-y-6">
              <h4 className="font-bold text-lg">Company</h4>
              <ul className="flex flex-col space-y-4">
                {NAV_LINKS.company.map((item, i) => (
                  <li key={i}>
                    <Link href={item.link} className="text-black/80 hover:text-black font-medium transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col space-y-6">
              <h4 className="font-bold text-lg">Developers</h4>
              <ul className="flex flex-col space-y-4">
                {NAV_LINKS.developers.map((item, i) => (
                  <li key={i}>
                    <Link href={item.link} className="text-black/80 hover:text-black font-medium transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-[1px] bg-black/20 mb-8"></div>

        {/* Bottom Bar: Policies & Socials */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs md:text-sm text-black/70 font-medium">
            <li>&copy; {currentYear} IDCODE NIGERIA</li>
            {POLICIES.map((policy, i) => (
              <li key={i}>
                <Link href="#" className="hover:text-black transition-colors shrink-0">
                  {policy}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex items-center space-x-5 shrink-0">
            {/* Instagram */}
            <Link href="#" className="text-black/70 hover:text-black hover:scale-110 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </Link>
            {/* X / Twitter */}
            <Link href="#" className="text-black/70 hover:text-black hover:scale-110 transition-all">
               <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768" /><path d="M13.232 9.232l6.768 -6.768" />
               </svg>
            </Link>
            {/* LinkedIn */}
            <Link href="#" className="text-black/70 hover:text-black hover:scale-110 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </Link>
            {/* Github */}
            <Link href="#" className="text-black/70 hover:text-black hover:scale-110 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}