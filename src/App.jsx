import { useState, useEffect } from 'react'
import heroBg from './assets/image.png'
import poster from './assets/POSTER(with names).png'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Characters', href: '#characters' },
  { label: 'Gameplay', href: '#gameplay' },
]

const FEATURES = [
  {
    title: 'Physics-Based Knockback',
    desc: 'Damage increases knockback vulnerability instead of reducing health. Every hit raises the stakes.',
    icon: '💥',
  },
  {
    title: 'Fast-Paced Combat',
    desc: 'Aerial movement, dodging, and precise positioning define every fight in the sky arenas.',
    icon: '⚔️',
  },
  {
    title: 'Weapon-Based Fighting',
    desc: 'Wield unique weapons with distinct attack patterns. Master your arsenal to dominate.',
    icon: '🗡️',
  },
  {
    title: 'Multiplayer Battles',
    desc: 'Up to 4 players compete in local and online free-for-all matches.',
    icon: '👥',
  },
  {
    title: 'Dynamic Arenas',
    desc: 'Fight on floating platforms suspended by ancient runes high above the clouds.',
    icon: '🏟️',
  },
  {
    title: 'Competitive Play',
    desc: 'Designed for both casual fun and competitive mastery with deep skill expression.',
    icon: '🏆',
  },
]

