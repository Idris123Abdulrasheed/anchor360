'use client'
import { supabase } from './lib/supabase'
import { useState } from 'react'

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)

  const handleGoogleLogin = async () => {
    setIsLoading(true)
    try {
      await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin + '/dashboard'
        }
      })
    } catch (error) {
      console.error(error)
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#f8f4f0] flex items-center justify-center relative overflow-hidden">
      
      {/* Premium Marble Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1582564280000-5e2c2e5f5f5f')`
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(#d4c4a8_1px,transparent_1px)] bg-[length:50px_50px] opacity-40"></div>

      <div className="relative z-10 w-full max-w-md mx-auto px-6 py-12">
        
        {/* Top Bar - Matching your new image */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#C15D2E] rounded-full flex items-center justify-center">
              <span className="text-3xl">⚓</span>
            </div>
            <span className="font-bold text-2xl text-gray-900">Anchor 360</span>
          </div>
          <span className="text-sm font-medium text-gray-600">Login</span>
        </div>

        {/* Main Card - Clean & Premium */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 border border-amber-100">
          
          {/* Large Anchor Logo */}
          <div className="mx-auto w-28 h-28 bg-gradient-to-br from-[#C15D2E] to-[#8B3E1F] rounded-full flex items-center justify-center mb-8 shadow-inner">
            <span className="text-7xl drop-shadow-md">⚓</span>
          </div>

          <h1 className="text-4xl font-bold text-center text-gray-900 mb-1">Anchor 360</h1>
          <p className="text-center text-[#C15D2E] font-semibold tracking-widest text-sm mb-8">
            THE STUDENT OPERATING SYSTEM
          </p>

          <p className="text-center text-gray-700 text-[17px] leading-relaxed mb-10 px-4">
            Connect to the right people, opportunities and solutions.
          </p>

          {/* Google Button - One Line + Hover + Loading */}
          <button
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full bg-white border-2 border-gray-200 hover:border-[#C15D2E] active:scale-[0.985] transition-all duration-200 py-4 px-6 rounded-2xl flex items-center justify-center gap-3 text-lg font-medium text-gray-800 shadow-sm hover:shadow-md group"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-gray-400 border-t-gray-800 rounded-full animate-spin" />
            ) : (
              <img 
                src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" 
                alt="Google" 
                className="w-6 h-6"
              />
            )}
            <span>{isLoading ? "Signing in..." : "Login with Google"}</span>
          </button>
        </div>

        {/* Footer */}
        <div className="flex justify-center gap-6 text-xs text-gray-500 mt-10">
          <a href="#" className="hover:text-gray-700 transition-colors">Terms</a>
          <a href="#" className="hover:text-gray-700 transition-colors">Privacy</a>
          <a href="#" className="hover:text-gray-700 transition-colors">Contact</a>
        </div>

        <p className="text-center text-[10px] text-gray-400 mt-8 tracking-[2px] uppercase">
          CONNECT • SOLVE • RISE
        </p>
      </div>
    </main>
  )
}