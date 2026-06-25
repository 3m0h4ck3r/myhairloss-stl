const products = [
  {
    id: 'professional-tapes',
    name: 'Professional Tapes',
    description: 'Ultra-hold adhesives for secure system placement. Designed for all-day wear with gentle removal.',
    price: 2500,
    category: 'Adhesives',
    image: '/images/products/tapes.jpg',
    gradient: 'from-amber-200 to-amber-400',
    lemonSqueezyVariantId: null,
    featured: true,
  },
  {
    id: 'liquid-adhesives',
    name: 'Liquid Adhesives',
    description: 'Medical-grade bonding for active lifestyles. Water-resistant and long-lasting hold.',
    price: 3000,
    category: 'Adhesives',
    image: '/images/products/liquid-adhesives.jpg',
    gradient: 'from-blue-200 to-blue-400',
    lemonSqueezyVariantId: null,
    featured: true,
  },
  {
    id: 'specialty-shampoos',
    name: 'Specialty Shampoos',
    description: 'Formulated specifically for hair systems and extensions. Gentle, sulfate-free cleansing.',
    price: 3500,
    category: 'Hair Care',
    image: '/images/products/shampoo.jpg',
    gradient: 'from-green-200 to-green-400',
    lemonSqueezyVariantId: null,
    featured: true,
  },
  {
    id: 'conditioners-serums',
    name: 'Conditioners & Serums',
    description: 'Essential care for maintaining hair longevity. Nourishing formulas for system and natural hair.',
    price: 2800,
    category: 'Hair Care',
    image: '/images/products/conditioner.jpg',
    gradient: 'from-purple-200 to-purple-400',
    lemonSqueezyVariantId: null,
    featured: true,
  },
  {
    id: 'hair-system-starter-kit',
    name: 'Hair System Starter Kit',
    description: 'Everything you need to begin: tapes, adhesive, remover, and conditioner in one bundle.',
    price: 8900,
    category: 'Kits',
    image: '/images/products/starter-kit.jpg',
    gradient: 'from-red-200 to-red-400',
    lemonSqueezyVariantId: null,
    featured: false,
  },
  {
    id: 'scalp-protector',
    name: 'Scalp Protector',
    description: 'Barrier protection spray that shields your scalp from adhesives while allowing secure bond.',
    price: 2200,
    category: 'Adhesives',
    image: '/images/products/scalp-protector.jpg',
    gradient: 'from-teal-200 to-teal-400',
    lemonSqueezyVariantId: null,
    featured: false,
  },
  {
    id: 'adhesive-remover',
    name: 'Adhesive Remover',
    description: 'Gentle, solvent-free removal solution. Breaks down adhesive without damaging the system.',
    price: 1800,
    category: 'Adhesives',
    image: '/images/products/remover.jpg',
    gradient: 'from-orange-200 to-orange-400',
    lemonSqueezyVariantId: null,
    featured: false,
  },
  {
    id: 'daily-moisturizer',
    name: 'Daily Scalp Moisturizer',
    description: 'Lightweight hydration for scalp health between wears. Non-greasy, fast-absorbing formula.',
    price: 2400,
    category: 'Hair Care',
    image: '/images/products/moisturizer.jpg',
    gradient: 'from-pink-200 to-pink-400',
    lemonSqueezyVariantId: null,
    featured: false,
  },
]

const customHairUnit = {
  id: 'custom-molded-unit',
  name: 'Custom Molded Hair Unit',
  description: 'A fully custom-molded, hand-tied hair replacement system — color-matched, density-matched, and cut in for a seamless look. Includes removal and cleaning of your current unit.',
  price: 300000,
  priceLabel: '$3,000',
  duration: 'Full Day Session',
  details: [
    'Custom mold of your scalp for perfect fit',
    'Hand-tied premium hair system (your color, density, style)',
    'Cut-in and professional styling',
    'Removal and cleaning of existing unit',
    'Follow-up adjustment appointment',
  ],
  image: '/images/services/custom-unit.jpg',
  gradient: 'from-gold/20 to-gold/5',
  lemonSqueezyVariantId: null,
}

const services = [
  {
    id: 'restoration-consultation',
    name: 'Restoration Consultation',
    description: 'Initial consultation covering hair replacement, laser therapy, and transplant options. We develop your personalized plan.',
    price: 0,
    priceLabel: 'Free',
    duration: '30-45 min',
    image: '/images/services/consultation.jpg',
    gradient: 'from-gold/20 to-gold/5',
    featured: true,
  },
  {
    id: 'hair-system-maintenance',
    name: 'Hair System Maintenance',
    description: 'Regular cleaning, re-bonding, and styling for existing hair system wearers. Keep your system looking fresh.',
    price: 7500,
    priceLabel: 'From $75',
    duration: '60-90 min',
    image: '/images/services/maintenance.jpg',
    gradient: 'from-gold/20 to-gold/5',
    featured: true,
  },
  {
    id: 'cut-style',
    name: 'Cut & Style (Any System)',
    description: 'Precision haircut and styling for ANY hair system, regardless of where it was purchased.',
    price: 4500,
    priceLabel: '$45',
    duration: '45 min',
    image: '/images/services/cut-style.jpg',
    gradient: 'from-gold/20 to-gold/5',
    featured: true,
  },
  {
    id: 'repair-ventilation',
    name: 'Repair & Ventilation',
    description: 'Expert repair work, filling in bald spots, and system ventilation. Restore your system to original density.',
    price: 5000,
    priceLabel: '$50/hr',
    duration: 'Hourly',
    image: '/images/services/repair.jpg',
    gradient: 'from-gold/20 to-gold/5',
    featured: true,
  },
  {
    id: 'laser-therapy-session',
    name: 'Laser Hair Therapy Session',
    description: 'Clinical-grade LLLT session to stimulate growth, thicken hair, and revitalize follicles.',
    price: 7500,
    priceLabel: '$75/session',
    duration: '30 min',
    image: '/images/services/laser.jpg',
    gradient: 'from-gold/20 to-gold/5',
    featured: false,
  },
  {
    id: 'full-system-installation',
    name: 'Full System Installation',
    description: 'Complete custom system fitting, cutting, and installation. Includes follow-up adjustment.',
    price: 20000,
    priceLabel: '$200',
    duration: '2-3 hours',
    image: '/images/services/installation.jpg',
    gradient: 'from-gold/20 to-gold/5',
    featured: false,
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id) || null
}

export function getServiceById(id) {
  return services.find((s) => s.id === id) || (id === customHairUnit.id ? customHairUnit : null)
}

export { customHairUnit }

export function getFeaturedProducts() {
  return products.filter((p) => p.featured)
}

export function getFeaturedServices() {
  return services.filter((s) => s.featured)
}

export function getAllProducts() {
  return products
}

export function getAllServices() {
  return services
}

export { products, services }
