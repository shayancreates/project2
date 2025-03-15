import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconUserCheck,
  IconFileText,
  IconDeviceLaptop,
  IconChartLine,
  IconBriefcase,
  IconMessageChatbot,
  IconSearch,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  return (
    <div className="bg-black py-10">
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800"></div>
);

const items = [
  {
    title: "AI-Powered CV Builder",
    description:
      "Generate a standout resume in seconds with AI-driven insights.",
    header: <Skeleton />,
    icon: <IconFileText className="h-6 w-6 text-white" />,
  },
  {
    title: "Live Interview Simulation",
    description: "Practice real-time interviews with AI feedback and coaching.",
    header: <Skeleton />,
    icon: <IconMessageChatbot className="h-6 w-6 text-white" />,
  },
  {
    title: "Smart Job Matching",
    description: "Find job listings tailored to your skills and preferences.",
    header: <Skeleton />,
    icon: <IconBriefcase className="h-6 w-6 text-white" />,
  },
  {
    title: "Industry Insights",
    description:
      "Stay ahead with the latest trends and salary benchmarks in your field.",
    header: <Skeleton />,
    icon: <IconChartLine className="h-6 w-6 text-white" />,
  },
  {
    title: "AI-Powered Cover Letters",
    description:
      "Craft compelling cover letters optimized for job applications.",
    header: <Skeleton />,
    icon: <IconUserCheck className="h-6 w-6 text-white" />,
  },
  {
    title: "Skill Assessment",
    description:
      "Test and improve your skills with AI-powered assessments and feedback.",
    header: <Skeleton />,
    icon: <IconDeviceLaptop className="h-6 w-6 text-white" />,
  },
  {
    title: "Personalized Career Guidance",
    description:
      "Receive tailored advice based on your career goals and experience.",
    header: <Skeleton />,
    icon: <IconSearch className="h-6 w-6 text-white" />,
  },
];
