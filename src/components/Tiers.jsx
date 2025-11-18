function TierCard({ title, price, perks, accent = 'from-yellow-400 to-amber-500' }) {
  return (
    <div className="relative rounded-2xl bg-neutral-900/60 border border-yellow-500/10 overflow-hidden">
      <div className={`absolute -inset-0.5 bg-gradient-to-b ${accent} opacity-20 blur-2xl`}></div>
      <div className="relative p-8">
        <div className="flex items-baseline justify-between mb-6">
          <h3 className="text-xl text-yellow-100 font-medium tracking-wide">{title}</h3>
          <span className="text-yellow-300 text-2xl">{price}</span>
        </div>
        <ul className="space-y-3 text-neutral-300">
          {perks.map((p, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 shadow-[0_0_20px_rgba(234,179,8,0.6)]"></span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <a href="#join" className="mt-8 inline-flex w-full justify-center rounded-full px-6 py-3 text-black bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 transition shadow-[0_10px_40px_rgba(234,179,8,0.35)]">
          Select
        </a>
      </div>
    </div>
  )
}

function Tiers() {
  return (
    <section id="tiers" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(250,204,21,0.08),transparent_60%)]"></div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-white font-light">Membership Tiers</h2>
          <p className="text-neutral-300 mt-3">Choose your level of access to the ELX world.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <TierCard
            title="Essence"
            price="$39/mo"
            perks={[
              'Monthly curated scent drops',
              'Member-only newsletter',
              'Priority shop access',
            ]}
            accent="from-yellow-300 to-amber-400"
          />
          <TierCard
            title="Reserve"
            price="$99/mo"
            perks={[
              'Early access to limited releases',
              'VIP tasting invitations',
              'Privileged event pricing',
              'Complimentary concierge support',
            ]}
            accent="from-yellow-400 to-amber-500"
          />
          <TierCard
            title="Private Collection"
            price="$249/mo"
            perks={[
              'Invite-only couture blends',
              'Black-tie launch galas',
              'Exclusive atelier access',
              'White-glove personal curation',
            ]}
            accent="from-amber-400 to-yellow-600"
          />
        </div>
      </div>
    </section>
  )
}

export default Tiers
