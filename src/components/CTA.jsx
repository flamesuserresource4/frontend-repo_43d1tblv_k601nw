function CTA() {
  return (
    <section id="join" className="relative bg-neutral-950 py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 -top-16 h-40 bg-gradient-to-b from-yellow-500/10 to-transparent blur-2xl"></div>
      </div>
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl text-white font-light mb-4">Join the Membership</h2>
        <p className="text-neutral-300 mb-8">Entrance is selective. Request an invitation to access ELX privileges, rare editions, and VIP experiences.</p>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 justify-center">
          <input type="email" required placeholder="Your elite email"
            className="w-full sm:w-96 px-4 py-3 rounded-full bg-black/60 border border-yellow-500/20 text-yellow-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/50" />
          <button className="inline-flex items-center justify-center rounded-full px-6 py-3 text-black bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 transition shadow-[0_10px_40px_rgba(234,179,8,0.35)]">
            Request Invite
          </button>
        </form>
        <p className="text-xs text-neutral-500 mt-4">By requesting, you agree to our private terms of membership.</p>
      </div>
    </section>
  )
}

export default CTA
