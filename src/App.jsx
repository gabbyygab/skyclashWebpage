import { useState, useEffect, useRef } from 'react'
import heroBg from './assets/image.png'
import logo from './assets/LOGO.png'
import poster from './assets/POSTER(with names).png'
import devAlcf from './assets/al christian.png'
import devSgp from './assets/gwen.png'
import devJmc from './assets/Carlos.png'
import charAres from './assets/ares.jpeg'
import charArtemis from './assets/Artemis.jpeg'
import charAthena from './assets/Athena.jpeg'
import charHephaestus from './assets/Hephaestus.png'
import charPoseidon from './assets/Poseidon.png'
import charZeus from './assets/Zeus.jpeg'
import iconPowerups from './assets/powerups.png'
import trailerVideo from './assets/SkyClash_ Arena of Legends.mp4'
import arenaAres from './assets/Ares_scene.png'
import arenaJungle from './assets/jungle_scene.png'
import arenaInferno from './assets/inferno_scene.png'
import arenaAtlantis from './assets/atlantis_scene.png'
import arenaOlympus from './assets/olympus_scne.png'
import arenaSky from './assets/sky_scene.png'
const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Trailer', href: '#trailer' },
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Mechanics', href: '#gameplay' },
  { label: 'Characters', href: '#characters' },
  { label: 'Arenas', href: '#arenas' },
  { label: 'Team', href: '#team' },
]

const DEVELOPERS = [
  {
    id: 'alcf',
    name: 'Al Christian Francisco',
    role: 'Game Leader & Programmer',
    email: 'alchristianfrancisco13@gmail.com',
    phone: '09398507188',
    photo: devAlcf,
    gradientFrom: '#d4a44a',
    gradientTo: '#c8952e',
    border: 'border-gold-500/40',
    accent: 'text-gold-400',
    accentBg: 'bg-gold-500/15',
    ring: 'ring-gold-500/50',
    glow: 'shadow-gold-500/20',
    intro: "Hi! I'm Al Christian, a 3rd year BSIT Web and Mobile Application Development student and the project lead of SkyClash. I designed the physics-based knockback system and oversee the overall game architecture. I love crafting systems that feel both fair and thrilling to master.",
  },
  {
    id: 'sgp',
    name: 'Stephanie Gwen Padel',
    role: 'Graphic Designer & Asst. Programmer',
    email: 'stephaniepdl2@gmail.com',
    phone: '09923243978',
    photo: devSgp,
    gradientFrom: '#3ecadb',
    gradientTo: '#1a8a9e',
    border: 'border-teal-400/40',
    accent: 'text-teal-400',
    accentBg: 'bg-teal-400/15',
    ring: 'ring-teal-400/50',
    glow: 'shadow-teal-400/20',
    intro: "Hey there! I'm Stephanie — artist, designer, and 3rd year BSIT Web and Mobile Application Development student. I shaped the look and feel of SkyClash, from character visuals to UI layouts, and I also lend a hand in programming to keep design and code in perfect harmony.",
  },
  {
    id: 'jmc',
    name: 'John Michael Carlos',
    role: 'Audio Designer',
    email: 'Jmcarlos718@gmail.com',
    phone: '09915256045',
    photo: devJmc,
    gradientFrom: '#e87a3e',
    gradientTo: '#b8521e',
    border: 'border-orange-400/40',
    accent: 'text-orange-400',
    accentBg: 'bg-orange-400/15',
    ring: 'ring-orange-400/50',
    glow: 'shadow-orange-400/20',
    intro: "Hello! I'm John Michael, currently in my 3rd year of BSIT Web and Mobile Application Development and serving as the research backbone of SkyClash. From game design theory to competitor analysis, I make sure every decision the team makes is backed by solid research and player-centered thinking.",
  },
]

const FEATURES = [
  {
    title: 'Health-Based Combat System',
    desc: 'Each player starts with 3 lives represented by hearts on the screen. Defeat opponents by depleting their health to zero through relentless attacks to take a life, and take all 3 lives to win the match!',
    icon: '❤️',
  },
  {
    title: 'Fast-Paced Platform Fighting',
    desc: 'Run, jump, double-jump, and perform aerial attacks across floating platforms in intense, high-speed matches.',
    icon: '⚔️',
  },
  {
    title: 'Unique Hero Abilities & Weapons',
    desc: 'Each hero wields a distinct weapon with signature abilities — from Zeus\'s lightning to Hephaestus\'s forge hammer.',
    icon: '🗡️',
  },
  {
    title: 'Power-Up System',
    desc: 'Collect 5 power-ups randomly appearing in the arena to fill your Powerbar. Once the bar reaches 100%, you can activate a powered-up state to significantly boost your damage output.',
    icon: <img src={iconPowerups} alt="Power-up Icon" className="w-12 h-12 scale-[3.5] origin-center object-contain inline-block drop-shadow-md brightness-150" />,
  },
  {
    title: '2-Player Local Multiplayer',
    desc: 'Challenge a friend via hotspot connection — no internet required. Real-time competitive matches anywhere.',
    icon: '👥',
  },
  {
    title: 'Strategic Arena Design',
    desc: 'Fight on floating platforms in the Aether Heights with layouts designed to reward movement and positioning.',
    icon: '🏟️',
  },
]

