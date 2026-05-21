"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (
      username === "fidan.aulona" &&
      password === "fid@n.aulon@"
    ) {
      router.push("/dashboard/fidandheaulona");
    } else {
      alert("Wrong credentials");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md border border-white/10 bg-white/5 backdrop-blur-xl rounded-[30px] p-8">

        {/* LOGO */}
        <div className="flex justify-center mb-8">

          <img
            src="/logo/logo.png"
            alt="PREMIERË STUDIO"
            className="w-[180px] object-contain"
          />

        </div>

        {/* TITLE */}
        <h1 className="text-3xl mb-4 text-center uppercase tracking-[0.2em]">
          Client Login
        </h1>

        {/* BACK BUTTON */}
        <a
          href="/"
          className="block text-center text-white/50 text-sm mb-8 hover:text-white transition"
        >
          ← Back to Homepage
        </a>

        {/* INPUTS */}
        <div className="space-y-5">

          <input
            type="text"
            placeholder="Username"
            className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none text-white"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* BUTTON */}
          <button
            onClick={handleLogin}
            className="w-full py-4 rounded-2xl bg-white text-black uppercase tracking-[0.2em]"
          >
            Login
          </button>

        </div>

      </div>

    </div>
  );
}