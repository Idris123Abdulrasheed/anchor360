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
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <p className="text-yellow-400 text-sm font-bold tracking-widest uppercase mb-4">
        The Student Operating System
      </p>
      <h1 className="text-7xl font-black text-center mb-2">
        ANCHOR
      </h1>
      <h1 className="text-7xl font-black text-yellow-400 text-center mb-8">
        360
      </h1>
      <p className="text-gray-400 text-xl text-center max-w-lg mb-12">
        Connect to the right people, opportunities and solutions — instantly.
      </p>
      <button
        onClick={handleGoogleLogin}
        className="flex items-center gap-3 bg-white text-black font-bold px-10 py-4 text-lg hover:bg-gray-100 transition"
      >
        <img
          src="https://www.google.com/favicon.ico"
          alt="Google"
          className="w-6 h-6"
        />
        Continue with Google
      </button>
      <p className="text-gray-600 mt-8 text-sm tracking-widest uppercase">
        Connect · Solve · Rise
      </p>
    </main>
  )
}