import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Tiers from './components/Tiers'
import Showcase from './components/Showcase'
import Perks from './components/Perks'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* soft vignette and marble texture */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_100%)]"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] mix-blend-overlay opacity-[0.05]"></div>
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <Tiers />
        <Showcase />
        <Perks />
        <CTA />
      </main>

      <footer className="relative border-t border-yellow-500/10 bg-black/80">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">© {new Date().getFullYear()} ELX Club — Private. Discreet. Elite.</p>
          <div className="flex items-center gap-6 text-neutral-500 text-sm">
            <a href="#tiers" className="hover:text-yellow-300">Membership</a>
            <a href="#showcase" className="hover:text-yellow-300">Collection</a>
            <a href="#perks" className="hover:text-yellow-300">Privileges</a>
            <a href="#join" className="hover:text-yellow-300">Join</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
