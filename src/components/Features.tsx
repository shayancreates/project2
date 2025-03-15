"use client";

import { motion } from "framer-motion";
import { BentoGridDemo } from "./bento";
import { StickyScrollRevealDemo } from "./revscroll";

export default function Features() {
  const features = [
    {
      title: "AI Resume Optimizer",
      description:
        "Get an ATS-friendly resume that stands out and lands more interviews.",
      color: "bg-indigo-500",
      borderColor: "border-indigo-500",
    },
    {
      title: "24/7 AI Career Coach",
      description:
        "Instant guidance, feedback, and expert insights—anytime, anywhere.",
      color: "bg-purple-500",
      borderColor: "border-purple-500",
    },
    {
      title: "Smart Interview Prep",
      description:
        "Tailored industry-specific interview questions to help you ace any role.",
      color: "bg-blue-400",
      borderColor: "border-blue-400",
    },
    {
      title: "AI Job Match",
      description:
        "Find the best jobs based on your CV—let AI do the hard work for you.",
      color: "bg-yellow-400",
      borderColor: "border-yellow-400",
    },
    {
      title: "Deep Industry Insights",
      description:
        "Get real-time trends and career advice tailored to your dream job.",
      color: "bg-green-500",
      borderColor: "border-green-500",
    },
  ];

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <h2 className="text-7xl font-extrabold  text-center mb-26 bg-gradient-to-r from-gray-700 via-gray-100 to-gray-900 bg-clip-text text-transparent">
        Why Choose ResourceIQ?
      </h2>
      <p className="text-lg text-gray-400 text-center mb-12">
        Unlock your career potential with AI-driven tools that make job hunting
        effortless.
      </p>

      <StickyScrollRevealDemo />
    </div>
  );
}
