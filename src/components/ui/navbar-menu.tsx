"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Dashboard", href: "/dashboard" },
];

const dropdownItems = [
  { name: "Interview Prep", href: "/interview-prep" },
  { name: "CV", href: "/cv" },
  { name: "Cover Letter", href: "/cover-letter" },
  { name: "Industry", href: "/industry" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const { scrollY } = useScroll();
  const y = useSpring(scrollY, {
    stiffness: 200,
    damping: 15,
    mass: 0.5,
  });

  return (
    <motion.nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] lg:w-[70%] bg-black/90 backdrop-blur-lg rounded-2xl px-6 py-3 z-50 shadow-[2px_9px_10px_1px_rgba(84,172,255,0.84)]"
      style={{ y: y.get() * 0.03 }} // Small jiggle effect
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 10 }}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-white text-2xl font-bold">
          ResourceIQ
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <NavItem key={item.name} href={item.href}>
              {item.name}
            </NavItem>
          ))}

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 text-white hover:text-gray-300 transition"
            >
              <span>Resources</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className="absolute left-0 mt-2 bg-black text-white shadow-lg rounded-lg py-2 w-48 border border-gray-700"
              >
                {dropdownItems.map((item) => (
                  <DropdownItem key={item.name} href={item.href}>
                    {item.name}
                  </DropdownItem>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/90 text-white py-4 px-6 space-y-4 mt-2 rounded-xl shadow-lg"
        >
          {menuItems.map((item) => (
            <MobileNavItem key={item.name} href={item.href}>
              {item.name}
            </MobileNavItem>
          ))}

          {/* Dropdown in Mobile */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between w-full px-4 py-2 text-left hover:bg-gray-800 rounded-md"
            >
              <span>Resources</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className="mt-2 space-y-2"
              >
                {dropdownItems.map((item) => (
                  <MobileDropdownItem key={item.name} href={item.href}>
                    {item.name}
                  </MobileDropdownItem>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

// Desktop NavItem
const NavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link href={href} className="text-white hover:text-gray-300 transition">
    {children}
  </Link>
);

// Desktop DropdownItem
const DropdownItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="block px-4 py-2 hover:bg-gray-800 transition-colors"
  >
    {children}
  </Link>
);

// Mobile NavItem
const MobileNavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="block px-4 py-2 text-white hover:bg-gray-800 rounded-md transition"
  >
    {children}
  </Link>
);

// Mobile DropdownItem
const MobileDropdownItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="block px-6 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition"
  >
    {children}
  </Link>
);

export default Navbar;
