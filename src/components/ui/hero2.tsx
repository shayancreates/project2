import Gravity, {
  MatterBody,
} from "@/fancy/components/physics/cursor-attractor-and-gravity";
import useScreenSize from "@/hooks/use-screen-size";
import { motion } from "framer-motion";

export default function Hero2() {
  const screenSize = useScreenSize();
  const words = [
    "we",
    "analyze",
    { text: "millions", highlight: true },
    { text: "of", highlight: true },
    { text: "data", highlight: true },
    { text: "points", highlight: true },
    "per",
    "second",
    "to",
    "provide",
    "you",
    "with",
    "the",
    "most",
    "accurate",
    "insights.",
  ];

  return (
    <div className="w-dvw h-dvh flex flex-col relative font-overused-grotesk justify-center items-center bg-[#0a0a0a]">
      <Gravity
        attractorStrength={0.0}
        cursorStrength={0.0004}
        cursorFieldRadius={200}
        className="w-full h-full z-0 absolute"
      >
        {[...Array(150)].map((_, i) => {
          // Adjust max size based on screen size
          const maxSize = screenSize.lessThan("sm")
            ? 12
            : screenSize.lessThan("md")
            ? 18
            : 25;
          const size = Math.max(
            screenSize.lessThan("sm") ? 6 : 10,
            Math.random() * maxSize
          );
          return (
            <MatterBody
              key={i}
              matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
              x={`${Math.random() * 100}%`}
              y={`${Math.random() * 100}%`}
            >
              <div
                className="rounded-full bg-[#d3d3d3] opacity-50"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                }}
              />
            </MatterBody>
          );
        })}
      </Gravity>
      <span className="text z-10 sm:text-lg md:text-xl text-white px-4 py-2 w-2/3 flex flex-wrap whitespace-pre-wrap">
        {words.map((word, index) => {
          const text = typeof word === "string" ? word : word.text;
          const highlight = typeof word === "object" && word.highlight;

          return (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`${highlight ? "text-[#4A90E2]" : ""} ${
                index < words.length - 1 ? "mr-1" : ""
              }`}
            >
              {text}
            </motion.span>
          );
        })}
      </span>
    </div>
  );
}
