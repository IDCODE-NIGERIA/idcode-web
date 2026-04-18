"use client";

import { useScroll } from "@/hooks/use-scroll";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowDown01Icon, LinkSquare01Icon } from "@hugeicons/core-free-icons";
import { link } from "motion/react-m";


const PRODUCTS = [
  {
    name: "Access Code",
    description:
      "IDCODE's access management solution for event management access control",
    icon: "/access.svg",
  },
  {
    name: "Identity Code",
    description: "Verifiable and auditable identity verification solution",
    icon: "/identity.svg",
  },
  {
    name: "Product Code",
    description: "Easily increase trust by making your product verifiable.",
    icon: "/product2.svg",
  },
];

const DEVELOPERS = [
  {
    name: "Documentation",
    description: "Comprehensive guides and API references for seamless integration.",
  }
];

const COMPANY = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Press",
    link: "/press",
  },
  {
    name: "Careers",
    link: "/careers",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
  {
    name: "Scancodes",
    link: "/scancodes",
  },
  {
    name: "Deallock",
    link: "/deallock",
  },
  {
    name: "Vasset Global",
    link: "/vasset-global",
  },
];

export const NavBar: React.FC = () => {
  const isScrolled = useScroll(20);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-2"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">
        {/* Logo - Left */}
        <Link
          href="/"
          className="flex flex-row gap-4 items-center justify-center flex-shrink-0"
        >
          <Image
            src="/idcode-logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="text-white font-bold text-xl"
          ></Image>
          <h1 className="text-lg font-bold text-black">IDCODE NIGERIA</h1>
        </Link>

        {/* Menu Items - Center */}
        <div className="hidden lg:flex items-center gap-6 flex-1 justify-center">
          <NavItem
            label="Products"
            onMouseEnter={() => setHoveredMenu("product")}
            onMouseLeave={() => setHoveredMenu(null)}
            isOpen={hoveredMenu === "product"}
          >
            {/* Menu content goes here */}
            <div className="grid grid-cols-2 gap-6 p-8 w-150">
              {PRODUCTS.map((product) => (
                <div
                  key={product.name}
                  className="flex gap-4 hover:bg-[#F2EAD3] p-3 rounded-xl transition-colors cursor-pointer"
                >
                  <div className="mt-1">
                    <Image
                      src={product.icon}
                      alt={product.name}
                      className="w-12 h-12"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">{product.name}</h3>
                    <p className="text-sm">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </NavItem>
          <NavItem
            label="Company"
            onMouseEnter={() => setHoveredMenu("company")}
            onMouseLeave={() => setHoveredMenu(null)}
            isOpen={hoveredMenu === "company"}
          >
            <div className="grid grid-cols-2 gap-6 p-8 w-150">
              {COMPANY.map((item) => (
                <div key={item.name} className="flex gap-4 hover:bg-[#F2EAD3] p-3 rounded-xl transition-colors cursor-pointer">
                  <Link href={item.link} className="text-sm font-semibold">{item.name}</Link>
                </div>
              ))}
            </div> 
          </NavItem>
          <NavItem
            label="Developers"
            onMouseEnter={() => setHoveredMenu("developers")}
            onMouseLeave={() => setHoveredMenu(null)}
            isOpen={hoveredMenu === "developers"}
          >
            
          </NavItem>
          <Link href={"/"} className="flex flex-row gap-1 items-center">
            <span className="text-black font-normal text-sm">Agency</span>
            <HugeiconsIcon icon={LinkSquare01Icon} size={16} scale={20}/>
          </Link>
          <Link href={"/"} className="flex flex-row gap-1 items-center">
            <span className="text-black font-normal text-sm">Pricing</span>
          </Link>
        </div>

        {/* Login & Contact Us - Right */}
        <div className="flex items-center gap-8 shrink-0">
          <Link href={"/"} className="flex flex-row gap-1 items-center">
            <span className="text-black font-normal text-sm">Login</span>
          </Link>
          <button className=" bg-[#4ADE80] text-sm text-black py-2 px-5 rounded-3xl hover:bg-idcode-green-accent transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

function NavItem({
  label,
  children,
  onMouseEnter,
  onMouseLeave,
  isOpen,
}: {
  label: string;
  children?: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isOpen?: boolean;
}) {
  return (
    <div
      className="relative flex flex-row items-center gap-1"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span className="text-black font-normal text-sm">{label}</span>
      <HugeiconsIcon icon={ArrowDown01Icon} size={16} scale={20} />
      <AnimatePresence>
        {isOpen && children && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 mt-2 bg-white shadow-lg p-2 rounded-lg"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
