"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const updateScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    if (scrollY > 50) {
      controls.start({
        width: "50%",
        borderRadius: "50px",
        top: "10px",
        left: "25%",
      });
    } else {
      controls.start({
        width: "100%",
        borderRadius: "0px",
        top: "0px",
        left: "0%",
      });
    }
  }, [scrollY, controls]);

  return (
    <motion.nav
      animate={controls}
      initial={{ width: "100%", borderRadius: "0px" }}
      className="fixed top-0 left-0 z-50 bg-black text-white shadow-md px-6 py-4 flex justify-between items-center transition-all duration-300"
    >
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold">
        ResourceIQ
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-6">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/contact">Contact</NavItem>
        <NavItem href="/signin">Signin/Signup</NavItem>

        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center space-x-2 hover:text-gray-300"
          >
            <span>Resources</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          {dropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="absolute left-0 mt-2 bg-black text-white shadow-lg rounded-lg py-2 w-48 border border-gray-700"
            >
              <DropdownItem href="/cv">CV</DropdownItem>
              <DropdownItem href="/cover-letter">Cover Letter</DropdownItem>
              <DropdownItem href="/interview-prep">Interview Prep</DropdownItem>
              <DropdownItem href="/industry">Industry</DropdownItem>
            </motion.div>
          )}
        </div>

        <NavItem href="/dashboard">Dashboard</NavItem>
      </div>
    </motion.nav>
  );
};

const NavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link href={href} className="hover:text-gray-300 transition-colors">
    {children}
  </Link>
);

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

export default Navbar;
