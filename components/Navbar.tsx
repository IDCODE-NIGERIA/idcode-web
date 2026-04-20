"use client";

import { useScroll } from "@/hooks/use-scroll";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowDown01Icon, Cancel01FreeIcons, LinkSquare01Icon, Menu01Icon, } from "@hugeicons/core-free-icons";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-2 sm:py-3" : "bg-transparent py-2 sm:py-2"}`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 sm:gap-8">
          {/* Logo - Left */}
          <Link
            href="/"
            className="flex flex-row gap-2 sm:gap-4 items-center justify-center shrink-0"
          >
            <Image
              src="/idcode-logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="w-10 h-10 sm:w-12 sm:h-12 text-white font-bold"
            ></Image>
            <h1 className="hidden sm:block text-base sm:text-lg font-bold text-black">IDCODE NIGERIA</h1>
          </Link>

          {/* Desktop Menu Items - Center (hidden on mobile) */}
          <div className="hidden lg:flex items-center gap-4 md:gap-6 flex-1 justify-center">
            <NavItem
              label="Products"
              onMouseEnter={() => setHoveredMenu("product")}
              onMouseLeave={() => setHoveredMenu(null)}
              isOpen={hoveredMenu === "product"}
            >
              {/* Menu content goes here */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 p-4 md:p-8 w-auto md:w-150">
                {PRODUCTS.map((product) => (
                  <div
                    key={product.name}
                    className="flex gap-4 hover:bg-[#F2EAD3] p-2 md:p-3 rounded-xl transition-colors cursor-pointer"
                  >
                    <div className="mt-1">
                      <Image
                        src={product.icon}
                        alt={product.name}
                        className="w-10 h-10 md:w-12 md:h-12"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div>
                      <h3 className="text-xs md:text-sm font-semibold">{product.name}</h3>
                      <p className="text-xs md:text-sm">{product.description}</p>
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
              <div className="grid grid-cols-2 gap-4 md:gap-6 p-4 md:p-8 w-auto md:w-150">
                {COMPANY.map((item) => (
                  <div key={item.name} className="flex gap-4 hover:bg-[#F2EAD3] p-2 md:p-3 rounded-xl transition-colors cursor-pointer">
                    <Link href={item.link} className="text-xs md:text-sm font-semibold">{item.name}</Link>
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
              <div className="grid grid-cols-2 gap-4 md:gap-6 p-4 md:p-8 w-auto md:w-150">
                {DEVELOPERS.map((item) => (
                  <div key={item.name} className="flex gap-4 hover:bg-[#F2EAD3] p-2 md:p-3 rounded-xl transition-colors cursor-pointer">
                    <div>
                      <h3 className="text-xs md:text-sm font-semibold">{item.name}</h3>
                      <p className="text-xs md:text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </NavItem>
            <Link href={"/"} className="flex flex-row gap-1 items-center hover:opacity-80 transition-opacity">
              <span className="text-black font-normal text-xs md:text-sm">Agency</span>
              <HugeiconsIcon icon={LinkSquare01Icon} size={16} scale={20}/>
            </Link>
            <Link href={"/"} className="flex flex-row gap-1 items-center hover:opacity-80 transition-opacity">
              <span className="text-black font-normal text-xs md:text-sm">Pricing</span>
            </Link>
          </div>

          {/* Desktop Login & Contact Us - Right (hidden on mobile) */}
          <div className="hidden sm:flex items-center gap-3 sm:gap-6 shrink-0">
            <Link href={"/"} className="flex flex-row gap-1 items-center hover:opacity-80 transition-opacity">
              <span className="text-black font-normal text-xs sm:text-sm">Login</span>
            </Link>
            <button className="bg-[#4ADE80] text-black text-xs sm:text-sm py-2 px-4 sm:py-3 sm:px-6 rounded-3xl hover:bg-idcode-green-accent transition-colors">
              Contact Us
            </button>
          </div>

          {/* Mobile Hamburger Button (visible only on mobile) */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 transition-colors shrink-0"
            aria-label="Toggle mobile menu"
          >
            <HugeiconsIcon 
              icon={mobileMenuOpen ? Cancel01FreeIcons : Menu01Icon} 
              size={24} 
              scale={20}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed right-0 top-0 h-full w-full max-w-xs bg-white shadow-lg z-50 overflow-y-auto pt-20"
            >
              <div className="px-4 py-6 space-y-4">
                {/* Mobile Menu Items */}
                <MobileMenuSection
                  title="Products"
                  items={PRODUCTS.map(p => ({ name: p.name, link: "/" }))}
                  onClose={() => setMobileMenuOpen(false)}
                />
                <MobileMenuSection
                  title="Company"
                  items={COMPANY}
                  onClose={() => setMobileMenuOpen(false)}
                />
                <MobileMenuSection
                  title="Developers"
                  items={DEVELOPERS.map(d => ({ name: d.name, link: "/" }))}
                  onClose={() => setMobileMenuOpen(false)}
                />

                {/* Divider */}
                <div className="border-t border-gray-200 my-4"></div>

                {/* Mobile Auth Links */}
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 px-4 text-black font-medium hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Agency
                </Link>
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 px-4 text-black font-medium hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Pricing
                </Link>
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 px-4 text-black font-medium hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Login
                </Link>
                <button className="w-full bg-[#4ADE80] text-black py-3 px-4 rounded-3xl font-medium hover:bg-idcode-green-accent transition-colors">
                  Contact Us
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
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

function MobileMenuSection({
  title,
  items,
  onClose,
}: {
  title: string;
  items: { name: string; link: string }[];
  onClose: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-black">{title}</span>
        <HugeiconsIcon 
          icon={ArrowDown01Icon} 
          size={16} 
          scale={20}
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-4 space-y-2 py-2">
              {items.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  onClick={onClose}
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
