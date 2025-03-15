"use client";

import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export default function HowItWorks() {
  return (
    <section className="bg-black min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <h2 className="text-7xl font-extrabold  text-center mb-26 bg-gradient-to-r from-gray-700 via-gray-100 to-gray-900 bg-clip-text text-transparent">
        How It works?
      </h2>
      <p className="text-lg text-gray-400 text-center mb-12">
        Watch this quick demo to see how our AI-powered platform makes job
        hunting effortless.
      </p>

      <div className="relative w-full max-w-3xl">
        {/* Light Mode Video */}
        <HeroVideoDialog
          className="block dark:hidden"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/NMThdHhrLoM?si=6tIJXFPS4jQM58fj"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
          thumbnailAlt="How It Works Video"
        />

        {/* Dark Mode Video */}
        <HeroVideoDialog
          className="hidden dark:block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/NMThdHhrLoM?si=6tIJXFPS4jQM58fj"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
          thumbnailAlt="How It Works Video"
        />
      </div>
    </section>
  );
}
