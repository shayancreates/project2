import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const AnimatedButton: React.FC<ButtonProps> = ({ text, ...props }) => {
  return (
    <button
      className="group relative mt-20 overflow-hidden rounded-full border-2 border-black bg-black px-12 py-3 font-extrabold uppercase text-white transition-all duration-200 ease-in-out"
      {...props}
    >
      <span className="relative mix-blend-difference z-10">{text}</span>
      <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-200 ease-in-out group-hover:translate-x-0 skew-x-[15deg]" />
    </button>
  );
};

export default AnimatedButton;
