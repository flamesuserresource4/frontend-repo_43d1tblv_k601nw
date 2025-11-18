import ThreeDBackdrop from './ThreeDBackdrop'

function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Marble + lighting backdrop */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-[0.06]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(250,204,21,0.12),transparent_60%)]"></div>
      <div className="absolute inset-x-0 -top-32 h-72 blur-3xl opacity-40 bg-gradient-to-b from-yellow-400/30 to-transparent"></div>

      {/* 3D ambient elements */}
      <ThreeDBackdrop />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-24 text-center">
        <p className="text-yellow-300/80 tracking-[0.35em] text-xs uppercase mb-6">Exclusive Fragrance Membership</p>
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6">
          Welcome to <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500">ELX</span>
        </h1>
        <p className="text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          A private world of rare perfumes, intimate launch events, privileged pricing, and an elite community of connoisseurs.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a href="#join" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-black bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 transition shadow-[0_10px_40px_rgba(234,179,8,0.35)]">
            Join the Membership
          </a>
          <a href="#showcase" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-yellow-200/90 ring-1 ring-yellow-500/30 hover:bg-yellow-500/10 transition">
            Explore Collection
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
