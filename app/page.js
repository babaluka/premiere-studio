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
      ease: [0.16, 1, 0.3, 1],
    },
    viewport: {
      once: false,
      amount: 0.3,
    },
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden font-serif">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-2xl border-b border-white/10">

        <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 md:py-6 flex items-center justify-between">

          {/* LOGO */}
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.8,
              ease: [0.16, 1, 0.3, 1],
            }}
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
                  initial={{
                    opacity: 0,
                    y: -10,
                    filter: "blur(10px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: 1.5,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
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
                className={`transition duration-500 ${
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
                className={`transition duration-500 ${
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

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        {/* HERO IMAGE */}
        <motion.img
          src="/images/hero.jpg"
          alt="Hero"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.05 }}
          transition={{
            duration: 4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        {/* CONTENT */}
        <div className="relative z-10 text-center px-5 md:px-6 max-w-5xl">

          <motion.p
            {...fadeZoom}
            className="uppercase tracking-[0.35em] text-[10px] md:text-sm text-white/60 mb-5"
          >
            {language === "al" ? "Mirë se vini në" : "Welcome To"}
          </motion.p>

          <motion.img
            src="/logo/logo.png"
            alt="PREMIERË STUDIO"
            initial={{
              opacity: 0,
              scale: 1.3,
              filter: "blur(20px)",
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 2.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{
              once: false,
            }}
            className="mx-auto w-[220px] sm:w-[280px] md:w-[380px] h-auto"
          />

          <motion.p
            {...fadeZoom}
            className="mt-8 md:mt-10 text-xs md:text-base tracking-[0.18em] md:tracking-[0.25em] uppercase text-white/70 leading-6"
          >
            {language === "al"
              ? "Ne nuk filmojmë vetëm momente — ne tregojmë historinë tuaj"
              : "We don’t just film moments — we tell your story"}
          </motion.p>

          <motion.div
            {...fadeZoom}
            className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
          >

            <motion.button
              whileHover={{
                scale: 1.03,
                y: -2,
              }}
              transition={{ duration: 0.4 }}
              className="w-full sm:w-auto border border-white/30 px-7 md:px-8 py-4 rounded-full uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-white hover:text-black transition duration-500"
            >
              {language === "al" ? "Shiko Showreel" : "Watch Showreel"}
            </motion.button>

            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.03,
                y: -2,
              }}
              transition={{ duration: 0.4 }}
              className="w-full sm:w-auto border border-white/30 px-7 md:px-8 py-4 rounded-full uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-white hover:text-black transition duration-500"
            >
              {language === "al" ? "Kontakti" : "Contact Us"}
            </motion.a>

          </motion.div>

        </div>

      </section>

      {/* ABOUT */}
      <section className="grid md:grid-cols-2 bg-[#050505]">

        <motion.div
          {...fadeZoom}
          className="relative h-[420px] md:min-h-[800px] overflow-hidden md:rounded-l-[40px] order-1 md:order-2"
        >

          <img
            src="/images/about.JPG"
            alt="About"
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />

          <div className="absolute inset-0 bg-black/10" />

        </motion.div>

        <div className="flex items-center px-6 md:px-20 py-16 md:py-20 order-2 md:order-1">

          <div className="max-w-xl">

            <motion.h2
              {...fadeZoom}
              className="text-4xl md:text-6xl leading-tight mb-8 md:mb-10"
            >
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
            </motion.h2>

            <motion.p
              {...fadeZoom}
              className="text-white/70 leading-7 md:leading-8 text-base md:text-lg"
            >
              {language === "al"
                ? "Në PREMIERË STUDIO krijojmë video dhe fotografi kinematografike që kapin emocionet reale dhe i shndërrojnë në kujtime të përjetshme."
                : "At PREMIERË STUDIO, we create cinematic wedding films that capture real emotions and transform them into timeless memories."}
            </motion.p>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-20 md:py-32 px-5 md:px-8 border-t border-white/10 bg-[#050505]"
      >

        <motion.div
          {...fadeZoom}
          className="max-w-6xl mx-auto text-center"
        >

          <h2 className="text-3xl md:text-6xl uppercase mb-6 md:mb-10">
            {language === "al" ? "Kontakti" : "Contact"}
          </h2>

          <p className="text-sm md:text-base text-white/60 mb-12 md:mb-16">
            {language === "al"
              ? "Le të krijojmë kujtime të paharrueshme së bashku."
              : "Let’s create timeless memories together."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 text-left max-w-5xl mx-auto">

            {/* PHONE */}
            <motion.div
              {...fadeZoom}
              whileHover={{
                y: -6,
                scale: 1.01,
              }}
              className="border border-white/10 rounded-[22px] md:rounded-[26px] p-4 md:p-5 bg-white/5 backdrop-blur-md hover:bg-white/10 transition duration-500"
            >

              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-5">

                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-lg md:text-xl">
                  ☎
                </div>

                <div>
                  <p className="uppercase tracking-[0.25em] text-white/40 text-[9px] md:text-[10px] mb-1">
                    {language === "al" ? "Telefoni" : "Phone"}
                  </p>

                  <p className="text-sm md:text-base">
                    {language === "al"
                      ? "Kontakti Direkt"
                      : "Direct Contact"}
                  </p>
                </div>

              </div>

              <a
                href="tel:+38349298296"
                className="text-sm md:text-lg hover:text-white/70 transition"
              >
                +383 49 298 296
              </a>

            </motion.div>

            {/* EMAIL */}
            <motion.div
              {...fadeZoom}
              whileHover={{
                y: -6,
                scale: 1.01,
              }}
              className="border border-white/10 rounded-[22px] md:rounded-[26px] p-4 md:p-5 bg-white/5 backdrop-blur-md hover:bg-white/10 transition duration-500"
            >

              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-5">

                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-lg md:text-xl">
                  ✉
                </div>

                <div>
                  <p className="uppercase tracking-[0.25em] text-white/40 text-[9px] md:text-[10px] mb-1">
                    Email
                  </p>

                  <p className="text-sm md:text-base">
                    {language === "al"
                      ? "Na dërgo një mesazh"
                      : "Send Us A Message"}
                  </p>
                </div>

              </div>

              <a
                href="mailto:egzongjuka@gmail.com"
                className="text-sm md:text-base hover:text-white/70 transition break-all"
              >
                egzongjuka@gmail.com
              </a>

            </motion.div>

            {/* INSTAGRAM */}
            <motion.div
              {...fadeZoom}
              whileHover={{
                y: -6,
                scale: 1.01,
              }}
              className="border border-white/10 rounded-[22px] md:rounded-[26px] p-4 md:p-5 bg-white/5 backdrop-blur-md hover:bg-white/10 transition duration-500"
            >

              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-5">

                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center">
                  <img
                    src="/icons/instagram.png"
                    alt="Instagram"
                    className="w-5 h-5 md:w-6 md:h-6 object-contain"
                  />
                </div>

                <div>
                  <p className="uppercase tracking-[0.25em] text-white/40 text-[9px] md:text-[10px] mb-1">
                    Instagram
                  </p>

                  <p className="text-sm md:text-base">
                    {language === "al"
                      ? "Na ndiqni"
                      : "Follow Our Work"}
                  </p>
                </div>

              </div>

              <a
                href="https://www.instagram.com/premierestudioo/"
                target="_blank"
                className="text-sm md:text-base hover:text-white/70 transition"
              >
                @premierestudioo
              </a>

            </motion.div>

            {/* LOCATION */}
            <motion.div
              {...fadeZoom}
              whileHover={{
                y: -6,
                scale: 1.01,
              }}
              className="border border-white/10 rounded-[22px] md:rounded-[26px] p-4 md:p-5 bg-white/5 backdrop-blur-md hover:bg-white/10 transition duration-500"
            >

              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-5">

                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center">
                  <img
                    src="/icons/location.png"
                    alt="Location"
                    className="w-5 h-5 md:w-6 md:h-6 object-contain"
                  />
                </div>

                <div>
                  <p className="uppercase tracking-[0.25em] text-white/40 text-[9px] md:text-[10px] mb-1">
                    {language === "al" ? "Lokacioni" : "Location"}
                  </p>

                  <p className="text-sm md:text-base">
                    {language === "al"
                      ? "Vizitoni studion tonë"
                      : "Visit Our Studio"}
                  </p>
                </div>

              </div>

              <a
                href="https://maps.app.goo.gl/WhFRb43ebb2J9YvD6"
                target="_blank"
                className="text-sm md:text-base hover:text-white/70 transition"
              >
                Pejë, Kosovo
              </a>

            </motion.div>

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