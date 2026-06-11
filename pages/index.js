import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#050505] min-h-screen text-[#e0e0e0] selection:bg-gold selection:text-black font-sans">
      <Head>
        <title>Brian Ivie Hair | St. Louis Hair Restoration & Custom Units</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      {/* Editorial Navigation */}
      <header className="fixed top-0 w-full z-50 mix-blend-difference px-6 py-8 md:px-12 flex justify-between items-center">
        <Link href="/" className="text-2xl font-black uppercase italic tracking-tighter">
          Brian Ivie <span className="text-gold">Hair</span>
        </Link>
        
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="group flex flex-col gap-1.5 focus:outline-none"
        >
          <div className={`h-0.5 w-8 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`h-0.5 w-8 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`h-0.5 w-8 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </header>

      {/* Fullscreen Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-gold flex flex-col items-center justify-center p-6 animate-in fade-in duration-300">
          <nav className="flex flex-col gap-8 text-center">
            {['Home', 'Services', 'About', 'Physicians', 'Contact'].map((item) => (
              <Link 
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-5xl md:text-7xl font-black uppercase italic text-black hover:tracking-widest transition-all duration-500"
              >
                {item}
              </Link>
            ))}
            <Link 
              href="/book" 
              onClick={() => setMenuOpen(false)}
              className="mt-8 text-xl font-bold uppercase tracking-widest text-black border-2 border-black px-12 py-4 hover:bg-black hover:text-gold transition"
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}

      {/* Hero Section: Gritty & Bold */}
      <section className="relative h-screen flex flex-col justify-end p-6 md:p-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.jpg" 
            className="w-full h-full object-cover grayscale opacity-40 scale-105 animate-pulse-slow" 
            alt="Hero" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-4xl">
          <p className="text-gold uppercase tracking-[0.4em] text-xs font-black mb-4">St. Louis, MO • Established Expertise</p>
          <h1 className="text-6xl md:text-[10rem] font-black uppercase italic leading-[0.8] tracking-tighter mb-8">
            Restore <br />
            <span className="text-gold">Your Look.</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <Link href="/book" className="group bg-gold text-black px-12 py-6 text-xl font-black uppercase italic tracking-tighter hover:px-16 transition-all">
              Book a Session
            </Link>
            <p className="text-sm md:text-lg max-w-md opacity-60 font-medium leading-tight">
              Custom hair systems, precision fades, and medical partnerships. No generic solutions—just perfected fit and natural results.
            </p>
          </div>
        </div>
      </section>

      {/* The "Work" Section */}
      <section className="py-32 px-6 bg-[#080808]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
              The <br /><span className="text-gold">Craft.</span>
            </h2>
            <p className="max-w-md text-sm md:text-base opacity-50 italic">
              "I don't just cut hair—I restore confidence. Every unit is custom molded and perfected for the individual. It's about the fit, the color, and the soul of the style." — Brian Ivie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'Custom Units', type: 'Hair Restoration', img: '/images/custom-unit-hero.jpg' },
              { title: 'Precision Cuts', type: 'Barbering', img: '/images/service-haircut.jpg' },
              { title: 'Wig Fitting', type: 'Medical Grade', img: '/images/wig-fitting.jpg' },
              { title: 'Physician Loop', type: 'Clinical Partnership', img: '/images/service-physician.jpg' }
            ].map((work, i) => (
              <div key={i} className="group relative aspect-[4/5] overflow-hidden bg-white/5">
                <img 
                  src={work.img} 
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" 
                  alt={work.title} 
                />
                <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black to-transparent">
                  <p className="text-gold text-[10px] uppercase tracking-widest font-black mb-1">{work.type}</p>
                  <h3 className="text-3xl font-black uppercase italic tracking-tighter">{work.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Section: Physician Partnership */}
      <section className="py-32 px-6 border-y border-white/5">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8">
              Medical <br /><span className="text-gold">Integration.</span>
            </h2>
            <p className="text-lg opacity-70 mb-8 leading-relaxed">
              We bridge the gap between clinical treatment and aesthetic restoration. Partnering with St. Louis' top physicians to provide immediate results while medical treatments take effect.
            </p>
            <div className="space-y-4 mb-10">
              {['Minoxidil/Rogaine Support', 'Finasteride Synergy', 'Microneedling Coordination', 'Ketoconazole Integration'].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-gold" />
                  <span className="uppercase text-xs font-bold tracking-widest">{item}</span>
                </div>
              ))}
            </div>
            <Link href="/physicians" className="text-gold text-sm font-black uppercase tracking-widest border-b-2 border-gold/30 hover:border-gold transition pb-2">
              Physician Partnership Info →
            </Link>
          </div>
          <div className="order-1 md:order-2 bg-white/5 p-4 rounded-3xl">
            <img src="/images/service-physician.jpg" className="w-full rounded-2xl grayscale hover:grayscale-0 transition duration-500" alt="Physician Partnership" />
          </div>
        </div>
      </section>

      {/* Location / Contact */}
      <section className="py-32 px-6">
        <div className="container mx-auto text-center">
          <p className="text-gold uppercase tracking-[0.4em] text-[10px] font-black mb-6">Find the Studio</p>
          <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-12">
            Salon Lofts <br />on Olive Blvd
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-12 text-sm uppercase tracking-widest font-bold opacity-60">
            <div>
              <p className="text-gold mb-2">Location</p>
              <p>St. Louis, MO</p>
            </div>
            <div>
              <p className="text-gold mb-2">Connect</p>
              <p>info@myhairloss.com</p>
            </div>
            <div>
              <p className="text-gold mb-2">Hours</p>
              <p>By Appointment Only</p>
            </div>
          </div>
        </div>
      </section>

      {/* Grainy Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] contrast-150 brightness-150" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
    </div>
  )
}
