function Showcase() {
  const items = [
    {
      name: 'Noir Oud',
      img: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1200&auto=format&fit=crop',
      note: 'Black cardamom • Saffron • Oud wood',
    },
    {
      name: 'Aurum 21',
      img: 'https://images.unsplash.com/photo-1608570000000-0e18e1a59b2a?q=80&w=1200&auto=format&fit=crop',
      note: 'Golden amber • Tonka • Vanilla absolute',
    },
    {
      name: 'Côte Blanche',
      img: 'https://images.unsplash.com/photo-1614199489936-59ffbcd1c1f8?q=80&w=1200&auto=format&fit=crop',
      note: 'Sea salt • Calabrian bergamot • White musk',
    },
  ]

  return (
    <section id="showcase" className="relative bg-neutral-950 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-white font-light">Signature Collection</h2>
          <p className="text-neutral-300 mt-3">A glimpse into our private library of scents.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.name} className="group relative overflow-hidden rounded-2xl border border-yellow-500/10 bg-gradient-to-b from-neutral-900 to-neutral-950">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={it.img} alt={it.name} className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition duration-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 p-6">
                <h3 className="text-xl text-white">{it.name}</h3>
                <p className="text-sm text-yellow-200/80">{it.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Showcase
