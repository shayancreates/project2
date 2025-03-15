"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "AI-Powered CV Builder",
    description:
      "Generate a standout resume in seconds with AI-driven insights. Highlight your skills, experience, and achievements with a professional touch.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/cv-builder.jpeg"
          width={500}
          height={300}
          className="h-full w-full object-cover"
          alt="AI-Powered CV Builder"
        />
      </div>
    ),
  },
  {
    title: "Live AI Interview Practice",
    description:
      "Prepare for job interviews with real-time AI feedback. Our simulation provides insights into your responses, confidence, and communication.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/ai-interview.jpeg"
          width={500}
          height={300}
          className="h-full w-full object-cover"
          alt="AI Interview Practice"
        />
      </div>
    ),
  },
  {
    title: "Smart Job Matching",
    description:
      "Find job listings tailored to your skills, experience, and preferences. Our AI scans opportunities across industries to match you with the best roles.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/job-matching.jpeg"
          width={500}
          height={300}
          className="h-full w-full object-cover"
          alt="Smart Job Matching"
        />
      </div>
    ),
  },
  {
    title: "Industry Insights & Career Growth",
    description:
      "Stay ahead with real-time job market trends, salary benchmarks, and industry insights. Make informed career decisions with the latest data.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/industry-insights.jpeg"
          width={500}
          height={300}
          className="h-full w-full object-cover"
          alt="Industry Insights"
        />
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="p-10 bg-black text-white min-h-screen pb-80">
      {/* Increased pb-80 for enough scroll space */}
      <StickyScroll content={content} />
    </div>
  );
}
