"use client";

import BreathingText from "@/fancy/components/text/breathing-text";
import { Inter } from "next/font/google"; // Importing a variable font

// Load Inter Variable Font
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function Herotext() {
  return (
    <div className={`${inter.variable} flex items-center justify-center`}>
      <BreathingText
        label="Welcome to ResourceIQ"
        className="font-inter text-5xl sm:text-7xl md:text-9xl"
        staggerDuration={0.3}
        fromFontVariationSettings="'wght' 100, 'slnt' 0"
        toFontVariationSettings="'wght' 800, 'slnt' -10"
      />
    </div>
  );
}
