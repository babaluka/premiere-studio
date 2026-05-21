"use client";

export default function FidanAulonaDashboard() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-12 py-10">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-10">

        <h1 className="text-5xl uppercase">
          Fidan & Aulona
        </h1>

        {/* LOGOUT */}
        <a
          href="/"
          className="border border-white/10 px-5 py-3 rounded-2xl uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-black transition"
        >
          Logout
        </a>

      </div>

      {/* VIDEOS */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* SHORT FILM */}
        <div className="border border-white/10 rounded-[30px] overflow-hidden bg-white/5 backdrop-blur-xl">

          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/3ifh2l_xKnw?modestbranding=1&rel=0"
            title="Short Film"
            allowFullScreen
          />

          <div className="p-6">

            <p className="uppercase tracking-[0.25em] text-white/40 text-xs mb-3">
              Cinematic Film
            </p>

            <h2 className="text-2xl mb-3">
              Short Film
            </h2>

            <p className="text-white/60 leading-7">
              PREMIERË STUDIO Cinematic Wedding Experience
            </p>

          </div>

        </div>

        {/* DASMA */}
        <div className="border border-white/10 rounded-[30px] overflow-hidden bg-white/5 backdrop-blur-xl">

          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/a7ZR2PFG1WA?modestbranding=1&rel=0"
            title="Dasma"
            allowFullScreen
          />

          <div className="p-6">

            <p className="uppercase tracking-[0.25em] text-white/40 text-xs mb-3">
              Dasma
            </p>

            <h2 className="text-2xl mb-3">
              Dasma
            </h2>

            <p className="text-white/60 leading-7">
              Full Wedding Day Experience by PREMIERË STUDIO
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}