const CHARACTERS = [
  {
    name: 'Zeus',
    role: 'King of the Gods',
    weapon: 'Lightning Bolt',
    playstyle: 'Ranged Control',
    background: 'The king of the gods who strikes enemies with powerful lightning attacks.',
    abilities: ['Thunder Strike', 'Chain Lightning', 'Divine Shock'],
    color: 'from-yellow-500 to-amber-700',
    glow: 'rgba(234,179,8,0.4)',
    accent: '#facc15',
    accentClass: 'bg-yellow-400',
    icon: '⚡',
    photo: charZeus,
  },
  {
    name: 'Ares',
    role: 'God of War',
    weapon: 'Spear',
    playstyle: 'Aggressive Melee / Mid-Range',
    background: 'A fierce god of war who dominates close combat with relentless attacks.',
    abilities: ['War Cry', 'Spear Throw', 'Charge of Battle'],
    color: 'from-red-700 to-red-900',
    glow: 'rgba(185,28,28,0.4)',
    accent: '#ef4444',
    accentClass: 'bg-red-600',
    icon: '🔱',
    photo: charAres,
  },
  {
    name: 'Athena',
    role: 'Goddess of Wisdom',
    weapon: 'Shield & Short Sword',
    playstyle: 'Defensive Counter-Attacker',
    background: 'A strategic fighter who excels in blocking and countering enemies.',
    abilities: ['Shield Bash', 'Tactical Insight', 'Spear Thrust'],
    color: 'from-blue-600 to-blue-900',
    glow: 'rgba(37,99,235,0.4)',
    accent: '#60a5fa',
    accentClass: 'bg-blue-500',
    icon: '🛡️',
    photo: charAthena,
  },
  {
    name: 'Artemis',
    role: 'Goddess of the Hunt',
    weapon: 'Bow & Arrow',
    playstyle: 'Ranged Sniper',
    background: 'A precise hunter who attacks from a distance with deadly accuracy.',
    abilities: ['Piercing Shot', 'Trap Set', 'Moonlight Dash'],
    color: 'from-emerald-500 to-teal-800',
    glow: 'rgba(16,185,129,0.4)',
    accent: '#34d399',
    accentClass: 'bg-emerald-500',
    icon: '🏹',
    photo: charArtemis,
  },
  {
    name: 'Hephaestus',
    role: 'Forge Master',
    weapon: 'Hammer',
    playstyle: 'Heavy AoE',
    background: 'A powerful blacksmith who uses heavy attacks and molten traps.',
    abilities: ['Forge Slam', 'Molten Trap', 'Hammer Throw'],
    color: 'from-orange-500 to-orange-800',
    glow: 'rgba(249,115,22,0.4)',
    accent: '#fb923c',
    accentClass: 'bg-orange-500',
    icon: '🔨',
    photo: charHephaestus,
  },
  {
    name: 'Poseidon',
    role: 'Ruler of the Seas',
    weapon: 'Trident',
    playstyle: 'Mid-Range Control',
    background: 'The ruler of the seas who controls water to dominate enemies.',
    abilities: ['Tidal Wave', 'Water Spear', 'Ocean Leap'],
    color: 'from-cyan-500 to-cyan-900',
    glow: 'rgba(6,182,212,0.4)',
    accent: '#22d3ee',
    accentClass: 'bg-cyan-400',
    icon: '🔱',
    photo: charPoseidon,
  },
]

const ARENAS = [
  {
    id: 'olympus',
    name: 'Olympus Peak',
    desc: 'The breathtaking pinnacle of the gods, offering intense aerial combat dynamics over majestic marble ruins.',
    image: arenaOlympus,
  },
  {
    id: 'inferno',
    name: 'Inferno Depths',
    desc: 'The scorching volcanic forge where Hephaestus crafts weapons. Features high risk, high reward positioning.',
    image: arenaInferno,
  },
  {
    id: 'atlantis',
    name: 'Atlantis Ruins',
    desc: 'An ancient, mystical sunken temple reclaimed by the sea. Master your jumps to avoid the treacherous depths.',
    image: arenaAtlantis,
  },
  {
    id: 'jungle',
    name: 'The Verdant Wilds',
    desc: 'A dense, overgrown jungle canopy fraught with ancient trees and unpredictable platforms.',
    image: arenaJungle,
  },
  {
    id: 'ares',
    name: 'Ares Colosseum',
    desc: 'A brutal, war-torn arena designed for aggressive, close-quarters combat and relentless strikes.',
    image: arenaAres,
  },
  {
    id: 'sky',
    name: 'Aether Heights',
    desc: 'A divine floating battleground among the endless clouds with high-altitude platforms emphasizing pure agility.',
    image: arenaSky,
  }
]

