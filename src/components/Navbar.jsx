import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-black/50 border-b border-yellow-500/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-600 ring-2 ring-yellow-500/30 shadow-[0_0_35px_rgba(234,179,8,0.4)]"></div>
          <span className="text-xl tracking-[0.35em] font-semibold text-yellow-300">ELX</span>
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
