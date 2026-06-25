import { lemonSqueezySetup, createCheckout } from '@lemonsqueezy/lemonsqueezy.js'

export function initLemonSqueezy() {
  const apiKey = process.env.LEMONSQUEEZY_API_KEY
  if (!apiKey) {
    console.warn('LEMONSQUEEZY_API_KEY is not set')
    return false
  }
  lemonSqueezySetup({ apiKey })
  return true
}

export async function createCheckoutUrl(variantId, options = {}) {
  if (!initLemonSqueezy()) {
    return null
  }

  try {
    const { data, error } = await createCheckout(
      process.env.LEMONSQUEEZY_STORE_ID,
      variantId,
      {
        checkoutOptions: {
          embed: false,
          media: false,
          logo: true,
          ...options.checkoutOptions,
        },
        checkoutData: {
          email: options.email || '',
          ...options.checkoutData,
        },
        productOptions: {
          enabledVariants: [variantId],
          ...options.productOptions,
        },
      }
    )

    if (error) {
      console.error('Lemon Squeezy checkout error:', error)
      return null
    }

    return data.data.attributes.url
  } catch (err) {
    console.error('Failed to create checkout:', err)
    return null
  }
}