const CHARACTERS = [
  { name: 'Zeus', role: 'Thunder God', color: 'from-gold-500 to-gold-600', accent: 'bg-gold-500' },
  { name: 'Poseidon', role: 'Sea Lord', color: 'from-teal-400 to-teal-600', accent: 'bg-teal-400' },
  { name: 'Athena', role: 'War Goddess', color: 'from-ember-400 to-ember-600', accent: 'bg-ember-400' },
  { name: 'Ares', role: 'God of War', color: 'from-red-600 to-red-800', accent: 'bg-red-600' },
  { name: 'Hephaestus', role: 'Forge Master', color: 'from-orange-500 to-orange-700', accent: 'bg-orange-500' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [downloadCount, setDownloadCount] = useState(null)
  const [apkUrl, setApkUrl] = useState(null)

  useEffect(() => {
    fetch('https://api.github.com/repos/gabbyygab/skyclashWebpage/releases/tags/v1.0.0.0')
      .then((r) => r.json())
      .then((data) => {
        const apk = data.assets?.find((a) => a.name.endsWith('.apk'))
        if (apk) {
          setDownloadCount(apk.download_count)
          setApkUrl(apk.browser_download_url)
        }
      })
      .catch(() => {})
  }, [])

  const handleDownload = () => {
    if (!apkUrl) return
    const a = document.createElement('a')
    a.href = apkUrl
    a.download = 'SkyClashArena.apk'
    a.style.display = 'none'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  return (
    <div className="min-h-screen bg-stars">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-950/90 backdrop-blur-lg border-b border-gold-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="#home" className="font-heading font-bold text-xl sm:text-2xl text-gold-400 tracking-wider">
            SKYCLASH
          </a>
          <div className="hidden md:flex gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold-400 after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#download"
              className="hidden sm:inline-flex bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-sm px-5 py-2 rounded-lg transition-colors"
            >
              Download
            </a>
            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-gold-400 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="md:hidden mobile-menu-enter bg-navy-950/95 backdrop-blur-lg border-t border-navy-700/50 px-4 pb-4 pt-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-gray-300 hover:text-gold-400 transition-colors font-medium border-b border-navy-800/50 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#download"
              onClick={() => setMenuOpen(false)}
              className="mt-3 block text-center bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-sm px-5 py-3 rounded-lg transition-colors"
            >
              Download
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/50 via-navy-950/70 to-navy-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-gold-500/5 via-transparent to-teal-400/5" />
        <img
          src={heroBg}
          alt="SkyClash Arena of Legends"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-35"
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-tight animate-fade-in-up">
            <span className="animate-shimmer">SKY</span>CLASH
          </h1>
          <p className="font-heading text-lg sm:text-2xl md:text-3xl text-gold-500/90 mt-2 tracking-[0.2em] animate-fade-in-up-delay-1">
            ARENA OF LEGENDS
          </p>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
            A fast-paced 2D platform fighting game where warriors clash on floating arenas high above the clouds.
            Launch your opponents off the stage and become the last fighter standing.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up-delay-3">
            <a
              href="#download"
              className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40 hover:scale-105"
            >
              Download APK
            </a>
            <a
              href="#characters"
              className="border-2 border-teal-400 text-teal-400 hover:bg-teal-400/10 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all hover:scale-105"
            >
              Meet the Champions
            </a>
          </div>
        </div>
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gold-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white">
              The <span className="text-gold-400">Legend</span> Awaits
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mt-4 mb-6 rounded-full" />
            <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
              In a mythical sky realm known as the <span className="text-teal-400 font-semibold">Aether Heights</span>,
              warriors from different lands are summoned to compete in the legendary SkyClash Tournament.
              These fighters, known as Skybound Champions, battle to prove their strength, agility, and combat mastery.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
              The floating arenas are ancient battlegrounds suspended by powerful runes. Falling from these platforms
              means being cast back into the clouds below. Only the most skilled warrior can survive the chaos and
              earn the title of <span className="text-gold-400 font-semibold">Arena Legend</span>.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Instead of traditional health depletion, players accumulate damage percentages that increase the
              knockback force they receive. As damage rises, every hit becomes more dangerous — making
              positioning and timing critical to survival.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-gold-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />
            <img
              src={poster}
              alt="SkyClash Poster"
              className="relative rounded-2xl shadow-2xl shadow-navy-950/50 w-full transition-transform group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      </div>

      {/* Features */}
      <section id="features" className="py-16 sm:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-900/40" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white">
              Game <span className="text-teal-400">Features</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mt-4 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="card-glow bg-navy-800/60 border border-navy-700/50 rounded-2xl p-5 sm:p-6 hover:border-gold-500/40 transition-all group hover:-translate-y-1"
              >
                <span className="text-3xl sm:text-4xl mb-3 sm:mb-4 block">{f.icon}</span>
                <h3 className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-gold-400 transition-colors">
                  {f.title}
                </h3>
                <p className="text-gray-400 mt-2 leading-relaxed text-sm sm:text-base">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-teal-400/30 to-transparent" />
      </div>

      {/* Characters */}
      <section id="characters" className="py-16 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white">
              Skybound <span className="text-gold-400">Champions</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mt-4 mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
              Choose your champion and master their unique combat style. More fighters coming soon.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
            {CHARACTERS.map((c) => (
              <div
                key={c.name}
                className="card-glow w-[calc(50%-6px)] lg:w-[calc(25%-18px)] bg-navy-800/60 border border-navy-700/50 rounded-2xl overflow-hidden hover:border-gold-500/40 transition-all group hover:-translate-y-1"
              >
                <div className={`h-36 sm:h-56 bg-gradient-to-br ${c.color} flex items-center justify-center relative`}>
                  <div className="absolute inset-0 bg-navy-950/30 group-hover:bg-navy-950/20 transition-colors" />
                  <div className="relative text-center">
                    <svg className="w-10 h-10 sm:w-16 sm:h-16 text-white/40 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <p className="text-white/50 text-xs sm:text-sm mt-1 sm:mt-2 font-medium">Coming Soon</p>
                  </div>
                </div>
                <div className="p-3 sm:p-5">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${c.accent}`} />
                    <h3 className="font-heading font-bold text-sm sm:text-lg text-white group-hover:text-gold-400 transition-colors">
                      {c.name}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">{c.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      </div>

      {/* Gameplay */}
      <section id="gameplay" className="py-16 sm:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-900/40" />
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white">
              How to <span className="text-teal-400">Play</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mt-4 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { step: '01', title: 'Fight', text: 'Use light attacks, heavy attacks, aerial strikes, and weapon-based abilities to hit your opponents.' },
              { step: '02', title: 'Damage', text: 'As damage percentage rises, opponents become more vulnerable to knockback — every hit matters more.' },
              { step: '03', title: 'Launch', text: 'Send opponents flying off the floating arena to score a knockout. Last fighter standing wins!' },
            ].map((item) => (
              <div key={item.step} className="text-center bg-navy-800/40 border border-navy-700/30 rounded-2xl p-6 sm:p-8 hover:border-teal-400/30 transition-all group">
                <span className="font-heading text-4xl sm:text-5xl font-black text-gold-500/25 group-hover:text-gold-500/40 transition-colors">{item.step}</span>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-white mt-2 group-hover:text-teal-400 transition-colors">{item.title}</h3>
                <p className="text-gray-400 mt-3 leading-relaxed text-sm sm:text-base">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="py-16 sm:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/50 to-navy-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-gold-500/5 via-transparent to-teal-400/5" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white">
            Ready to <span className="text-gold-400">Clash</span>?
          </h2>
          <p className="text-gray-300 mt-4 max-w-xl mx-auto text-base sm:text-lg">
            Download SkyClash: Arena of Legends and prove your worth in the Aether Heights.
            Available on Android.
          </p>
          <div className="mt-8 sm:mt-10 flex justify-center">
            <button
              onClick={handleDownload}
              disabled={!apkUrl}
              className="animate-pulse-glow bg-gold-500 hover:bg-gold-600 disabled:opacity-50 disabled:cursor-not-allowed text-navy-950 font-bold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-xl transition-all hover:scale-105 inline-flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 2.232l-1.986 3.45A7.963 7.963 0 0012 4.5a7.96 7.96 0 00-3.537.818L6.477 1.868a.398.398 0 00-.546-.146.401.401 0 00-.146.547l1.97 3.42A8.427 8.427 0 003.5 12.5h17a8.427 8.427 0 00-4.255-6.447l1.97-3.42a.398.398 0 00-.146-.547.398.398 0 00-.546.146zM8.5 10.5a1 1 0 110-2 1 1 0 010 2zm7 0a1 1 0 110-2 1 1 0 010 2zM3.5 13.5v7a1 1 0 001 1h1v3a1.5 1.5 0 003 0v-3h5v3a1.5 1.5 0 003 0v-3h1a1 1 0 001-1v-7h-15zm-2 0a1.5 1.5 0 013 0v5a1.5 1.5 0 01-3 0v-5zm19 0a1.5 1.5 0 013 0v5a1.5 1.5 0 01-3 0v-5z" />
              </svg>
              Download APK
            </button>
          </div>
          <div className="mt-4 flex justify-center gap-6 text-sm text-gray-500">
            <span>Version 1.0.0.0</span>
            <span>&bull;</span>
            <span>176 MB</span>
            <span>&bull;</span>
            <span>Android</span>
            {downloadCount !== null && (
              <>
                <span>&bull;</span>
                <span>{downloadCount.toLocaleString()} downloads</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-navy-700/40 pt-8 sm:pt-10 pb-6 sm:pb-8 px-4 bg-navy-950/80">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-heading font-bold text-lg sm:text-xl text-gold-400 tracking-wider">SKYCLASH</p>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">Arena of Legends &copy; 2026</p>
          </div>
          <div className="text-center md:text-right text-xs sm:text-sm text-gray-500 space-y-1">
            <p>Game Leader &amp; Programmer: <span className="text-gray-400">Al Christian Francisco</span></p>
            <p>Graphic Designer &amp; Asst. Programmer: <span className="text-gray-400">Stephanie Gwen Padel</span></p>
            <p>Researcher: <span className="text-gray-400">John Michael Carlos</span></p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-navy-800/60 text-center text-xs text-gray-600">
          Built with Unity &bull; 2D Platform Fighter &bull; Android
        </div>
      </footer>
    </div>
  )
}

export default App
