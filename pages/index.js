import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    { title: 'Hair Replacement', desc: 'Custom molded systems, perfected for each customer\'s color and fit. We cut and style ANY system, regardless of where it was purchased.', link: '/services' },
    { title: 'Laser Hair Therapy', desc: 'Clinical-grade LLLT to stimulate growth, thicken hair, and revitalize follicles. Essential post-transplant care.', link: '/laser-therapy' },
    { title: 'Hair Extensions', desc: 'Premium extensions for length, volume, and color. Expertly applied for a seamless, natural look.', link: '/services' },
    { title: 'Transplant Consultations', desc: 'Professional consultations for hair transplantation by approved medical doctors. We coordinate your journey.', link: '/services' }
  ];

  const products = [
    { name: 'Professional Tapes', desc: 'Ultra-hold adhesives for secure system placement.' },
    { name: 'Liquid Adhesives', desc: 'Medical-grade bonding for active lifestyles.' },
    { name: 'Specialty Shampoos', desc: 'Formulated for hair systems and extensions.' },
    { name: 'Conditioners & Serums', desc: 'Essential care for maintaining hair longevity.' }
  ];

  return (
    <div className="bg-[#fdfdfb]">
      <Head>
        <title>MYHAIRLOSS.COM | Brian Ivie Hair Replacement and Extensions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      {/* Top Branding Emphasis */}
      <div className="bg-[#1a1a1a] text-[#d4af37] py-3 text-center">
        <Link href="/" className="text-lg md:text-2xl font-black tracking-[0.3em] uppercase text-[#d4af37] hover:text-white transition-colors">MYHAIRLOSS.COM</Link>
      </div>

      <header className="glass-nav px-6 py-6 flex justify-between items-center">
        <Link href="/" className="flex flex-col">
          <span className="text-sm font-serif italic text-[#d4af37]">Executive Hair Restoration</span>
          <h1 className="text-xl md:text-2xl font-bold tracking-tight text-[#1a1a1a] leading-none">
            BRIAN IVIE <span className="font-light">HAIR & EXTENSIONS</span>
          </h1>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="#replacement" className="nav-link">Hair Replacement</Link>
          <Link href="/laser-therapy" className="nav-link">Laser Therapy</Link>
          <Link href="#extensions" className="nav-link">Extensions</Link>
          <Link href="#transplant" className="nav-link">Transplant Consultations</Link>
          <Link href="#products" className="nav-link">Products</Link>
          <Link href="/book" className="btn-primary py-3 px-6">Book Session</Link>
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden flex flex-col gap-1.5">
          <div className={`h-0.5 w-6 bg-[#1a1a1a] transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`h-0.5 w-6 bg-[#1a1a1a] transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`h-0.5 w-6 bg-[#1a1a1a] transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#1a1a1a] flex flex-col items-center justify-center p-6">
          <button onClick={() => setMenuOpen(false)} className="absolute top-8 right-8 text-[#d4af37] text-4xl">&times;</button>
          <Link href="#replacement" onClick={() => setMenuOpen(false)} className="text-2xl font-serif text-white mb-8">Hair Replacement</Link>
          <Link href="/laser-therapy" onClick={() => setMenuOpen(false)} className="text-2xl font-serif text-white mb-8">Laser Therapy</Link>
          <Link href="#extensions" onClick={() => setMenuOpen(false)} className="text-2xl font-serif text-white mb-8">Extensions</Link>
          <Link href="#transplant" onClick={() => setMenuOpen(false)} className="text-2xl font-serif text-white mb-8">Transplant Consultations</Link>
          <Link href="#products" onClick={() => setMenuOpen(false)} className="text-2xl font-serif text-white mb-8">Products</Link>
          <Link href="/book" onClick={() => setMenuOpen(false)} className="btn-primary bg-[#d4af37] text-[#1a1a1a] w-full max-w-xs py-5">Book Now</Link>
        </div>
      )}

      <main>
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center bg-[#1a1a1a] overflow-hidden">
          <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
          <div className="container mx-auto relative z-10 px-6">
            <div className="max-w-3xl">
              <h2 className="text-[#d4af37] text-lg uppercase tracking-[0.4em] mb-4">Elite Hair Restoration</h2>
              <h1 className="text-white text-5xl md:text-8xl font-bold mb-8 leading-[1.1]">
                Mastery in <br/><span className="italic font-serif font-light text-[#d4af37]">Every Strand.</span>
              </h1>
              <p className="text-white/70 text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
                Specializing in custom molded hair systems, clinical laser therapy, and premium extensions. Executive care for St. Louis professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/book" className="btn-primary bg-[#d4af37] text-[#1a1a1a] hover:bg-white">Book Consultation</Link>
                <Link href="#services" className="btn-outline border-white text-white hover:bg-white hover:text-[#1a1a1a]">Explore Services</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Confidentiality & Location Section */}
        <section className="py-20 bg-[#fdfdfb] border-b border-gray-100">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/2">
                <h2 className="text-[#d4af37] text-sm uppercase tracking-[0.3em] mb-4">Absolute Discretion</h2>
                <h2 className="text-4xl md:text-5xl mb-8 leading-tight font-bold">Private & Confidential</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Located within **Salon Lofts Heritage Place, 12511 Olive Blvd, Creve Coeur, MO 63141**, Brian operates out of a private, closed-off station. We understand the importance of confidentiality—our studio is designed for those who value their privacy while receiving the highest level of care.
                </p>
                <div className="bg-white p-6 border-l-4 border-[#d4af37] card-shadow">
                  <p className="text-sm font-bold text-[#1a1a1a] mb-2 uppercase tracking-widest">Our Location</p>
                  <p className="text-gray-500">12511 Olive Blvd, Creve Coeur, MO 63141</p>
                  <p className="text-gray-500 mt-1 italic text-xs">(Inside Salon Lofts)</p>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#1a1a1a]/5"></div>
                  <div className="text-[#d4af37] font-serif italic text-xl opacity-20 uppercase tracking-[0.2em] text-center p-8">
                    Confidential Restoration Studio
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Big 4 Services */}
        <section id="services" className="section-padding bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {services.map((s, i) => (
                <div key={i} className="group">
                  <div className="h-1 w-12 bg-[#d4af37] mb-8 group-hover:w-full transition-all duration-500"></div>
                  <h3 className="text-2xl mb-4 text-[#1a1a1a]">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">{s.desc}</p>
                  <Link href={s.link} className="text-xs font-bold uppercase tracking-widest text-[#d4af37] hover:text-[#1a1a1a] transition-colors">Learn More &rarr;</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Laser Focus Section */}
        <section className="bg-[#1a1a1a] text-white overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 md:p-24 flex flex-col justify-center">
              <h2 className="champagne-text text-sm uppercase tracking-[0.3em] mb-6">Advanced Technology</h2>
              <h2 className="text-4xl md:text-6xl mb-8 leading-tight">Clinical Laser <br/>Hair Therapy</h2>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                Our Low-Level Laser Therapy (LLLT) is the non-invasive gold standard. We use laser therapy to help after transplants to stimulate hairs to grow, generating thick, healthy hair in the anagen phase.
              </p>
              <ul className="space-y-4 mb-12">
                {['Stimulates ATP Production', 'Increases Scalp Blood Flow', 'Reverses Miniaturization', 'Essential Post-Transplant Care'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm font-semibold tracking-wide">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]"></span> {item}
                  </li>
                ))}
              </ul>
              <Link href="/laser-therapy" className="btn-primary bg-[#d4af37] text-[#1a1a1a] self-start">View Protocol</Link>
            </div>
            <div className="lg:w-1/2 bg-[url('https://images.unsplash.com/photo-1519415510236-855906a1b828?auto=format&fit=crop&q=80')] bg-cover bg-center min-h-[400px]"></div>
          </div>
        </section>

        {/* Transplant & Medical Clarity */}
        <section id="transplant" className="section-padding bg-[#fdfdfb]">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-sm uppercase tracking-[0.4em] text-[#d4af37] mb-6">Strategic Partnerships</h2>
            <h2 className="text-4xl md:text-5xl mb-10">Transplant Consultations</h2>
            <div className="bg-white p-12 border border-gray-100 card-shadow">
              <p className="text-xl text-gray-700 italic mb-8">
                "We provide professional consultations for hair transplantation by approved medical doctors."
              </p>
              <div className="inline-block px-6 py-2 bg-red-50 text-red-800 text-xs font-bold uppercase tracking-widest mb-8">
                Important: We are not medical doctors.
              </div>
              <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Our role is to coordinate your restoration journey. We partner with the region's top hair transplant surgeons to ensure you receive medical-grade results, followed by our specialized post-op laser therapy to maximize hair density.
              </p>
            </div>
          </div>
        </section>

        {/* Surprise Service: Repairs */}
        <section className="py-20 bg-white border-y border-gray-100">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/3">
                <div className="aspect-[4/5] bg-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale opacity-80"></div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-[#d4af37] text-sm uppercase tracking-[0.3em] mb-4">Specialized Artistry</h2>
                <h2 className="text-4xl mb-6">Expert Hair Ventilation & Repairs</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We offer a unique, specialized service for hair system repairs, ventilation, and filling in bald spots. Performed by our expert specialist, this precision work restores your system to its original density.
                </p>
                <div className="flex items-center gap-8">
                  <div>
                    <span className="block text-3xl font-bold text-[#1a1a1a]">$50</span>
                    <span className="text-xs uppercase tracking-widest text-gray-400">Per Hour</span>
                  </div>
                  <Link href="/book" className="btn-outline">Schedule Repair</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="section-padding bg-[#fdfdfb]">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm uppercase tracking-[0.4em] text-[#d4af37] mb-4">Professional Supply</h2>
              <h2 className="text-4xl md:text-5xl">The Product Suite</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((p, i) => (
                <div key={i} className="bg-white p-10 border border-gray-100 hover:border-[#d4af37] transition-all group">
                  <h4 className="text-lg mb-3 group-hover:text-[#d4af37] transition-colors">{p.name}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 p-8 bg-[#1a1a1a] text-white text-center">
              <p className="text-sm font-semibold tracking-widest uppercase">
                We cut and style ANY hair system, regardless of where it was purchased.
              </p>
              <p className="text-xs text-[#d4af37] mt-2 italic">Please call for pricing and set your appointment today.</p>
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-12 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
            {['VISA', 'MASTERCARD', 'DISCOVER', 'AMEX', 'CARECREDIT (PENDING)'].map((p, i) => (
              <span key={i} className="text-[10px] font-black tracking-[0.3em]">{p}</span>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-[#1a1a1a] text-white py-20 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">BRIAN IVIE <span className="font-light text-[#d4af37]">HAIR & EXTENSIONS</span></h2>
            <p className="text-white/40 max-w-md leading-relaxed mb-8">
              Executive hair restoration and extension services in St. Louis. Providing custom solutions and clinical technology for professional results.
            </p>
            <div className="flex gap-6">
              <Link href="/book" className="text-xs font-bold uppercase tracking-widest hover:text-[#d4af37]">Book</Link>
              <Link href="/laser-therapy" className="text-xs font-bold uppercase tracking-widest hover:text-[#d4af37]">Laser</Link>
              <Link href="/contact" className="text-xs font-bold uppercase tracking-widest hover:text-[#d4af37]">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="text-[#d4af37] text-xs uppercase tracking-[0.2em] mb-6">Location</h4>
            <p className="text-white/60 text-sm leading-loose">
              Salon Lofts Heritage Place<br/>
              12511 Olive Blvd, Creve Coeur, MO 63141<br/>
              <span className="text-white mt-4 block font-bold">Call/Text: <a href="tel:3145834843" className="hover:text-[#d4af37]">314-583-4843</a></span>
            </p>
          </div>
        </div>
        <div className="container mx-auto mt-20 pt-8 border-t border-white/5 text-center">
          <p className="text-[10px] text-white/20 uppercase tracking-widest">© {new Date().getFullYear()} Brian Ivie Hair and Extensions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
