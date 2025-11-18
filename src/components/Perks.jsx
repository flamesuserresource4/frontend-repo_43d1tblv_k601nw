function Perks() {
  const perks = [
    {
      title: 'VIP Events',
      desc: 'Intimate launch previews and members-only soirées in iconic venues.',
    },
    {
      title: 'Privileged Pricing',
      desc: 'Preferential rates on rare editions and private blends.',
    },
    {
      title: 'Elite Community',
      desc: 'Access to a circle of discerning collectors and creators.',
    },
    {
      title: 'Concierge',
      desc: 'White-glove support for sourcing, gifting, and private tastings.',
    },
  ]

  return (
    <section id="perks" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(250,204,21,0.08),transparent_60%)]"></div>
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-white font-light">Members-Only Privileges</h2>
          <p className="text-neutral-300 mt-3">More than a membership — a private entrance to the world of ELX.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {perks.map((p) => (
            <div key={p.title} className="rounded-2xl p-6 bg-neutral-900/60 border border-yellow-500/10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 mb-4 opacity-70"></div>
              <h3 className="text-yellow-100 mb-2">{p.title}</h3>
              <p className="text-neutral-300 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Perks
