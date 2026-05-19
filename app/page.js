"use client";

import { motion } from "framer-motion";

export default function PremiereStudioHomepage() {
  return (
    <div
      id="top"
      className="bg-black text-white min-h-screen overflow-x-hidden font-serif"
    >
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          
          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/logo/logo.png"
              alt="PREMIERË STUDIO"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </motion.div>

          {/* NAVIGATION */}
          <nav className="hidden md:flex gap-12 text-sm tracking-[0.2em] uppercase text-white/80">
            {["Home", "Portfolio", "About", "Services", "Contact"].map(
              (item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="hover:text-white transition duration-500"
                >
                  {item}
                </motion.a>
              )
            )}
          </nav>

          {/* BUTTON */}
          <motion.a
            href="https://calendly.com/egzongjuka/30min"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="border border-white/30 px-6 py-3 rounded-full text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition duration-500"
          >
            Book Your Date
          </motion.a>

        </div>
      </header>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        
        {/* HERO IMAGE */}
        <img
          src="/images/hero.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10 text-center px-6 max-w-5xl"
        >

          {/* WELCOME */}
          <motion.p
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="uppercase tracking-[0.5em] text-sm text-white/60 mb-6"
          >
            Welcome To
          </motion.p>

          {/* BIG LOGO */}
          <motion.img
            src="/logo/logo.png"
            alt="PREMIERË STUDIO"
            className="mx-auto w-[280px] md:w-[380px] h-auto"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          />

          {/* TAGLINE */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="mt-10 text-sm md:text-base tracking-[0.25em] uppercase text-white/70"
          >
            We don’t just film moments — we tell your story
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6"
          >

            <motion.button
              whileHover={{ scale: 1.08 }}
              className="border border-white/30 px-8 py-4 rounded-full uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-black transition duration-500"
            >
              Watch Showreel
            </motion.button>

            <motion.a
              href="https://calendly.com/egzongjuka/30min"
              target="_blank"
              whileHover={{ scale: 1.08 }}
              className="border border-white/30 px-8 py-4 rounded-full uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-black transition duration-500"
            >
              Book Your Date
            </motion.a>

          </motion.div>

        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="grid md:grid-cols-2 min-h-screen bg-[#050505]">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="flex items-center px-10 md:px-20 py-20"
        >
          <div className="max-w-xl">

            <h2 className="text-5xl md:text-6xl leading-tight mb-10">
              We Capture
              <br />
              What Matters.
            </h2>

            <p className="text-white/70 leading-8 text-lg">
              At PREMIERË STUDIO, we create cinematic wedding films that
              capture real emotions and transform them into timeless memories.
            </p>

          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="relative min-h-[800px] overflow-hidden rounded-l-[40px]"
        >

          <img
            src="/images/about.jpg"
            alt="About"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/10" />

        </motion.div>
      </section>

      {/* BOOKING */}
      <section className="relative py-40 px-8 overflow-hidden border-t border-white/10">

        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >

          <h2 className="text-5xl md:text-7xl uppercase mb-10">
            Reserve Your Date
          </h2>

          <p className="text-white/60 text-lg mb-12">
            Your wedding deserves a cinematic story.
          </p>

          <motion.a
            href="https://calendly.com/egzongjuka/30min"
            target="_blank"
            whileHover={{ scale: 1.08 }}
            className="inline-flex items-center gap-4 border border-white/20 px-12 py-6 rounded-full uppercase tracking-[0.3em] text-sm hover:bg-white hover:text-black transition duration-700"
          >
            Book Now →
          </motion.a>

        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-16 text-center text-white/40 text-sm tracking-[0.2em] uppercase bg-black">
        © 2026 PREMIERË STUDIO — All Rights Reserved
      </footer>
    </div>
  );
}