"use client";

import { useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function BackgroundAudio() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioSrc = "/audio/background-music.mp3"; // Change this to your actual audio file

  useEffect(() => {
    const audio = new Audio(audioSrc);
    audio.loop = true;
    audio.volume = 0.5;

    if (isPlaying) {
      audio.play().catch((e) => console.log("Autoplay prevented:", e));
    }

    return () => {
      audio.pause();
    };
  }, [isPlaying]);

  return (
    <button
      className="fixed bottom-6 right-6 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
      onClick={() => setIsPlaying(!isPlaying)}
    >
      {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
    </button>
  );
}
