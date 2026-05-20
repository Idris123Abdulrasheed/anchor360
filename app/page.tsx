'use client' // yo appear on the hompage and not backend
import { supabase } from './lib/supabase' //supabase is basically providing me BAAS bakeed as a service

export default function Home() {
  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin + '/dashboard'
      }
    })
  }

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6">

      {/* LOGO AREA */}
      <div className="flex flex-col items-center mb-10">
        <div className="w-24 h-24 rounded-full bg-[#C9A84C] flex items-center justify-center mb-6 shadow-lg">
          <span className="text-5xl">⚓</span>
        </div>
        <h1 className="text-5xl font-black text-gray-900 tracking-wider">
          ANCHOR
        </h1>
        <h1 className="text-5xl font-black text-[#C9A84C] tracking-wider">
          360
        </h1>
        <p className="text-gray-400 text-sm tracking-widest uppercase mt-3">
          The Student Operating System
        </p>
      </div>

      {/* DIVIDER */}
      <div className="w-16 h-1 bg-[#C9A84C] mb-10 rounded"/>

      {/* TAGLINE */}
      <p className="text-gray-500 text-center text-base max-w-xs mb-12 leading-relaxed">
        Connect to the right people, opportunities and solutions — instantly.
      </p>

      {/* LOGIN CARD */}
      <div className="bg-white w-full max-w-xs rounded-2xl shadow-lg p-6 flex flex-col items-center gap-4">
        <p className="text-gray-800 font-bold text-lg">
          Get Started
        </p>
        <p className="text-gray-400 text-sm text-center">
          Sign in with your Google account to continue
        </p>
        <button
          onClick={handleGoogleLogin}
          className="flex items-center gap-3 bg-[#C9A84C] text-white font-bold px-8 py-4 rounded-full text-base hover:bg-[#b8963e] transition-all duration-300 w-full justify-center shadow-md"
        >
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>
      </div>

      {/* BOTTOM */}
      <p className="text-gray-300 mt-10 text-xs tracking-widest uppercase">
        Connect · Solve · Rise
      </p>

    </main>
  )
}