const MECHANICS = [
  {
    num: '01',
    title: 'Core Movement',
    desc: 'Run, jump, double-jump, and perform classic, hard, or ultimate attacks across floating platforms. Movement emphasizes agility and positioning for both offense and defense.',
    icon: '🏃',
  },
  {
    num: '02',
    title: 'Combat & Attacks',
    desc: 'Each hero has unique weapons with melee, ranged, and AoE attacks. Chain light, heavy, and aerial attacks into combos. Certain attacks apply knockback to push opponents off the arena.',
    icon: '⚔️',
  },
  {
    num: '03',
    title: 'Health System',
    desc: 'Each player has a health bar that decreases when taking damage. Different attacks deal varying damage. The match ends when a player\'s health reaches zero.',
    icon: '❤️',
  },
  {
    num: '04',
    title: 'Abilities & Skills',
    desc: 'Each hero has three signature abilities with cooldowns — projectiles, AoE attacks, mobility skills, and traps — combinable with basic attacks for powerful combos.',
    icon: '✨',
  },
  {
    num: '05',
    title: 'Power-Up & Ultimate',
    desc: 'Power-ups randomly appear in the arena. Collect 5 power-ups to fill your Powerbar to 100% and unleash your Ultimate Ability — a devastating skill that can turn the tide of battle.',
    icon: '⚡',
  },
  {
    num: '06',
    title: 'Local Multiplayer',
    desc: 'Supports 2-player matches via hotspot connection. One player hosts while the other connects to the same network. No internet access required — play anywhere.',
    icon: '📡',
  },
]

