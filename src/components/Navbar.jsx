import { useState } from 'react'

function ELXLogo() {
  return (
    <div className="relative flex items-center">
      <svg width="40" height="40" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef3c7"/>
            <stop offset="40%" stopColor="#f59e0b"/>
            <stop offset="100%" stopColor="#d97706"/>
          </linearGradient>
          <filter id="bevel" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur"/>
            <feOffset in="blur" dx="0" dy="1" result="offset"/>
            <feSpecularLighting in="blur" surfaceScale="3" specularConstant="0.65" specularExponent="20" lightingColor="#ffffff" result="spec">
              <fePointLight x="-20" y="-10" z="40"/>
            </feSpecularLighting>
            <feComposite in="spec" in2="SourceAlpha" operator="in" result="specOut"/>
            <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0"/>
          </filter>
        </defs>
        <rect x="2" y="2" width="60" height="60" rx="14" fill="#0a0a0a" stroke="url(#goldGrad)" strokeWidth="1.5"/>
        <g filter="url(#bevel)">
          <path d="M16 44 V20 H36" fill="none" stroke="url(#goldGrad)" strokeWidth="3.5" strokeLinecap="round"/>
          <path d="M36 20 V44 H16" fill="none" stroke="url(#goldGrad)" strokeWidth="3.5" strokeLinecap="round" opacity="0.85"/>
          <path d="M44 20 L52 28 M52 20 L44 28" stroke="url(#goldGrad)" strokeWidth="3.5" strokeLinecap="round"/>
        </g>
      </svg>
      <span className="ml-3 text-xl tracking-[0.35em] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500">ELX</span>
    </div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-black/50 border-b border-yellow-500/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ELXLogo />
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#tiers" className="text-neutral-300 hover:text-yellow-300 transition-colors">Membership</a>
          <a href="#showcase" className="text-neutral-300 hover:text-yellow-300 transition-colors">Fragrances</a>
          <a href="#perks" className="text-neutral-300 hover:text-yellow-300 transition-colors">Benefits</a>
          <a href="#join" className="text-black bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 px-4 py-2 rounded-full font-medium shadow-[0_4px_25px_rgba(234,179,8,0.35)]">Join</a>
        </nav>
        <button aria-label="menu" onClick={() => setOpen(!open)} className="md:hidden text-yellow-300">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-yellow-500/10 bg-black/70">
          <div className="px-6 py-4 flex flex-col gap-3">
            <a href="#tiers" className="text-neutral-200">Membership</a>
            <a href="#showcase" className="text-neutral-200">Fragrances</a>
            <a href="#perks" className="text-neutral-200">Benefits</a>
            <a href="#join" className="text-black text-center bg-gradient-to-r from-yellow-400 to-amber-500 px-4 py-2 rounded-full font-medium">Join</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
