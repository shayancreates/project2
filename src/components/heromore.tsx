import { MorphingText } from "@/components/magicui/morphing-text";

const texts = [
  "AI Interview Coach",
  "Live AI Mock Interviews",
  "ATS Friendly Resume",
  "Industry Trend Insights",
  "Resume Score Analyzer",
  "Next Gen Job Hunting",
  "CV Builder",
  "Tailored Job Recommendations",
];

export function MorphingTextDemo() {
  return <MorphingText texts={texts} />;
}
