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
    <main className="min-h-screen bg-[#F7F1EA] flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#d8c7ae_1px,transparent_1px)] bg-[length:42px_42px] opacity-40" />

      <section className="relative z-10 w-full max-w-md">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-[#B85C2D] flex items-center justify-center shadow-md">
              <span className="text-2xl">⚓</span>
            </div>

            <h2 className="text-2xl font-extrabold text-[#1E1E1E]">
              Anchor 360
            </h2>
          </div>

          <span className="text-sm font-semibold text-[#7A6A5C]">
            Login
          </span>
        </div>

        <div className="bg-white/90 backdrop-blur-xl rounded-[32px] shadow-2xl border border-[#eadccb] px-8 py-10">
          <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-[#C96A35] to-[#7A351B] flex items-center justify-center shadow-xl mb-7">
            <span className="text-5xl">⚓</span>
          </div>

          <h1 className="text-4xl font-black text-center text-[#1F1F1F]">
            Anchor 360
          </h1>

          <p className="text-center text-[#B85C2D] font-bold tracking-[0.22em] text-xs mt-3 mb-8">
            THE STUDENT OPERATING SYSTEM
          </p>

          <p className="text-center text-gray-600 text-base leading-relaxed mb-9">
            Connect with the right people, opportunities, and solutions built for student life.
          </p>

          <button
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full rounded-2xl border border-gray-200 bg-white py-4 px-5 flex items-center justify-center gap-3 text-gray-800 font-semibold shadow-sm hover:shadow-lg hover:border-[#B85C2D] transition-all active:scale-[0.98] disabled:opacity-70"
          >
            {isLoading ? (
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 border-t-gray-800 animate-spin" />
            ) : (
              <img
                src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
                alt="Google"
                className="w-6 h-6"
              />
            )}

            {isLoading ? 'Signing in...' : 'Continue with Google'}
          </button>
        </div>

        <p className="text-center text-[11px] text-[#8A7A6A] mt-8 tracking-[0.25em] font-semibold">
          CONNECT • SOLVE • RISE
        </p>
      </section>
    </main>
  )
}