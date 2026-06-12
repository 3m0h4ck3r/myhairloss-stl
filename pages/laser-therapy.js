import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function LaserTherapy() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#fdfdfb] min-h-screen text-[#2d2d2d] font-sans">
      <Head>
        <title>Laser Hair Therapy | Brian Ivie Hair and Extensions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      <header className="sticky top-0 w-full z-50 bg-white border-b border-[#f0eee6] px-6 py-5 flex justify-between items-center">
        <Link href="/" className="text-xl font-extrabold tracking-tight text-[#3c2a21]">
          BRIAN IVIE <span className="text-[#9a6137]">HAIR & EXTENSIONS</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-sm font-bold uppercase tracking-widest text-[#3c2a21] hover:text-[#9a6137]">Home</Link>
          <Link href="/services" className="text-sm font-bold uppercase tracking-widest text-[#3c2a21] hover:text-[#9a6137]">Services</Link>
          <Link href="/book" className="bg-[#3c2a21] text-white px-8 py-3 rounded-lg text-sm font-bold uppercase tracking-widest">Book Now</Link>
        </nav>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5">
          <div className={`h-0.5 w-6 bg-[#3c2a21] transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`h-0.5 w-6 bg-[#3c2a21] transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`h-0.5 w-6 bg-[#3c2a21] transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center p-6">
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-3xl font-extrabold uppercase text-[#3c2a21] mb-8">Home</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)} className="text-3xl font-extrabold uppercase text-[#3c2a21] mb-8">Services</Link>
          <Link href="/book" onClick={() => setMenuOpen(false)} className="bg-[#3c2a21] text-white px-12 py-5 rounded-xl text-lg font-bold uppercase">Book Now</Link>
        </div>
      )}

      <main>
        {/* Laser Hero */}
        <section className="py-20 bg-[#3c2a21] text-white">
          <div className="container mx-auto text-center">
            <h1 className="text-white mb-6">Laser Hair Therapy</h1>
            <p className="text-xl text-[#f0eee6]/80 max-w-3xl mx-auto leading-relaxed">
              Clinical-grade Low-Level Laser Therapy (LLLT) is the non-invasive gold standard for hair restoration.
            </p>
          </div>
        </section>

        {/* Detailed Info */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-center mb-12">How It Works</h2>
            <div className="space-y-12">
              <div className="bg-[#f0eee6] p-10 rounded-3xl">
                <h3 className="mb-4">Photobiomodulation</h3>
                <p className="text-lg leading-relaxed">
                  Laser therapy works through a process called photobiomodulation. The laser light is absorbed by the cells in your hair follicles, stimulating ATP production and cellular activity. This revitalizes dormant follicles and extends the growth phase of your hair cycle.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-[#f0eee6] p-8 rounded-2xl">
                  <h4 className="text-[#9a6137] mb-4">Increased Blood Flow</h4>
                  <p className="text-sm leading-relaxed">
                    The laser energy increases microcirculation to the scalp, ensuring your follicles receive the oxygen and nutrients they need to thrive.
                  </p>
                </div>
                <div className="border border-[#f0eee6] p-8 rounded-2xl">
                  <h4 className="text-[#9a6137] mb-4">Follicle Revitalization</h4>
                  <p className="text-sm leading-relaxed">
                    By stimulating the mitochondria within the hair cells, laser therapy can actually reverse the miniaturization process of the hair follicle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Protocol */}
        <section className="py-20 bg-[#f0eee6]">
          <div className="container mx-auto">
            <h2 className="text-center mb-16">The Treatment Protocol</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Consultation', desc: 'We assess your hair density and determine if you are a candidate for laser therapy.' },
                { step: '02', title: 'Session Plan', desc: 'A custom schedule is created, typically involving 20-30 minute sessions.' },
                { step: '03', title: 'Monitoring', desc: 'We track your progress over 3-6 months to ensure optimal results.' }
              ].map((s, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-white/50">
                  <div className="text-4xl font-black text-[#9a6137]/20 mb-4">{s.step}</div>
                  <h4 className="mb-4">{s.title}</h4>
                  <p className="text-sm opacity-70">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-white text-center">
          <div className="container mx-auto">
            <h2 className="mb-8">Start Your Restoration Journey</h2>
            <p className="text-lg mb-12 max-w-2xl mx-auto">
              Laser therapy is most effective when started early. Book your private consultation today to see if it's right for you.
            </p>
            <Link href="/book?type=consultation" className="bg-[#3c2a21] text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-[#9a6137] transition">
              Book Laser Consultation
            </Link>
          </div>
        </section>
      </main>

      <footer className="py-16 bg-[#3c2a21] text-white">
        <div className="container mx-auto text-center">
          <p className="text-xs opacity-40 uppercase tracking-widest">© {new Date().getFullYear()} Brian Ivie Hair and Extensions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
