import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#fdfdfb] min-h-screen text-[#2d2d2d] font-sans">
      <Head>
        <title>Brian Ivie Hair and Extensions | Advanced Laser Hair Therapy | St. Louis</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      {/* Clean Navigation */}
      <header className="sticky top-0 w-full z-50 bg-white border-b border-[#f0eee6] px-6 py-5 flex justify-between items-center">
        <Link href="/" className="text-xl font-extrabold tracking-tight text-[#3c2a21]">
          BRIAN IVIE <span className="text-[#9a6137]">HAIR & EXTENSIONS</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-10">
          {['Services', 'Laser-Therapy', 'About', 'Contact'].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="text-sm font-bold uppercase tracking-widest text-[#3c2a21] hover:text-[#9a6137] transition">
              {item.replace('-', ' ')}
            </Link>
          ))}
          <Link href="/book" className="bg-[#3c2a21] text-white px-8 py-3 rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-[#9a6137] transition">
            Book Now
          </Link>
        </nav>

        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 focus:outline-none"
        >
          <div className={`h-0.5 w-6 bg-[#3c2a21] transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`h-0.5 w-6 bg-[#3c2a21] transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`h-0.5 w-6 bg-[#3c2a21] transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center p-6 animate-in fade-in">
          <nav className="flex flex-col gap-10 text-center">
            {['Home', 'Services', 'Laser Therapy', 'About', 'Contact'].map((item) => (
              <Link 
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-extrabold uppercase text-[#3c2a21]"
              >
                {item}
              </Link>
            ))}
            <Link 
              href="/book" 
              onClick={() => setMenuOpen(false)}
              className="mt-6 bg-[#3c2a21] text-white px-12 py-5 rounded-xl text-lg font-bold uppercase"
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}

      {/* Hero Section: Focused on Laser & Extensions */}
      <section className="py-16 md:py-24 bg-[#f0eee6]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#9a6137] font-bold uppercase tracking-widest text-sm mb-4">St. Louis, MO • Salon Lofts on Olive</p>
            <h1 className="mb-8 text-[#3c2a21]">
              Advanced Laser Hair Therapy & Premium Extensions
            </h1>
            <p className="text-xl leading-relaxed text-[#4a4a4a] mb-10">
              Restore your hair's density with clinical-grade Laser Therapy. We specialize in custom-molded units, premium extensions, and precision cuts tailored to your unique look.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="bg-[#3c2a21] text-white text-center px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#9a6137] transition">
                Book a Consultation
              </Link>
              <Link href="/laser-therapy" className="bg-white text-[#3c2a21] text-center px-10 py-5 rounded-xl font-bold text-lg border border-[#f0eee6] hover:bg-[#f0eee6] transition">
                Explore Laser Therapy
              </Link>
            </div>
          </div>
          <div className="bg-white/50 p-4 rounded-3xl border border-white">
            <div className="bg-[#e0ddd0] w-full aspect-video rounded-2xl flex flex-col items-center justify-center text-[#9a6137] font-bold uppercase tracking-widest text-xs p-8 text-center">
              <span className="mb-4">Advanced Laser Therapy System</span>
              <span className="text-[10px] opacity-60">Non-Invasive • Clinical Grade • Results Driven</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pillars Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="mb-6 text-[#3c2a21]">Our Four Pillars</h2>
            <div className="w-20 h-1.5 bg-[#9a6137] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pillar 1: Laser Therapy (The Star) */}
            <div className="info-card border-2 border-[#9a6137]/20 bg-[#9a6137]/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#9a6137] rounded-full flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-[#3c2a21]">Laser Hair Therapy</h3>
              </div>
              <p className="text-lg mb-6">
                Our primary focus for non-invasive restoration. Using low-level laser therapy (LLLT) to stimulate follicles, increase blood flow, and promote thicker, fuller hair growth.
              </p>
              <ul className="space-y-3 mb-8">
                {['FDA-Cleared Technology', 'Stimulates Cellular Activity', 'Increases Hair Density', 'Painless & Non-Invasive'].map(item => (
                  <li key={item} className="flex items-center gap-3 font-bold text-sm text-[#3c2a21]">
                    <div className="w-1.5 h-1.5 bg-[#9a6137] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/laser-therapy" className="text-[#9a6137] font-extrabold uppercase tracking-widest text-xs border-b-2 border-[#9a6137]/20 hover:border-[#9a6137] transition pb-1">
                Deep Dive into Laser Therapy →
              </Link>
            </div>

            {/* Pillar 2: Custom Extensions */}
            <div className="info-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#3c2a21] rounded-full flex items-center justify-center text-white italic font-black">E</div>
                <h3 className="text-[#3c2a21]">Premium Extensions</h3>
              </div>
              <p className="text-lg mb-6">
                High-quality hair extensions for length and volume. We use premium, ethically sourced hair to ensure a seamless, natural blend with your existing hair.
              </p>
              <ul className="space-y-3">
                {['Seamless Color Blending', 'Volume & Length Solutions', 'Premium Quality Hair', 'Expert Application'].map(item => (
                  <li key={item} className="flex items-center gap-3 font-bold text-sm text-[#3c2a21]">
                    <div className="w-1.5 h-1.5 bg-[#3c2a21] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pillar 3: Custom Units */}
            <div className="info-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#3c2a21] rounded-full flex items-center justify-center text-white italic font-black">U</div>
                <h3 className="text-[#3c2a21]">Custom Molded Units</h3>
              </div>
              <p className="text-lg mb-6">
                Individually molded hair systems perfected for each customer. From molding to final fitting, we ensure a natural, undetectable result.
              </p>
              <ul className="space-y-3">
                {['Custom Head Molding', 'Undetectable Hairlines', 'Perfect Color Match', 'Glue-on & Tape-on Options'].map(item => (
                  <li key={item} className="flex items-center gap-3 font-bold text-sm text-[#3c2a21]">
                    <div className="w-1.5 h-1.5 bg-[#3c2a21] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pillar 4: Precision Cuts */}
            <div className="info-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#3c2a21] rounded-full flex items-center justify-center text-white italic font-black">C</div>
                <h3 className="text-[#3c2a21]">Precision Haircuts</h3>
              </div>
              <p className="text-lg mb-6">
                Expert haircuts of any kind. Whether you need a classic style or a modern fade, every cut is executed with clinical precision.
              </p>
              <ul className="space-y-3">
                {['All Hair Types', 'Precision Fades', 'Custom Styling', 'Clinical Standards'].map(item => (
                  <li key={item} className="flex items-center gap-3 font-bold text-sm text-[#3c2a21]">
                    <div className="w-1.5 h-1.5 bg-[#3c2a21] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Payment & Financing Section */}
      <section className="py-20 bg-[#f0eee6] border-y border-[#e0ddd0]">
        <div className="container mx-auto text-center">
          <h2 className="mb-12 text-[#3c2a21]">Payment & Financing</h2>
          <div className="flex flex-wrap justify-center gap-12 items-center opacity-70 mb-16">
            {['Visa', 'Mastercard', 'American Express', 'Discover'].map(card => (
              <div key={card} className="text-xl font-black italic tracking-tighter uppercase text-[#3c2a21]">
                {card}
              </div>
            ))}
          </div>
          <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl border border-[#e0ddd0]">
            <h3 className="text-lg mb-4 text-[#9a6137]">Medical Financing</h3>
            <p className="text-sm font-bold text-[#3c2a21] mb-2">CARECREDIT COMING SOON</p>
            <p className="text-xs opacity-60">
              We are currently in the process of integrating CareCredit to offer flexible medical financing options for our hair restoration services.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-[#3c2a21] text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-white mb-6">BRIAN IVIE HAIR AND EXTENSIONS</h3>
              <p className="text-[#f0eee6]/60 text-sm">
                St. Louis' premier destination for advanced laser hair therapy, premium extensions, and custom restoration solutions.
              </p>
            </div>
            <div>
              <h4 className="text-white mb-6 uppercase tracking-widest text-sm">Studio</h4>
              <p className="text-[#f0eee6]/80">
                Salon Lofts on Olive Blvd<br />
                Saint Louis, MO
              </p>
            </div>
            <div>
              <h4 className="text-white mb-6 uppercase tracking-widest text-sm">Connect</h4>
              <p className="text-[#f0eee6]/80 mb-2">info@myhairloss.com</p>
              <p className="text-[#f0eee6]/80">(314) 555-1234</p>
            </div>
          </div>
          <div className="pt-12 border-t border-white/10 text-center">
            <p className="text-xs opacity-40 uppercase tracking-widest">© {new Date().getFullYear()} Brian Ivie Hair and Extensions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
