'use client'

import { supabase } from './lib/supabase'
import { useState } from 'react'

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)

  const handleGoogleLogin = async () => {
    setIsLoading(true)

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    })

    if (error) {
      console.error(error.message)
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#F5F1EA] flex items-center justify-center px-5 py-10 relative overflow-hidden">

      {/* Background Texture */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#d6c6ab_1px,transparent_1px)] bg-[length:28px_28px]" />

      {/* Soft Background Waves */}
      <div className="absolute -left-32 top-0 w-[500px] h-[500px] rounded-full bg-[#E9DFCf] blur-3xl opacity-30" />
      <div className="absolute -right-32 bottom-0 w-[500px] h-[500px] rounded-full bg-[#EFE4D3] blur-3xl opacity-40" />

      <section className="relative z-10 w-full max-w-md">

        {/* TOP NAV */}
        <div className="flex items-center justify-between mb-8">

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#0B2545] border border-[#C8A45D]/40 shadow-lg flex items-center justify-center">
              <span className="text-[#F5E6C8] text-2xl">
                ⚓
              </span>
            </div>

            <h2 className="text-[42px] font-bold text-[#0B2545] tracking-tight">
              Anchor 360
            </h2>
          </div>

          <button className="px-5 py-2 rounded-full border border-[#D7C4A7] text-[#0B2545] font-medium bg-white/60 backdrop-blur-md">
            Login
          </button>
        </div>

        {/* MAIN CARD */}
        <div className="bg-white/80 backdrop-blur-xl rounded-[38px] border border-[#E6D8C3] shadow-[0_20px_60px_rgba(0,0,0,0.08)] px-8 py-10">

          {/* MAIN LOGO */}
          <div className="mx-auto mb-8 w-32 h-32 rounded-full bg-gradient-to-br from-[#123A5F] to-[#061A2F] border-[5px] border-[#D4B06A] flex items-center justify-center shadow-2xl">

            <span className="text-6xl text-[#F5E6C8] drop-shadow-lg">
              ⚓
            </span>

          </div>

          {/* TITLE */}
          <h1 className="text-center text-[64px] leading-none font-black tracking-tight text-[#071C34]">
            Anchor 360
          </h1>

          {/* GOLD DIVIDER */}
          <div className="flex items-center justify-center gap-4 mt-5 mb-6">

            <div className="w-14 h-[2px] bg-[#D4B06A]" />

            <div className="w-2 h-2 rotate-45 border border-[#D4B06A]" />

            <div className="w-14 h-[2px] bg-[#D4B06A]" />

          </div>

          {/* TAGLINE */}
          <p className="text-center text-[#123A5F] font-bold tracking-[0.28em] text-xs mb-8">
            THE STUDENT OPERATING SYSTEM
          </p>

          {/* DESCRIPTION */}
          <p className="text-center text-[#4B5563] text-[20px] leading-relaxed mb-10 px-2">
            Connect with the right people,
            opportunities, and solutions.
          </p>

          {/* GOOGLE BUTTON */}
          <button
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full rounded-2xl border border-[#E5D7BF] bg-white py-5 px-6 flex items-center justify-center gap-4 text-[#111827] text-xl font-semibold shadow-sm hover:shadow-lg hover:border-[#C8A45D] transition-all duration-200 active:scale-[0.985]"
          >

            {isLoading ? (
              <div className="w-6 h-6 rounded-full border-[3px] border-gray-300 border-t-[#0B2545] animate-spin" />
            ) : (
              <img
                src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
                alt="Google"
                className="w-7 h-7"
              />
            )}

            <span>
              {isLoading ? 'Signing in...' : 'Continue with Google'}
            </span>

          </button>

          {/* TRUST TEXT */}
          <div className="flex items-center justify-center gap-3 mt-8 text-[#6B7280] text-sm">

            <span>🔒 Secure</span>

            <span className="text-[#D4B06A]">•</span>

            <span>Private</span>

            <span className="text-[#D4B06A]">•</span>

            <span>Trusted</span>

          </div>

        </div>

        {/* BOTTOM FEATURES */}
        <div className="grid grid-cols-3 gap-4 mt-8">

          <div className="text-center">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-white/70 border border-[#E7D9C6] flex items-center justify-center text-2xl shadow-sm mb-3">
              👥
            </div>

            <h3 className="text-[#0B2545] font-bold tracking-wide">
              CONNECT
            </h3>

            <p className="text-xs text-[#6B7280] mt-1">
              Build relationships
            </p>
          </div>

          <div className="text-center">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-white/70 border border-[#E7D9C6] flex items-center justify-center text-2xl shadow-sm mb-3">
              🧭
            </div>

            <h3 className="text-[#0B2545] font-bold tracking-wide">
              SOLVE
            </h3>

            <p className="text-xs text-[#6B7280] mt-1">
              Find real solutions
            </p>
          </div>

          <div className="text-center">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-white/70 border border-[#E7D9C6] flex items-center justify-center text-2xl shadow-sm mb-3">
              📈
            </div>

            <h3 className="text-[#0B2545] font-bold tracking-wide">
              RISE
            </h3>

            <p className="text-xs text-[#6B7280] mt-1">
              Grow & achieve
            </p>
          </div>

        </div>

        {/* FOOT NOTE */}
        <p className="text-center text-[#0B2545] tracking-[0.45em] text-xs font-bold mt-10">
          CONNECT • SOLVE • RISE
        </p>

      </section>
    </main>
  )
}