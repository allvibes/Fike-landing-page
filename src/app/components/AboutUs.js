"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="relative py-20 px-6 md:px-20 bg-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#ffbe44] opacity-10 rounded-full blur-[180px] z-0" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
          Who We Are
        </h2>
        <p className="text-lg text-gray-700 mb-10">
          We’re not just building bikes,  we’re engineering movement. With a relentless drive
          for innovation, we merge smart tech, sustainable design, and futuristic craftsmanship
          to help you conquer tomorrow’s roads. From city streets to untamed trails, our mission
          is to elevate your ride, one revolution at a time.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="inline-block px-8 py-3 text-white text-lg rounded-full bg-gradient-to-r from-[#ffbe44] to-[#e63946] shadow-lg hover:shadow-xl"
        >
          Learn More About Our Vision
        </motion.div>
      </motion.div>
    </section>
  );
}
