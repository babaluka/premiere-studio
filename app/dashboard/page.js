"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function PremiereStudioHomepage() {
  const [language, setLanguage] = useState("al");

  const fadeZoom = {
    initial: {
      opacity: 0,
      scale: 1.08,
      filter: "blur(14px)",
      y: 30,
    },
    whileInView: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      y: 0,
    },
    transition: {
      duration: 2,
    },
    viewport: {
      once: false,
      amount: 0.3,
    },
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        <img
          src="/images/hero.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 text-center px-6">

          <motion.img
            {...fadeZoom}
            src="/logo/logo.png"
            alt="PREMIERË STUDIO"
            className="mx-auto w-[220px] md:w-[380px]"
          />

          <motion.p
            {...fadeZoom}
            className="mt-8 uppercase tracking-[0.2em] text-white/70"
          >
            {language === "al"
              ? "Ne tregojmë historinë tuaj"
              : "We tell your story"}
          </motion.p>

          <motion.div
            {...fadeZoom}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >

            <a
              href="#contact"
              className="border border-white/30 px-6 py-4 rounded-full uppercase text-sm hover:bg-white hover:text-black transition"
            >
              Kontakti
            </a>

            <a
              href="/login"
              className="border border-white/30 px-6 py-4 rounded-full uppercase text-sm hover:bg-white hover:text-black transition"
            >
              Client Login
            </a>

          </motion.div>

        </div>

      </section>

    </div>
  );
}