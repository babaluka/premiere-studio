"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function PremiereStudioHomepage() {
  const [language, setLanguage] = useState("al");

  return (
    <div
      id="top"
      className="bg-black text-white min-h-screen overflow-x-hidden font-serif"
    >
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 md:py-6 flex items-center justify-between">

          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/logo/logo.png"
              alt="PREMIERË STUDIO"
              className="h-10 md:h-14 w-auto object-contain"
            />
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-8">

            {/* NAVIGATION */}
            <nav className="hidden md:flex gap-12 text-sm tracking-[0.2em] uppercase text-white/80">
              {[
                language === "al" ? "Kreu" : "Home",
                language === "al" ? "Rreth Nesh" : "About",
                language === "al" ? "Kontakti" : "Contact",
              ].map((item, index) => (
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
              ))}
            </nav>

            {/* LANGUAGE SWITCH */}
            <div className="flex items-center gap-3 text-sm tracking-[0.2em] uppercase">

              <button
                onClick={() => setLanguage("al")}
                className={`transition ${
                  language === "al"
                    ? "text-white"
                    : "text-white/40 hover:text-white"
                }`}
              >
                AL
              </button>

              <span className="text-white/20">|</span>

              <button
                onClick={() => setLanguage("en")}
                className={`transition ${
                  language === "en"
                    ? "text-white"
                    : "text-white/40 hover:text-white"
                }`}
              >
                EN
              </button>

            </div>

          </div>

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
          className="relative z-10 text-center px-5 md:px-6 max-w-5xl"
        >

          {/* WELCOME */}
          <motion.p
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="uppercase tracking-[0.35em] text-[10px] md:text-sm text-white/60 mb-5"
          >
            {language === "al" ? "Mirë se vini në" : "Welcome To"}
          </motion.p>

          {/* BIG LOGO */}
          <motion.img
            src="/logo/logo.png"
            alt="PREMIERË STUDIO"
            className="mx-auto w-[220px] sm:w-[280px] md:w-[380px] h-auto"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          />

          {/* TAGLINE */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="mt-8 md:mt-10 text-xs md:text-base tracking-[0.18em] md:tracking-[0.25em] uppercase text-white/70 leading-6"
          >
            {language === "al"
              ? "Ne nuk filmojmë vetëm momente — ne tregojmë historinë tuaj"
              : "We don’t just film moments — we tell your story"}
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
          >

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full sm:w-auto border border-white/30 px-7 md:px-8 py-4 rounded-full uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-white hover:text-black transition duration-500"
            >
              {language === "al" ? "Shiko Showreel" : "Watch Showreel"}
            </motion.button>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="w-full sm:w-auto border border-white/30 px-7 md:px-8 py-4 rounded-full uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-white hover:text-black transition duration-500"
            >
              {language === "al" ? "Kontakti" : "Contact Us"}
            </motion.a>

          </motion.div>

        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section className="grid md:grid-cols-2 bg-[#050505]">

        {/* IMAGE FIRST ON MOBILE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="relative h-[420px] md:min-h-[800px] overflow-hidden md:rounded-l-[40px] order-1 md:order-2"
        >

          <img
            src="/images/about.JPG"
            alt="About"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/10" />

        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          className="flex items-center px-6 md:px-20 py-16 md:py-20 order-2 md:order-1"
        >
          <div className="max-w-xl">

            <h2 className="text-4xl md:text-6xl leading-tight mb-8 md:mb-10">
              {language === "al" ? (
                <>
                  Ne Kapim
                  <br />
                  Momentet që Kanë Rëndësi.
                </>
              ) : (
                <>
                  We Capture
                  <br />
                  What Matters.
                </>
              )}
            </h2>

            <p className="text-white/70 leading-7 md:leading-8 text-base md:text-lg">
              {language === "al"
                ? "Në PREMIERË STUDIO krijojmë video dhe fotografi kinematografike që kapin emocionet reale dhe i shndërrojnë në kujtime të përjetshme."
                : "At PREMIERË STUDIO, we create cinematic wedding films that capture real emotions and transform them into timeless memories."}
            </p>

          </div>
        </motion.div>

      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="py-20 md:py-32 px-5 md:px-8 border-t border-white/10 bg-[#050505]"
      >

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="max-w-6xl mx-auto text-center"
        >

          <h2 className="text-4xl md:text-7xl uppercase mb-6 md:mb-10">
            {language === "al" ? "Kontakti" : "Contact"}
          </h2>

          <p className="text-white/60 text-base md:text-lg mb-12 md:mb-16">
            {language === "al"
              ? "Le të krijojmë kujtime të paharrueshme së bashku."
              : "Let’s create timeless memories together."}
          </p>

          <div className="grid md:grid-cols-2 gap-6 md:gap-10 text-left">

            {/* PHONE */}
            <div className="border border-white/10 rounded-[25px] md:rounded-[30px] p-6 md:p-10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition duration-500">

              <div className="flex items-center gap-4 md:gap-5 mb-6 md:mb-8">

                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center text-2xl md:text-3xl">
                  ☎
                </div>

                <div>
                  <p className="uppercase tracking-[0.25em] text-white/40 text-[10px] md:text-xs mb-1">
                    {language === "al" ? "Telefoni" : "Phone"}
                  </p>

                  <p className="text-white text-base md:text-lg">
                    {language === "al"
                      ? "Kontakti Direkt"
                      : "Direct Contact"}
                  </p>
                </div>

              </div>

              <a
                href="tel:+38349298296"
                className="text-2xl md:text-4xl font-normal hover:text-white/70 transition leading-none"
              >
                +383 49 298 296
              </a>

            </div>

            {/* EMAIL */}
            <div className="border border-white/10 rounded-[25px] md:rounded-[30px] p-6 md:p-10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition duration-500">

              <div className="flex items-center gap-4 md:gap-5 mb-6 md:mb-8">

                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center text-2xl md:text-3xl">
                  ✉
                </div>

                <div>
                  <p className="uppercase tracking-[0.25em] text-white/40 text-[10px] md:text-xs mb-1">
                    Email
                  </p>

                  <p className="text-white text-base md:text-lg">
                    {language === "al"
                      ? "Na dërgo një mesazh"
                      : "Send Us A Message"}
                  </p>
                </div>

              </div>

              <a
                href="mailto:egzongjuka@gmail.com"
                className="text-lg md:text-3xl font-normal hover:text-white/70 transition break-all"
              >
                egzongjuka@gmail.com
              </a>

            </div>

            {/* INSTAGRAM */}
            <div className="border border-white/10 rounded-[25px] md:rounded-[30px] p-6 md:p-10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition duration-500">

              <div className="flex items-center gap-4 md:gap-5 mb-6 md:mb-8">

                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center">

                  <img
                    src="/icons/instagram.png"
                    alt="Instagram"
                    className="w-7 h-7 md:w-8 md:h-8 object-contain"
                  />

                </div>

                <div>
                  <p className="uppercase tracking-[0.25em] text-white/40 text-[10px] md:text-xs mb-1">
                    Instagram
                  </p>

                  <p className="text-white text-base md:text-lg">
                    {language === "al"
                      ? "Na ndiqni"
                      : "Follow Our Work"}
                  </p>
                </div>

              </div>

              <a
                href="https://www.instagram.com/premierestudioo/"
                target="_blank"
                className="text-xl md:text-3xl font-normal hover:text-white/70 transition"
              >
                @premierestudioo
              </a>

            </div>

            {/* LOCATION */}
            <div className="border border-white/10 rounded-[25px] md:rounded-[30px] p-6 md:p-10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition duration-500">

              <div className="flex items-center gap-4 md:gap-5 mb-6 md:mb-8">

                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center">

                  <img
                    src="/icons/location.png"
                    alt="Location"
                    className="w-7 h-7 md:w-8 md:h-8 object-contain"
                  />

                </div>

                <div>
                  <p className="uppercase tracking-[0.25em] text-white/40 text-[10px] md:text-xs mb-1">
                    {language === "al" ? "Lokacioni" : "Location"}
                  </p>

                  <p className="text-white text-base md:text-lg">
                    {language === "al"
                      ? "Vizitoni studion tonë"
                      : "Visit Our Studio"}
                  </p>
                </div>

              </div>

              <a
                href="https://maps.app.goo.gl/WhFRb43ebb2J9YvD6"
                target="_blank"
                className="text-xl md:text-3xl font-normal hover:text-white/70 transition"
              >
                Pejë, Kosovo
              </a>

            </div>

          </div>

        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 md:py-16 text-center text-white/40 text-[10px] md:text-sm tracking-[0.15em] md:tracking-[0.2em] uppercase bg-black px-4">
        © 2026 PREMIERË STUDIO — All Rights Reserved
      </footer>
    </div>
  );
}