function Reveal({ children, direction = 'up', delay = 0, className = '' }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  const transforms = {
    up: 'translateY(48px)',
    down: 'translateY(-48px)',
    left: 'translateX(-60px)',
    right: 'translateX(60px)',
  }
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : transforms[direction],
        transition: `opacity 0.65s ease-out ${delay}ms, transform 0.65s ease-out ${delay}ms`,
      }}
      className={className}
    >
      {children}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [releases, setReleases] = useState([
    {
      tag: 'v1.0.0.4',
      url: 'https://github.com/gabbyygab/skyclashWebpage/releases/download/v1.0.0.4/SkyClashArena-LATEST.apk',
      count: 0,
      size: '178 MB'
    }
  ])
  const [selectedChar, setSelectedChar] = useState(CHARACTERS[0])
  const [copiedEmail, setCopiedEmail] = useState(null)
  const [copiedPhone, setCopiedPhone] = useState(null)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [currentArenaIdx, setCurrentArenaIdx] = useState(0)
  
  const videoRef = useRef(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    fetch('https://api.github.com/repos/gabbyygab/skyclashWebpage/releases')
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const processed = data.map(release => {
            const apk = release.assets?.find((a) => a.name.endsWith('.apk'))
            return {
              tag: release.tag_name,
              url: apk?.browser_download_url,
              count: apk?.download_count || 0,
              size: apk ? (apk.size / (1024 * 1024)).toFixed(0) + ' MB' : '176 MB'
            }
          }).filter(r => r.url)
          setReleases(processed)
        }
      })
      .catch(() => {})
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDownload = (url) => {
    if (!url) return
    const a = document.createElement('a')
    a.href = url
    a.download = 'SkyClashArena.apk'
    a.style.display = 'none'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  return (
    <div className="min-h-screen bg-stars overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-navy-950/90 backdrop-blur-lg border-b border-gold-500/15">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between h-16">
          <a href="#home" className="flex items-center">
            <img src={logo} alt="SkyClash" className="h-10 sm:h-12 w-auto object-contain" />
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
          <div className="md:hidden mobile-menu-enter bg-navy-950/95 backdrop-blur-lg border-t border-navy-700/50 px-6 sm:px-10 pb-4 pt-2">
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
      <section id="home" className="relative min-h-screen pt-16 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/50 via-navy-950/70 to-navy-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-gold-500/5 via-transparent to-teal-400/5" />
        <img
          src={heroBg}
          alt="SkyClash Arena of Legends"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-35"
        />
        <div className="relative z-10 text-center px-6 sm:px-10 max-w-4xl mx-auto">
          <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-tight animate-fade-in-up">
            <span className="animate-shimmer">SKY</span>CLASH
          </h1>
          <p className="font-heading text-lg sm:text-2xl md:text-3xl text-gold-500/90 mt-2 tracking-[0.2em] animate-fade-in-up-delay-1">
            ARENA OF LEGENDS
          </p>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
            A fast-paced 2D platform fighting game where warriors clash on floating arenas suspended in a mythical sky realm.
            Master your hero, chain powerful combos, and outplay your opponent to claim the title of Arena Legend.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 animate-fade-in-up-delay-2">
            <span className="bg-navy-800/70 border border-gold-500/25 text-gold-400 text-xs font-semibold px-3 py-1.5 rounded-full">2D Platform Fighter</span>
            <span className="bg-navy-800/70 border border-teal-400/25 text-teal-400 text-xs font-semibold px-3 py-1.5 rounded-full">Local Multiplayer (Hotspot)</span>
            <span className="bg-navy-800/70 border border-gray-500/25 text-gray-400 text-xs font-semibold px-3 py-1.5 rounded-full">Android · Built with Unity</span>
          </div>
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

      {/* Trailer */}
      <section id="trailer" className="py-20 sm:py-28 px-6 sm:px-10 lg:px-16 bg-navy-950 relative border-y border-navy-800/60 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <Reveal>
          <div className="text-center mb-10 sm:mb-14">
            <h3 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white">
              Official <span className="text-teal-400">Trailer</span>
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mt-4 mx-auto rounded-full" />
          </div>
          </Reveal>

          <Reveal delay={150}>
          <div
            className={`relative group mx-auto aspect-video rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border bg-navy-900 flex items-center justify-center transition-all duration-500
              ${isVideoPlaying ? 'border-teal-500/30 shadow-[0_0_30px_rgba(45,212,191,0.15)]' : 'border-teal-400/50 shadow-[0_0_40px_rgba(45,212,191,0.3)] hover:border-gold-500/60'}`}
          >
            <div className={`absolute inset-0 bg-gradient-to-r from-teal-500/20 via-transparent to-teal-400/20 blur-2xl transition-opacity duration-700 pointer-events-none ${isVideoPlaying ? 'opacity-0' : 'opacity-100'}`} />
            
            {/* Trailer Video Player Without Default Controls */}
            <video 
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover z-10"
              src={trailerVideo} 
              playsInline
              preload="metadata"
              onPlay={() => setIsVideoPlaying(true)}
              onPause={() => setIsVideoPlaying(false)}
              onEnded={() => setIsVideoPlaying(false)}
              onClick={() => {
                if (videoRef.current) {
                  if (isVideoPlaying) videoRef.current.pause();
                  else videoRef.current.play();
                }
              }}
            >
              Your browser does not support the video tag.
            </video>

            {/* Custom Play/Pause Overlay */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (videoRef.current) {
                  if (isVideoPlaying) videoRef.current.pause();
                  else videoRef.current.play();
                }
              }}
              className={`absolute z-20 flex items-center justify-center rounded-full transition-all duration-300 ${
                isVideoPlaying 
                  ? 'opacity-0 group-hover:opacity-100 w-16 h-16 bg-navy-950/60 backdrop-blur-sm text-white hover:bg-navy-900/80 scale-90 hover:scale-100' 
                  : 'w-24 h-24 bg-teal-500/90 text-navy-950 hover:bg-teal-400 shadow-[0_0_30px_rgba(45,212,191,0.6)] scale-100 hover:scale-110'
              }`}
              aria-label={isVideoPlaying ? "Pause trailer" : "Play trailer"}
            >
              {isVideoPlaying ? (
                <svg className="w-8 h-8 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                <svg className="w-10 h-10 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          </div>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 sm:py-28 px-6 sm:px-10 lg:px-16 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <Reveal direction="left">
          <div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white">
              The <span className="text-gold-400">Legend</span> Awaits
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mt-4 mb-6 rounded-full" />
            <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
              In a mythical sky realm known as the <span className="text-teal-400 font-semibold">Aether Heights</span>,
              warriors from different lands are summoned to compete in the legendary SkyClash Tournament.
              These fighters, known as <span className="text-gold-400 font-semibold">Skybound Champions</span>, battle to prove their strength, agility, and combat mastery.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
              The floating arenas serve as battlegrounds where warriors test their combat skills and strategies.
              Only the most skilled fighter can emerge victorious and claim the title of <span className="text-gold-400 font-semibold">Arena Legend</span>.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6 text-sm sm:text-base">
              SkyClash combines a <span className="text-white font-medium">health-based combat system</span> with intense positional strategy — reduce your opponent's health to zero or knock them off the arena to win.
              Charge your Ultimate Ability by collecting power-ups and unleash devastating skills that can turn the tide of any match.
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Genre', value: '2D Platform Fighter' },
                { label: 'Platform', value: 'Android' },
                { label: 'Players', value: '2-Player Competitive' },
                { label: 'Multiplayer', value: 'Local Hotspot' },
                { label: 'Engine', value: 'Unity (2D)' },
                { label: 'Language', value: 'C#' },
              ].map((item) => (
                <div key={item.label} className="bg-navy-800/50 border border-navy-700/40 rounded-xl p-3">
                  <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">{item.label}</p>
                  <p className="text-white text-sm font-semibold mt-0.5">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          </Reveal>
          <Reveal direction="right" delay={100}>
          <div className="relative group">
            <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-gold-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />
            <img
              src={poster}
              alt="SkyClash Poster"
              className="relative rounded-2xl shadow-2xl shadow-navy-950/50 w-full transition-transform group-hover:scale-[1.02]"
            />
          </div>
          </Reveal>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      </div>

      {/* Features */}
      <section id="features" className="py-20 sm:py-28 px-6 sm:px-10 lg:px-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-900/40" />
        <div className="relative max-w-6xl mx-auto">
          <Reveal>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white">
              Game <span className="text-teal-400">Features</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mt-4 mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              Everything that makes SkyClash: Arena of Legends a unique and competitive fighting experience.
            </p>
          </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 90} className="h-full flex flex-col">
              <div
                className="card-glow bg-navy-800/60 border border-navy-700/50 rounded-2xl p-5 sm:p-6 hover:border-gold-500/40 transition-all group hover:-translate-y-1 flex-1 flex flex-col"
              >
                <span className="text-3xl sm:text-4xl mb-3 sm:mb-4 block">{f.icon}</span>
                <h3 className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-gold-400 transition-colors">
                  {f.title}
                </h3>
                <p className="text-gray-400 mt-2 leading-relaxed text-sm sm:text-base">{f.desc}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="h-px bg-gradient-to-r from-transparent via-teal-400/30 to-transparent" />
      </div>

      {/* Characters */}
      <section id="characters" className="py-20 sm:py-28 px-6 sm:px-10 lg:px-16 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Section Header */}
          <Reveal>
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white">
              Skybound <span className="text-gold-400">Champions</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mt-4 mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Six legendary heroes, each with a unique weapon, playstyle, and signature abilities. Choose your champion and master their combat style.
            </p>
          </div>
          </Reveal>

          {/* Large Character Preview */}
          <Reveal delay={100}>
          {selectedChar && (
            <div className="max-w-4xl mx-auto bg-navy-800/40 border border-navy-700/50 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl transition-all duration-300">
              {/* Hero banner / Visual side */}
              <div className="md:w-1/3 min-h-[300px] relative overflow-hidden bg-navy-900 border-b md:border-b-0 md:border-r border-navy-700/50">
                <img 
                  src={selectedChar.photo} 
                  alt={selectedChar.name} 
                  className="absolute inset-0 w-full h-full object-cover object-top scale-[1.18] hover:scale-[1.22] transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-800 to-transparent md:hidden" />
              </div>

              {/* Info Details side */}
              <div className="p-5 sm:p-8 md:w-2/3 flex flex-col justify-center">
                <div className="mb-4">
                  <h3 className="font-heading font-black text-3xl sm:text-4xl text-white drop-shadow-md">{selectedChar.name}</h3>
                  <p className="text-base sm:text-lg font-medium mt-1" style={{ color: selectedChar.accent }}>{selectedChar.role}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-3 py-1 rounded-full font-semibold" style={{ backgroundColor: selectedChar.accent + '22', color: selectedChar.accent }}>
                    Wields: {selectedChar.weapon}
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-navy-700/60 text-gray-300 font-medium border border-navy-600/50">
                    Playstyle: {selectedChar.playstyle}
                  </span>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-6">{selectedChar.background}</p>

                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: selectedChar.accent }}>Signature Abilities</p>
                  <div className="flex flex-col gap-2.5">
                    {selectedChar.abilities.map((ab, i) => (
                      <div key={ab} className="flex items-center gap-3 bg-navy-900/50 rounded-xl px-4 py-2.5 border border-navy-700/40 hover:border-navy-600/60 transition-colors">
                        <span className="font-heading font-black text-lg w-5 text-center" style={{ color: selectedChar.accent + '66' }}>{i + 1}</span>
                        <span className="text-sm text-gray-200 font-semibold">{ab}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          </Reveal>


          <Reveal delay={200}>
          <div className="font-heading text-center text-[10px] sm:text-xs font-semibold text-gray-300 tracking-[0.2em] uppercase mb-6 sm:mb-8">
            Select A Champion
          </div>

          {/* Grid Selector matching Reference 2 */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-4">
            {CHARACTERS.map((c) => {
              const isActive = selectedChar?.name === c.name;
              return (
                <div
                  key={c.name}
                  onClick={() => setSelectedChar(c)}
                  className={`relative w-28 sm:w-32 md:w-36 lg:w-44 flex flex-col cursor-pointer transition-all duration-300 rounded-xl overflow-hidden border-2 ${isActive ? 'border-gold-500 shadow-[0_0_15px_rgba(212,164,74,0.4)] scale-[1.02] sm:scale-105 z-10' : 'border-navy-800 hover:border-navy-600 scale-100'}`}
                >
                  {/* Image container */}
                  <div className={`relative aspect-square overflow-hidden bg-navy-950 border-b-2 ${isActive ? 'border-gold-500/50' : 'border-navy-800'}`}>
                    <img 
                      src={c.photo} 
                      alt={c.name} 
                      className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-500 ${isActive ? 'scale-110 brightness-100' : 'scale-100 brightness-[0.4] group-hover:brightness-[0.6]'}`} 
                    />
                    
                    {/* Simulated Intricate Top Border glow from Reference Image */}
                    <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-b from-navy-900/50 to-transparent pointer-events-none" />
                  </div>
                  
                  {/* Bottom Text bar */}
                  <div className={`py-4 sm:py-5 flex items-center justify-center transition-colors duration-300 ${isActive ? 'bg-[#060c18]' : 'bg-[#060b14]'}`}>
                    <h3 className={`font-heading font-black text-[10px] sm:text-xs md:text-sm tracking-widest uppercase transition-colors ${isActive ? 'text-gold-400 drop-shadow-md' : 'text-[#7a889c]'}`}>
                      {c.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
          </Reveal>

        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      </div>

      {/* Gameplay Mechanics */}
      <section id="gameplay" className="py-20 sm:py-28 px-6 sm:px-10 lg:px-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-900/40" />
        <div className="relative max-w-6xl mx-auto">
          <Reveal>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white">
              Gameplay <span className="text-teal-400">Mechanics</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mt-4 mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              Master every system to outplay your opponent and claim victory in the Aether Heights.
            </p>
          </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-16">
            {MECHANICS.map((m, i) => (
              <Reveal key={m.num} delay={i * 80} className="h-full flex flex-col">
              <div className="bg-navy-800/40 border border-navy-700/30 rounded-2xl p-5 sm:p-6 hover:border-teal-400/30 transition-all group flex-1 flex flex-col">
                <div className="flex items-start gap-4">
                  <div>
                    <span className="font-heading text-3xl font-black text-gold-500/25 group-hover:text-gold-500/40 transition-colors leading-none block">{m.num}</span>
                    <span className="text-2xl block mt-1">{m.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-teal-400 transition-colors">{m.title}</h3>
                    <p className="text-gray-400 mt-2 leading-relaxed text-sm">{m.desc}</p>
                  </div>
                </div>
              </div>
              </Reveal>
            ))}
          </div>

          {/* How to Win */}
          <Reveal delay={100}>
          <div className="bg-navy-800/30 border border-gold-500/20 rounded-2xl p-6 sm:p-10">
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-white text-center mb-8">
              How to <span className="text-gold-400">Win</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                { step: '01', title: 'Attack', text: 'Use light, heavy, and aerial attacks to deal damage. Chain combos with hero abilities for maximum effect.' },
                { step: '02', title: 'Strategize', text: 'Control power-ups, manage cooldowns, position wisely, and collect 5 power-ups to fill your Powerbar to 100% and unleash your Ultimate Ability.' },
                { step: '03', title: 'Eliminate', text: 'Deplete your opponent\'s health to zero or knock them out of the arena to claim victory and earn the Arena Legend title.' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <span className="font-heading text-5xl sm:text-6xl font-black text-gold-500/20 block">{item.step}</span>
                  <h4 className="font-heading font-bold text-lg text-white mt-1 mb-2">{item.title}</h4>
                  <p className="text-gray-400 leading-relaxed text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Arenas */}
      <section id="arenas" className="py-20 sm:py-28 px-6 sm:px-10 lg:px-16 bg-navy-950 relative border-t border-navy-800/60 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-teal-500/5 opacity-50" />
        <div className="relative max-w-6xl mx-auto">
          <Reveal>
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-[#d8eaef] tracking-widest uppercase">
              Battle <span className="text-teal-400 drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]">Arenas</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mt-4 sm:mt-5 mx-auto rounded-full" />
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed relative z-20">
              We currently feature <strong className="text-gold-400 tracking-wider">6 UNIQUE BATTLE ARENAS</strong>. Fight across breathtaking environments in the sky realm. Each arena challenges your positioning and movement differently.
            </p>
          </div>
          </Reveal>
          
          {/* 3D Fan Carousel */}
          <Reveal delay={150}>
          <div className="relative w-full py-6 sm:py-10">
            {/* Perspective stage */}
            <div
              className="relative mx-auto flex items-center justify-center"
              style={{ perspective: '1800px', perspectiveOrigin: '50% 55%', height: 'clamp(260px, 38vw, 580px)' }}
            >
              {ARENAS.map((arena, idx) => {
                // Circular: wrap offset so it always takes the shortest path
                let offset = idx - currentArenaIdx;
                if (offset > ARENAS.length / 2) offset -= ARENAS.length;
                else if (offset < -ARENAS.length / 2) offset += ARENAS.length;
                const absOffset = Math.abs(offset);
                const dir = offset < 0 ? -1 : 1;

                if (absOffset > 2) return null;

                // Flat spread — no rotateY, cards stay upright
                const fan = [
                  { tx: '0vw',  scale: 1,    brightness: 1,    opacity: 1    },
                  { tx: '48vw', scale: 0.78,  brightness: 0.50, opacity: 1    },
                  { tx: '88vw', scale: 0.60,  brightness: 0.28, opacity: 0.85 },
                ];

                const c = fan[absOffset];
                const isCenter = absOffset === 0;

                return (
                  <div
                    key={arena.id}
                    onClick={() => !isCenter && setCurrentArenaIdx(idx)}
                    style={{
                      position: 'absolute',
                      transform: `translateX(calc(${dir} * ${c.tx})) scale(${c.scale})`,
                      opacity: c.opacity,
                      zIndex: 20 - absOffset * 4,
                      filter: `brightness(${c.brightness})`,
                      transition: 'all 0.75s cubic-bezier(0.25, 1, 0.5, 1)',
                      cursor: isCenter ? 'default' : 'pointer',
                      width: 'min(66vw, 920px)',
                    }}
                    className="select-none"
                  >
                    {/* Card shell */}
                    <div
                      className="relative rounded-2xl overflow-hidden"
                      style={{
                        boxShadow: isCenter
                          ? '0 0 0 2px rgba(212,164,74,0.75), 0 40px 80px rgba(0,0,0,0.8), 0 0 60px rgba(212,164,74,0.3)'
                          : '0 0 0 1px rgba(255,255,255,0.08), 0 20px 40px rgba(0,0,0,0.5)',
                      }}
                    >
                      {/* Corner ornaments — visible only on active card */}
                      {isCenter && (
                        <>
                          <span className="absolute top-0 left-0 w-9 h-9 z-20 border-t-[3px] border-l-[3px] border-gold-400 rounded-tl-2xl pointer-events-none" />
                          <span className="absolute top-0 right-0 w-9 h-9 z-20 border-t-[3px] border-r-[3px] border-gold-400 rounded-tr-2xl pointer-events-none" />
                          <span className="absolute bottom-0 left-0 w-9 h-9 z-20 border-b-[3px] border-l-[3px] border-gold-400 rounded-bl-2xl pointer-events-none" />
                          <span className="absolute bottom-0 right-0 w-9 h-9 z-20 border-b-[3px] border-r-[3px] border-gold-400 rounded-br-2xl pointer-events-none" />
                        </>
                      )}

                      {/* Arena image — landscape */}
                      <div className="w-full relative bg-navy-900" style={{ aspectRatio: '16/9' }}>
                        {arena.image ? (
                          <img
                            src={arena.image}
                            alt={arena.name}
                            className="w-full h-full object-cover object-center block"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-navy-800">
                            <span className="text-navy-600 text-xs">No Image</span>
                          </div>
                        )}

                        {/* Bottom scrim */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                        {/* Card label + name */}
                        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 pb-4 sm:pb-6 z-10">
                          <div className="flex items-center gap-2 mb-1">
                            <div className={`w-px h-4 ${isCenter ? 'bg-gold-400' : 'bg-gray-500'}`} />
                            <span className={`text-[9px] sm:text-[11px] font-bold tracking-[0.22em] uppercase ${isCenter ? 'text-gold-400' : 'text-gray-500'}`}>
                              Arena {idx + 1}
                            </span>
                          </div>
                          <h3 className="text-white font-black text-lg sm:text-xl md:text-2xl uppercase tracking-wide leading-tight drop-shadow-lg">
                            {arena.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Active arena description */}
            <div className="text-center px-4 mt-5 min-h-[2.5rem]">
              <p className="text-gray-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed transition-all duration-500">
                {ARENAS[currentArenaIdx]?.desc}
              </p>
            </div>

            {/* Nav arrows + dot indicators */}
            <div className="flex items-center justify-center gap-4 mt-5 sm:mt-6">
              <button
                onClick={() => setCurrentArenaIdx(i => (i - 1 + ARENAS.length) % ARENAS.length)}
                className="w-9 h-9 flex items-center justify-center rounded-full border transition-all border-navy-700 bg-navy-900/60 text-gray-400 hover:text-gold-400 hover:border-gold-500/50"
                aria-label="Previous arena"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex items-center gap-2">
                {ARENAS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentArenaIdx(idx)}
                    className={`h-1.5 rounded-[1px] transition-all duration-500 ${idx === currentArenaIdx ? 'w-8 sm:w-10 bg-gold-400 shadow-[0_0_10px_rgba(232,197,100,0.8)]' : 'w-3 sm:w-4 bg-navy-800 hover:bg-navy-600 border border-[#162238]'}`}
                    aria-label={`Go to arena ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrentArenaIdx(i => (i + 1) % ARENAS.length)}
                className="w-9 h-9 flex items-center justify-center rounded-full border transition-all border-navy-700 bg-navy-900/60 text-gray-400 hover:text-gold-400 hover:border-gold-500/50"
                aria-label="Next arena"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="py-20 sm:py-28 px-6 sm:px-10 lg:px-16 relative overflow-hidden min-h-[60vh] flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/50 to-navy-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-gold-500/5 via-transparent to-teal-400/5" />
        <Reveal>
        <div className="relative max-w-3xl mx-auto w-full text-center">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white">
            Ready to <span className="text-gold-400">Clash</span>?
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
            Download SkyClash: Arena of Legends and prove your worth in the Aether Heights.
            Challenge a friend via hotspot and battle across the floating arenas of legend.
          </p>



          <div className="mt-8 sm:mt-10 flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-4 w-full">
              <button
                onClick={() => handleDownload(releases[0]?.url)}
                disabled={releases.length === 0}
                className="animate-pulse-glow bg-gold-500 hover:bg-gold-600 disabled:opacity-50 disabled:cursor-not-allowed text-navy-950 font-bold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-xl transition-all hover:scale-105 inline-flex items-center justify-center gap-3 shadow-lg shadow-gold-500/25"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 2.232l-1.986 3.45A7.963 7.963 0 0012 4.5a7.96 7.96 0 00-3.537.818L6.477 1.868a.398.398 0 00-.546-.146.401.401 0 00-.146.547l1.97 3.42A8.427 8.427 0 003.5 12.5h17a8.427 8.427 0 00-4.255-6.447l1.97-3.42a.398.398 0 00-.146-.547.398.398 0 00-.546.146zM8.5 10.5a1 1 0 110-2 1 1 0 010 2zm7 0a1 1 0 110-2 1 1 0 010 2zM3.5 13.5v7a1 1 0 001 1h1v3a1.5 1.5 0 003 0v-3h5v3a1.5 1.5 0 003 0v-3h1a1 1 0 001-1v-7h-15zm-2 0a1.5 1.5 0 013 0v5a1.5 1.5 0 01-3 0v-5zm19 0a1.5 1.5 0 013 0v5a1.5 1.5 0 01-3 0v-5z" />
                </svg>
                Download Latest ({releases[0]?.tag || 'v1.0.0.4'})
              </button>
              
              {releases[0] && (
                <div className="flex justify-center gap-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  <span>{releases[0].size}</span>
                  <span>&bull;</span>
                  <span>Android</span>
                  <span>&bull;</span>
                  <span>{releases[0].count.toLocaleString()} downloads</span>
                </div>
              )}
            </div>

            {releases.length > 1 && (
              <div className="w-full max-w-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-1 h-px bg-white/5" />
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Other Versions</span>
                  <div className="flex-1 h-px bg-white/5" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {releases.slice(1).map((rel) => (
                    <button
                      key={rel.tag}
                      onClick={() => handleDownload(rel.url)}
                      className="flex items-center justify-between px-5 py-3 rounded-xl bg-navy-800/30 border border-navy-700/30 hover:border-gold-500/40 hover:bg-navy-800/50 transition-all group"
                    >
                      <div className="flex flex-col items-start translate-x-0 group-hover:translate-x-1 transition-transform">
                        <span className="text-sm font-bold text-white uppercase tracking-tight">Version {rel.tag.replace('v', '')}</span>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-[10px] text-gray-500">{rel.size}</span>
                          <span className="text-[10px] text-gray-600">&bull;</span>
                          <span className="text-[10px] text-gray-500">{rel.count.toLocaleString()} downloads</span>
                        </div>
                      </div>
                      <svg className="w-4 h-4 text-gray-500 group-hover:text-gold-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5 5m0 0l5-5m-5 5V3" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        </Reveal>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent" />
      </div>

      {/* Meet the Developers */}
      <section id="team" className="py-20 sm:py-28 px-6 sm:px-10 lg:px-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-900/40" />
        <div className="relative max-w-6xl mx-auto">
          <Reveal>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white">
              Meet the <span className="text-gold-400">Developers</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-teal-400 mt-4 mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
              The passionate team behind SkyClash: Arena of Legends. Reach out to us — we'd love to hear from you!
            </p>
          </div>
          </Reveal>

          {/* Developer Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {DEVELOPERS.map((dev, i) => (
              <Reveal key={dev.id} delay={i * 130} className="h-full flex flex-col">
              <div
                className={`card-glow bg-navy-800/60 border ${dev.border} rounded-2xl overflow-hidden transition-all group hover:-translate-y-2 flex flex-col flex-1`}
              >
                {/* Photo area */}
                <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${dev.gradientFrom}22, ${dev.gradientTo}44)` }}
                >
                  {/* Decorative background rings */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full border opacity-10"
                      style={{ borderColor: dev.gradientFrom }} />
                    <div className="absolute w-56 h-56 rounded-full border opacity-5"
                      style={{ borderColor: dev.gradientFrom }} />
                  </div>
                  {dev.photo ? (
                    <img
                      src={dev.photo}
                      alt={dev.name}
                      className="absolute inset-0 w-full h-full object-cover object-center sm:object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className={`relative w-28 h-28 rounded-full ring-4 ${dev.ring} shadow-2xl shadow-black/40 flex flex-col items-center justify-center gap-1`}
                      style={{ background: `linear-gradient(135deg, ${dev.gradientFrom}55, ${dev.gradientTo}88)` }}
                    >
                      <svg className="w-12 h-12 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-white/30 text-[9px] font-semibold tracking-wider uppercase">Photo Soon</span>
                    </div>
                  )}
                </div>

                {/* Info area */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <h3 className={`font-heading font-bold text-lg text-white group-hover:${dev.accent} transition-colors leading-tight`}>
                    {dev.name}
                  </h3>
                  <span className={`inline-block mt-2 mb-4 text-xs font-semibold px-3 py-1 rounded-full w-fit ${dev.accentBg} ${dev.accent}`}>
                    {dev.role}
                  </span>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">
                    {dev.intro}
                  </p>
                  {/* Contact Buttons */}
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(dev.email);
                        setCopiedEmail(dev.email);
                        setTimeout(() => setCopiedEmail(null), 2000);
                      }}
                      className={`flex items-center gap-2 w-full justify-center py-2.5 rounded-xl border ${dev.border} ${dev.accent} ${dev.accentBg} text-xs font-semibold transition-all hover:brightness-110 hover:scale-[1.02] hover:shadow-lg focus:outline-none select-text`}
                    >
                      {copiedEmail === dev.email ? (
                        <svg className="w-4 h-4 shrink-0 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      )}
                      <span className="truncate">{copiedEmail === dev.email ? 'Copied to Clipboard!' : dev.email}</span>
                    </button>
                    
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(dev.phone);
                        setCopiedPhone(dev.phone);
                        setTimeout(() => setCopiedPhone(null), 2000);
                      }}
                      className="flex items-center gap-2 w-full justify-center py-2.5 rounded-xl border border-navy-700 bg-navy-800/80 text-gray-300 text-xs font-semibold transition-all hover:border-navy-600 hover:text-white hover:scale-[1.02] hover:shadow-lg focus:outline-none select-text"
                    >
                      {copiedPhone === dev.phone ? (
                        <svg className="w-4 h-4 shrink-0 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      )}
                      <span className="truncate">{copiedPhone === dev.phone ? 'Copied!' : dev.phone}</span>
                    </button>
                  </div>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-navy-700/40 pt-8 sm:pt-10 pb-6 sm:pb-8 px-6 sm:px-10 lg:px-16 bg-navy-950/80">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-heading font-bold text-lg sm:text-xl text-gold-400 tracking-wider">SKYCLASH</p>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">Arena of Legends &copy; 2026</p>
          </div>
          <div className="text-center md:text-right text-xs sm:text-sm text-gray-500 space-y-1">
            <p>Game Leader &amp; Programmer: <span className="text-gray-400">Al Christian Francisco</span></p>
            <p>Graphic Designer &amp; Asst. Programmer: <span className="text-gray-400">Stephanie Gwen Padel</span></p>
            <p>Audio Designer: <span className="text-gray-400">John Michael Carlos</span></p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-navy-800/60 text-center text-xs text-gray-600">
          Built with Unity &bull; 2D Platform Fighter &bull; Android &bull; Local Multiplayer (Hotspot)
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-gold-500 text-navy-950 shadow-lg shadow-gold-500/30 hover:bg-gold-400 hover:shadow-gold-500/50 hover:-translate-y-1 transition-all duration-300 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  )
}

export default App
