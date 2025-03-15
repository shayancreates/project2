"use client";

import Aftervelo from "@/components/aftervelo";
import AnimatedButton from "@/components/btn2";
import ContactForm from "@/components/contact";
import Features from "@/components/Features";
import Footer from "@/components/footer";
import { LampDemo } from "@/components/lamp";
import { AnimatedTestimonialsDemo } from "@/components/mq";
import Testimonialtext from "@/components/testimonialtext";

import Herotext from "@/components/ui/herotext";
import { ScrollBasedVelocityDemo } from "@/components/velocity";
import HowItWorks from "@/components/works";
import PixelTrail from "@/fancy/components/background/pixel-trail";

export default function Home() {
  return (
    <div className="mainapp">
      <div className="relative w-full h-screen bg-black text-white flex items-center justify-center overflow-hidden">
        <PixelTrail
          pixelSize={24}
          fadeDuration={500}
          pixelClassName="bg-white"
        />

        <div className="z-10 text-center max-w-screen-md mx-auto px-4">
          <Herotext />
          <AnimatedButton text="Get Started" />
        </div>
      </div>

      <Features />
      <HowItWorks />
      <ScrollBasedVelocityDemo />
      <Aftervelo />
      <Testimonialtext />
      <AnimatedTestimonialsDemo />
      <LampDemo />
      <ContactForm />
      <Footer />
    </div>
  );
}
