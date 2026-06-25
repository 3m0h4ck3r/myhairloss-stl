import crypto from 'crypto'

function verifyWebhookSignature(body, signature, secret) {
  if (!signature || !secret) return false
  const hmac = crypto.createHmac('sha256', secret)
  const digest = hmac.update(body).digest('hex')
  return crypto.timingSafeEqual(Buffer.from(digest), Buffer.from(signature))
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const signature = req.headers['x-signature']
  const rawBody = JSON.stringify(req.body)

  if (!verifyWebhookSignature(rawBody, signature, process.env.LEMONSQUEEZY_WEBHOOK_SECRET)) {
    return res.status(401).json({ message: 'Invalid signature' })
  }

  const event = req.body
  const eventName = event.meta?.event_name

  switch (eventName) {
    case 'order_created': {
      const order = event.data
      console.log('Order created:', order.attributes.identifier)
      break
    }
    case 'subscription_created': {
      const subscription = event.data
      console.log('Subscription created:', subscription.attributes.id)
      break
    }
    case 'subscription_updated': {
      console.log('Subscription updated:', event.data.attributes.id)
      break
    }
    case 'subscription_cancelled': {
      console.log('Subscription cancelled:', event.data.attributes.id)
      break
    }
    default:
      console.log('Unhandled event:', eventName)
  }

  res.status(200).json({ received: true })
}

export const config = {
  api: {
    bodyParser: true,
  },
}
