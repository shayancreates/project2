import { useState, useEffect } from "react";

export default function useScreenSize() {
  const [size, setSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    width: size.width,
    height: size.height,
    lessThan: (sizeLabel: "sm" | "md" | "lg") => {
      const breakpoints = { sm: 640, md: 768, lg: 1024 };
      return size.width < breakpoints[sizeLabel];
    },
  };
}
