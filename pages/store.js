import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { getAllProducts, getAllServices } from '../lib/catalog'
import { ShoppingBag, ShieldCheck, Zap, Scissors, Users, Menu, X, ArrowRight, Check } from 'lucide-react'

export default function Store() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [buyingId, setBuyingId] = useState(null)
  const [notification, setNotification] = useState(null)
  const allProducts = getAllProducts()
  const allServices = getAllServices()

  const handleBuy = async (item) => {
    setBuyingId(item.id)
    setNotification(null)

    try {
      const res = await fetch('/api/store/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ variantId: item.lemonSqueezyVariantId }),
      })

      const data = await res.json()

      if (data.url) {
        window.location.href = data.url
      } else {
        setNotification({ type: 'error', message: data.message || 'Checkout unavailable. Please call (314) 583-4843 to order.' })
      }
    } catch {
      setNotification({ type: 'error', message: 'Something went wrong. Please call (314) 583-4843 to order.' })
    } finally {
      setBuyingId(null)
    }
  }

  const serviceIcons = {
    'restoration-consultation': <Users className="w-6 h-6" />,
    'hair-system-maintenance': <ShieldCheck className="w-6 h-6" />,
    'cut-style': <Scissors className="w-6 h-6" />,
    'repair-ventilation': <Zap className="w-6 h-6" />,
  }

  return (
    <div className="bg-[#fdfdfb]">
      <Head>
        <title>Store | Brian Ivie Hair and Extensions LLC</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      <div className="bg-[#1a1a1a] text-[#d4af37] py-3 text-center">
        <Link href="/" className="text-lg md:text-2xl font-black tracking-[0.3em] uppercase hover:text-white transition-colors">MYHAIRLOSS.COM</Link>
      </div>

      <header className="glass-nav px-6 py-6 flex justify-between items-center">
        <Link href="/" className="flex flex-col">
          <span className="text-sm font-serif italic text-[#d4af37]">Executive Hair Restoration</span>
          <h1 className="text-xl md:text-2xl font-bold tracking-tight text-[#1a1a1a] leading-none">
            BRIAN IVIE <span className="font-light">HAIR & EXTENSIONS</span>
          </h1>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/laser-therapy" className="nav-link">Laser Therapy</Link>
          <Link href="/book" className="btn-primary py-3 px-6">Book Now</Link>
        </nav>
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden flex flex-col gap-1.5">
          <div className="h-0.5 w-6 bg-[#1a1a1a]" />
          <div className="h-0.5 w-6 bg-[#1a1a1a]" />
          <div className="h-0.5 w-6 bg-[#1a1a1a]" />
        </button>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#1a1a1a] flex flex-col items-center justify-center p-6">
          <button onClick={() => setMenuOpen(false)} className="absolute top-8 right-8 text-[#d4af37] text-4xl">&times;</button>
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-2xl font-serif text-white mb-8">Home</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)} className="text-2xl font-serif text-white mb-8">Services</Link>
          <Link href="/laser-therapy" onClick={() => setMenuOpen(false)} className="text-2xl font-serif text-white mb-8">Laser Therapy</Link>
          <Link href="/book" onClick={() => setMenuOpen(false)} className="btn-primary bg-[#d4af37] text-[#1a1a1a] w-full max-w-xs py-5">Book Now</Link>
        </div>
      )}

      {notification && (
        <div className={`fixed top-6 right-6 z-[200] p-6 max-w-md ${notification.type === 'error' ? 'bg-red-50 border-red-200 text-red-800' : 'bg-green-50 border-green-200 text-green-800'} border rounded-sm shadow-2xl`}>
          <p className="text-sm font-medium">{notification.message}</p>
          <button onClick={() => setNotification(null)} className="absolute top-2 right-3 text-lg">&times;</button>
        </div>
      )}

      <main>
        <section className="bg-[#1a1a1a] text-white py-24 px-6 text-center">
          <div className="container mx-auto">
            <h2 className="text-[#d4af37] text-sm uppercase tracking-[0.4em] mb-4">Professional Supply</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">The Product Suite</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Premium adhesives, cleansers, and care products trusted by professionals. Order online for pickup or delivery.
            </p>
          </div>
        </section>

        <section className="bg-[#1a1a1a] text-white py-16 px-6 border-t border-white/5">
          <div className="container mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-[#d4af37] text-xs uppercase tracking-[0.4em] font-bold mb-3">Flagship Service</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">Custom Molded Hair Unit</h3>
              <p className="text-white/60 text-sm">Full custom system — mold, fit, cut-in, and removal of old unit.</p>
            </div>
            <div className="flex items-center gap-8 shrink-0">
              <span className="text-3xl font-bold text-[#d4af37]">$3,000</span>
              <Link href="/custom-unit" className="btn-primary bg-[#d4af37] text-[#1a1a1a] border-none whitespace-nowrap">Order Now</Link>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {allProducts.map((product) => (
                <div key={product.id} className="bg-white border border-gray-100 card-shadow group hover:border-[#d4af37] transition-all duration-500 flex flex-col">
                  <div className={`aspect-square bg-gradient-to-br ${product.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/5"></div>
                    <span className="text-6xl font-black text-white/50 select-none">
                      {product.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37] mb-3">{product.category}</span>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#d4af37] transition-colors">{product.name}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">${(product.price / 100).toFixed(2)}</span>
                      <button
                        onClick={() => handleBuy(product)}
                        disabled={buyingId === product.id}
                        className="btn-primary text-[10px] px-6 py-3"
                      >
                        {buyingId === product.id ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                            Processing...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">Add to Cart <ShoppingBag className="w-3 h-3" /></span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fdfdfb] py-24 md:py-32 px-6 border-t border-gray-100">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-20">
              <h2 className="text-[#d4af37] text-sm uppercase tracking-[0.4em] mb-6 font-bold">Book Online</h2>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">Services & Pricing.</h2>
              <p className="text-gray-500 text-lg mt-8 max-w-xl mx-auto">
                All services are performed by Brian in our private Creve Coeur studio.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allServices.map((service) => (
                <div key={service.id} className="bg-white p-10 border border-gray-100 card-shadow hover:border-[#d4af37] transition-all duration-500 group">
                  <div className="w-12 h-12 bg-[#1a1a1a] text-[#d4af37] flex items-center justify-center mb-6 group-hover:bg-[#d4af37] group-hover:text-[#1a1a1a] transition-all duration-500">
                    {serviceIcons[service.id] || <Check className="w-6 h-6" />}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37] mb-3 block">{service.duration}</span>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[#d4af37] transition-colors">{service.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-8">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">{service.priceLabel}</span>
                    <Link href="/book" className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1a1a1a] hover:text-[#d4af37] transition-colors flex items-center gap-2">
                      Book Now <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1a1a1a] text-white py-20 px-6 text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Need help choosing?</h2>
            <p className="text-white/60 text-lg mb-10">
              Not sure which products are right for your system? Brian can recommend the perfect setup.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/book" className="btn-primary bg-[#d4af37] text-[#1a1a1a] border-none">Book a Consultation</Link>
              <a href="tel:3145834843" className="btn-outline border-white/20 text-white hover:bg-white hover:text-[#1a1a1a]">Call (314) 583-4843</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1a1a1a] text-white py-20 px-6 border-t border-white/5">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">BRIAN IVIE <span className="font-light text-[#d4af37]">HAIR & EXTENSIONS</span></h2>
          <p className="text-[10px] text-white/20 uppercase tracking-widest">© {new Date().getFullYear()} Brian Ivie Hair and Extensions LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
