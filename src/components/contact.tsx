"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import IPhoneModel from "@/components/iphone"; // Import iPhone Model

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-black px-5 py-24">
      {/* Left Side - 3D iPhone Model */}

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg rounded-xl border border-blue-500 bg-black p-8 text-white shadow-[0_0_20px_#00A6FF]"
      >
        <h1 className="mb-6 text-center text-3xl font-bold text-white">
          Fill in details
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full rounded-lg border border-gray-700 bg-black px-4 py-2 text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full rounded-lg border border-gray-700 bg-black px-4 py-2 text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              className="w-full rounded-lg border border-gray-700 bg-black px-4 py-2 text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-500 px-6 py-3 text-lg font-bold text-white transition hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}
