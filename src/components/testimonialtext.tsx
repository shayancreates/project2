"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import VariableFontCursorProximity from "@/fancy/components/text/variable-font-cursor-proximity";

export default function Testimonialtext() {
  const containerRef = useRef<HTMLDivElement>(null!);

  return (
    <div
      className="w-dvw h-dvh flex items-center justify-center cursor-pointer relative bg-black overflow-hidden"
      ref={containerRef}
    >
      <VariableFontCursorProximity
        label="OUR TESTIMONIALS"
        className={cn(
          "text-4xl md:text-6xl lg:text-8xl leading-none text-white"
        )}
        fromFontVariationSettings="'wght' 400, 'slnt' 0"
        toFontVariationSettings="'wght' 900, 'slnt' -10"
        radius={200}
        containerRef={containerRef}
      />
    </div>
  );
}
