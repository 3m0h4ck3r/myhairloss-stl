import { createCheckoutUrl } from '../../../lib/lemonsqueezy'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  if (!process.env.LEMONSQUEEZY_API_KEY || !process.env.LEMONSQUEEZY_STORE_ID) {
    return res.status(500).json({
      message: 'Payment not configured. Please contact the site owner.',
    })
  }

  const { variantId, email, name, phone, address, quantity } = req.body

  if (!variantId) {
    return res.status(400).json({ message: 'Variant ID is required' })
  }

  const checkoutData = { email }

  if (name) checkoutData.name = name
  if (phone) checkoutData.phone = phone

  if (address) {
    checkoutData.billing_address = {
      country: 'US',
      ...address,
    }
  }

  const custom = {}
  if (phone) custom.phone = phone
  if (quantity) custom.quantity = quantity

  if (Object.keys(custom).length > 0) {
    checkoutData.custom = custom
  }

  const url = await createCheckoutUrl(variantId, {
    email,
    checkoutData,
  })

  if (!url) {
    return res.status(500).json({ message: 'Failed to create checkout' })
  }

  res.status(200).json({ url })
}
