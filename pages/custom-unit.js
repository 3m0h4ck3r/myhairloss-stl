import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { customHairUnit } from '../lib/catalog'
import { ShieldCheck, Menu, X, ArrowRight, CheckCircle } from 'lucide-react'

export default function CustomUnit() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [notification, setNotification] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: 'MO',
    zip: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setNotification(null)

    if (!customHairUnit.lemonSqueezyVariantId) {
      setNotification({ type: 'error', message: 'Online payment not available yet. Please call (314) 583-4843 to complete your order.' })
      setLoading(false)
      return
    }

    try {
      const res = await fetch('/api/store/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          variantId: customHairUnit.lemonSqueezyVariantId,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: {
            street: formData.street,
            city: formData.city,
            state: formData.state,
            zipcode: formData.zip,
          },
        }),
      })

      const data = await res.json()

      if (data.url) {
        window.location.href = data.url
      } else {
        setNotification({ type: 'error', message: data.message || 'Checkout unavailable. Please call (314) 583-4843.' })
      }
    } catch {
      setNotification({ type: 'error', message: 'Something went wrong. Please call (314) 583-4843.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-[#fdfdfb]">
      <Head>
        <title>Custom Molded Hair Unit | Brian Ivie Hair and Extensions LLC</title>
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
          <Link href="/store" className="nav-link">Store</Link>
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
          <Link href="/store" onClick={() => setMenuOpen(false)} className="text-2xl font-serif text-white mb-8">Store</Link>
        </div>
      )}

      {notification && (
        <div className={`fixed top-6 right-6 z-[200] p-6 max-w-md ${notification.type === 'error' ? 'bg-red-50 border-red-200 text-red-800' : 'bg-green-50 border-green-200 text-green-800'} border shadow-2xl`}>
          <p className="text-sm font-medium">{notification.message}</p>
          <button onClick={() => setNotification(null)} className="absolute top-2 right-3 text-lg">&times;</button>
        </div>
      )}

      <main>
        <section className="bg-[#1a1a1a] text-white py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <h2 className="text-[#d4af37] text-sm uppercase tracking-[0.4em] mb-6 font-bold">Premium Service</h2>
                <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1]">{customHairUnit.name}</h1>
                <p className="text-white/60 text-lg leading-relaxed mb-10">{customHairUnit.description}</p>
                <div className="flex items-center gap-8 mb-12">
                  <span className="text-4xl font-bold text-[#d4af37]">{customHairUnit.priceLabel}</span>
                  <span className="text-white/40 text-sm uppercase tracking-widest font-bold">{customHairUnit.duration}</span>
                </div>
                <ul className="space-y-4 mb-12">
                  {customHairUnit.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-4 text-white/80">
                      <CheckCircle className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 w-full max-w-lg">
                <form onSubmit={handleSubmit} className="bg-white p-10 border border-gray-100">
                  <h3 className="text-2xl font-bold mb-8 text-[#1a1a1a]">Start Your Order</h3>
                  <p className="text-sm text-gray-500 mb-8">Fill in your details below. You'll be redirected to our secure checkout to complete payment.</p>

                  <div className="space-y-6">
                    <div>
                      <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Full Name</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-[#d4af37] outline-none transition-colors text-sm" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Email</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-[#d4af37] outline-none transition-colors text-sm" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Phone Number</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-[#d4af37] outline-none transition-colors text-sm" placeholder="(314) 583-4843" />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Street Address</label>
                      <input type="text" name="street" value={formData.street} onChange={handleChange} required className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-[#d4af37] outline-none transition-colors text-sm" placeholder="123 Main St" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-1">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">City</label>
                        <input type="text" name="city" value={formData.city} onChange={handleChange} required className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-[#d4af37] outline-none transition-colors text-sm" placeholder="St. Louis" />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">State</label>
                        <select name="state" value={formData.state} onChange={handleChange} className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-[#d4af37] outline-none transition-colors text-sm">
                          <option>MO</option>
                          <option>IL</option>
                          <option>KS</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Zip</label>
                        <input type="text" name="zip" value={formData.zip} onChange={handleChange} required className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-[#d4af37] outline-none transition-colors text-sm" placeholder="63141" />
                      </div>
                    </div>
                  </div>

                  <button type="submit" disabled={loading} className="btn-primary w-full mt-10 bg-[#1a1a1a] text-white hover:bg-[#d4af37] border-none">
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">Pay {customHairUnit.priceLabel} <ArrowRight className="w-4 h-4" /></span>
                    )}
                  </button>

                  <p className="text-[10px] text-gray-400 text-center mt-6 uppercase tracking-widest font-bold">Secure checkout via Lemon Squeezy</p>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
              {[
                { title: 'Custom Mold', desc: 'We take an exact mold of your scalp for a perfect, comfortable fit that stays secure.' },
                { title: 'Premium Materials', desc: 'Hand-tied systems using the highest quality hair, matched to your color and density.' },
                { title: 'Expert Styling', desc: 'Cut, styled, and finished to blend seamlessly with your natural hair. Includes removal of old unit.' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="w-16 h-16 bg-[#1a1a1a] text-[#d4af37] flex items-center justify-center mx-auto mb-6 text-2xl font-bold">0{i + 1}</div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fdfdfb] py-20 px-6 text-center border-t border-gray-100">
          <div className="container mx-auto max-w-xl">
            <h2 className="text-2xl font-bold mb-6">Questions about the process?</h2>
            <p className="text-gray-500 mb-8">Brian is happy to walk you through everything over the phone.</p>
            <a href="tel:3145834843" className="text-3xl font-bold text-[#1a1a1a] hover:text-[#d4af37] transition-colors">(314) 583-4843</a>
          </div>
        </section>
      </main>

      <footer className="bg-[#1a1a1a] text-white py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">BRIAN IVIE <span className="font-light text-[#d4af37]">HAIR & EXTENSIONS</span></h2>
          <p className="text-[10px] text-white/20 uppercase tracking-widest">© {new Date().getFullYear()} Brian Ivie Hair and Extensions LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
