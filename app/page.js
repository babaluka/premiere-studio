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

        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        {/* HERO IMAGE */}
        <img
          src="/images/hero.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        {/* HERO CONTENT */}
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
            initial={{ opacity: 1 }}
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
              href="#contact"
              whileHover={{ scale: 1.08 }}
              className="border border-white/30 px-8 py-4 rounded-full uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-black transition duration-500"
            >
              Contact Us
            </motion.a>

          </motion.div>

        </motion.div>
      </section>

      {/* ABOUT SECTION */}
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

        {/* ABOUT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="relative min-h-[800px] overflow-hidden rounded-l-[40px]"
        >

          <img
            src="/images/about.JPG"
            alt="About"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/10" />

        </motion.div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="py-32 px-8 border-t border-white/10 bg-[#050505]"
      >

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="max-w-6xl mx-auto text-center"
        >

          <h2 className="text-5xl md:text-7xl uppercase mb-10">
            Contact
          </h2>

          <p className="text-white/60 text-lg mb-16">
            Let’s create timeless memories together.
          </p>

          <div className="grid md:grid-cols-2 gap-10 text-left">

            {/* PHONE */}
            <div className="border border-white/10 rounded-[30px] p-10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition duration-500">

              <div className="flex items-center gap-5 mb-8">

                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-3xl">
                  ☎
                </div>

                <div>
                  <p className="uppercase tracking-[0.3em] text-white/40 text-xs mb-1">
                    Phone
                  </p>

                  <p className="text-white text-lg">
                    Direct Contact
                  </p>
                </div>

              </div>

              <a
                href="tel:+38349298296"
                className="text-3xl md:text-4xl font-normal hover:text-white/70 transition leading-none"
              >
                +383 49 298 296
              </a>

            </div>

            {/* EMAIL */}
            <div className="border border-white/10 rounded-[30px] p-10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition duration-500">

              <div className="flex items-center gap-5 mb-8">

                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-3xl">
                  ✉
                </div>

                <div>
                  <p className="uppercase tracking-[0.3em] text-white/40 text-xs mb-1">
                    Email
                  </p>

                  <p className="text-white text-lg">
                    Send Us A Message
                  </p>
                </div>

              </div>

              <a
                href="mailto:egzongjuka@gmail.com"
                className="text-2xl md:text-3xl font-normal hover:text-white/70 transition break-all"
              >
                egzongjuka@gmail.com
              </a>

            </div>

            {/* INSTAGRAM */}
            <div className="border border-white/10 rounded-[30px] p-10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition duration-500">

              <div className="flex items-center gap-5 mb-8">

                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center">

                  <img
                    src="/icons/instagram.png"
                    alt="Instagram"
                    className="w-8 h-8 object-contain"
                  />

                </div>

                <div>
                  <p className="uppercase tracking-[0.3em] text-white/40 text-xs mb-1">
                    Instagram
                  </p>

                  <p className="text-white text-lg">
                    Follow Our Work
                  </p>
                </div>

              </div>

              <a
                href="https://www.instagram.com/premierestudioo/"
                target="_blank"
                className="text-2xl md:text-3xl font-normal hover:text-white/70 transition"
              >
                @premierestudioo
              </a>

            </div>

            {/* LOCATION */}
            <div className="border border-white/10 rounded-[30px] p-10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition duration-500">

              <div className="flex items-center gap-5 mb-8">

                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center">

                  <img
                    src="/icons/location.png"
                    alt="Location"
                    className="w-8 h-8 object-contain"
                  />

                </div>

                <div>
                  <p className="uppercase tracking-[0.3em] text-white/40 text-xs mb-1">
                    Location
                  </p>

                  <p className="text-white text-lg">
                    Visit Our Studio
                  </p>
                </div>

              </div>

              <a
                href="https://maps.app.goo.gl/WhFRb43ebb2J9YvD6"
                target="_blank"
                className="text-2xl md:text-3xl font-normal hover:text-white/70 transition"
              >
                Pejë, Kosovo
              </a>

            </div>

          </div>

        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-16 text-center text-white/40 text-sm tracking-[0.2em] uppercase bg-black">
        © 2026 PREMIERË STUDIO — All Rights Reserved
      </footer>
    </div>
  );
}