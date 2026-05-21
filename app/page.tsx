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
    <main className="min-h-screen relative overflow-hidden bg-[#e8e1d8] flex flex-col">
      {/* Marble Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/marble-bg.png')",
        }}
      />

      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/10" />

      {/* Top Bar */}
      <header className="relative z-10 h-14 bg-white/80 backdrop-blur-md flex items-center justify-between px-6 border-b border-white/40">
        <img
          src="/anchor-icon.png"
          alt="Anchor 360"
          className="w-8 h-8 rounded-full object-cover shadow-sm"
        />

        <button className="text-[#2A211B] text-base font-semibold">
          Login
        </button>
      </header>

      {/* Main Section */}
      <section className="relative z-10 flex-1 flex items-center justify-center px-6 py-10">
        <div className="relative w-full max-w-sm bg-[#F5F0E8]/95 rounded-[14px] shadow-[0_18px_45px_rgba(0,0,0,0.28)] px-7 pt-20 pb-7 border border-white/50">
          
          {/* Floating Icon */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2">
            <div className="w-32 h-32 rounded-full bg-[#F5F0E8] p-2 shadow-xl">
              <img
                src="/anchor-icon.png"
                alt="Anchor logo"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-center text-[46px] leading-none font-serif font-bold text-[#3B2417]">
            Anchor 360
          </h1>

          <p className="text-center text-[#6A3B24] font-bold tracking-[0.14em] text-xs mt-3 mb-6">
            THE STUDENT OPERATING SYSTEM
          </p>

          <p className="text-center text-black text-[18px] leading-snug font-medium mb-7">
            The best place to instantly connect <br />
            to the right people, opportunities <br />
            and solutions.
          </p>

          <div className="h-px w-full bg-[#D6CCC1] mb-6" />

          <button
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full h-14 rounded-md bg-white border border-[#BBAA9B] shadow-sm flex items-center justify-center gap-3 text-black text-lg font-semibold hover:shadow-md active:scale-[0.98] transition-all disabled:opacity-70"
          >
            {isLoading ? (
              <div className="w-5 h-5 rounded-full border-[3px] border-gray-300 border-t-[#3B2417] animate-spin" />
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
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 h-14 bg-white/80 backdrop-blur-md flex items-center justify-center border-t border-white/40">
        <div className="flex items-center gap-2 text-[#2A211B] text-sm font-medium">
          <span>Terms</span>
          <span>•</span>
          <span>Privacy</span>
          <span>•</span>
          <span>Contact</span>
        </div>
      </footer>
    </main>
  )
}