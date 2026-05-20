'use client'
import { supabase } from './lib/supabase'

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
    <main className="min-h-screen bg-[#f8f4f0] flex items-center justify-center relative overflow-hidden">
      
      {/* Rich Marble Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4c4a8_0.8px,transparent_1px)] bg-[length:40px_40px] opacity-40"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582564280000-5e2c2e5f5f5f')] bg-cover bg-center mix-blend-overlay opacity-30"></div>

      <div className="relative z-10 w-full max-w-md mx-auto px-6 py-12">
        
        {/* Top Logo */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-amber-700 to-amber-900 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl">⚓</span>
            </div>
            <span className="font-bold text-2xl text-gray-900">Anchor 360</span>
          </div>
          <span className="text-sm font-medium text-gray-600">Login</span>
        </div>

        {/* Main Premium Card */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-amber-100">
          
          {/* Large Anchor */}
          <div className="mx-auto w-28 h-28 bg-gradient-to-br from-amber-700 via-amber-800 to-amber-900 rounded-full flex items-center justify-center mb-8 shadow-inner ring-8 ring-amber-100">
            <span className="text-7xl drop-shadow-md">⚓</span>
          </div>

          <h1 className="text-4xl font-bold text-center text-gray-900 mb-1 tracking-tight">
            Anchor 360
          </h1>
          <p className="text-center text-amber-800 font-medium tracking-[3px] text-sm mb-8">
            THE STUDENT OPERATING SYSTEM
          </p>

          <p className="text-center text-gray-700 text-[17px] leading-relaxed mb-10">
            The best place to instantly connect to the right people, opportunities and solutions.
          </p>

          {/* Google Button */}
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-white border border-gray-300 hover:border-gray-400 active:scale-[0.985] transition-all duration-200 py-4 px-6 rounded-2xl flex items-center justify-center gap-3 text-lg font-medium text-gray-800 shadow-sm hover:shadow"
          >
            <img 
              src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" 
              alt="Google" 
              className="w-6 h-6"
            />
            <span>Continue with Google</span>
          </button>
        </div>

        {/* Footer */}
        <div className="flex justify-center gap-6 text-xs text-gray-500 mt-10">
          <a href="#" className="hover:text-gray-700 transition-colors">Terms</a>
          <a href="#" className="hover:text-gray-700 transition-colors">Privacy</a>
          <a href="#" className="hover:text-gray-700 transition-colors">Contact</a>
        </div>

        <p className="text-center text-[10px] text-gray-400 mt-8 tracking-widest">
          CONNECT • SOLVE • RISE
        </p>
      </div>
    </main>
  )
}
