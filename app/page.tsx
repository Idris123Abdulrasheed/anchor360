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
    <main className="min-h-screen bg-[#F5F1EA] flex items-center justify-center px-5 py-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-35 bg-[radial-gradient(#d6c6ab_1px,transparent_1px)] bg-[length:28px_28px]" />

      <div className="absolute -left-32 top-0 w-[450px] h-[450px] rounded-full bg-[#E9DFCF] blur-3xl opacity-25" />
      <div className="absolute -right-32 bottom-0 w-[450px] h-[450px] rounded-full bg-[#EFE4D3] blur-3xl opacity-35" />

      <section className="relative z-10 w-full max-w-sm">
        <div className="flex items-center justify-end mb-6">
          <button className="px-5 py-2 rounded-full border border-[#D7C4A7] text-[#0B2545] font-medium bg-white/70 backdrop-blur-md">
            Login
          </button>
        </div>

        <div className="bg-white/90 backdrop-blur-xl rounded-[32px] border border-[#E6D8C3] shadow-[0_18px_50px_rgba(0,0,0,0.08)] px-6 py-8">
          <div className="mx-auto mb-6 w-24 h-24 rounded-full bg-gradient-to-br from-[#123A5F] to-[#061A2F] border-[4px] border-[#D4B06A] flex items-center justify-center shadow-xl">
            <span className="text-5xl text-[#F5E6C8] drop-shadow-lg">
              ⚓
            </span>
          </div>

          <h1 className="text-center text-[48px] leading-none font-black tracking-tight text-[#071C34]">
            Anchor 360
          </h1>

          <div className="flex items-center justify-center gap-4 mt-4 mb-5">
            <div className="w-12 h-[2px] bg-[#D4B06A]" />
            <div className="w-2 h-2 rotate-45 border border-[#D4B06A]" />
            <div className="w-12 h-[2px] bg-[#D4B06A]" />
          </div>

          <p className="text-center text-[#123A5F] font-bold tracking-[0.24em] text-[11px] mb-6">
            THE STUDENT OPERATING SYSTEM
          </p>

          <p className="text-center text-[#4B5563] text-[17px] leading-relaxed mb-8 px-2">
            Connect with the right people, opportunities, and solutions.
          </p>

          <button
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full rounded-2xl border border-[#E5D7BF] bg-white py-4 px-5 flex items-center justify-center gap-3 text-[#111827] text-lg font-semibold shadow-sm hover:shadow-lg hover:border-[#C8A45D] transition-all duration-200 active:scale-[0.985] disabled:opacity-70"
          >
            {isLoading ? (
              <div className="w-5 h-5 rounded-full border-[3px] border-gray-300 border-t-[#0B2545] animate-spin" />
            ) : (
              <img
                src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
                alt="Google"
                className="w-6 h-6"
              />
            )}

            <span>
              {isLoading ? 'Signing in...' : 'Continue with Google'}
            </span>
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-7">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-white/80 border border-[#E7D9C6] flex items-center justify-center text-xl shadow-sm mb-2">
              👥
            </div>
            <h3 className="text-[#0B2545] text-sm font-bold tracking-wide">
              CONNECT
            </h3>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-white/80 border border-[#E7D9C6] flex items-center justify-center text-xl shadow-sm mb-2">
              🧭
            </div>
            <h3 className="text-[#0B2545] text-sm font-bold tracking-wide">
              SOLVE
            </h3>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-white/80 border border-[#E7D9C6] flex items-center justify-center text-xl shadow-sm mb-2">
              📈
            </div>
            <h3 className="text-[#0B2545] text-sm font-bold tracking-wide">
              RISE
            </h3>
          </div>
        </div>
      </section>
    </main>
  )
}