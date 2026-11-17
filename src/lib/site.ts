/**
 * GR Scale — one place for the business facts the whole site uses.
 *
 * Fill these in Vercel → gr-scale-website → Settings → Environment Variables
 * (then redeploy). Until they are set, the site simply hides the matching
 * buttons, so nothing broken ever shows.
 *
 *   NEXT_PUBLIC_AI_PHONE        the Twilio number Ava (the AI receptionist) answers, e.g. +18135551234
 *   NEXT_PUBLIC_STRIPE_SETUP    Stripe payment link for the $297 setup
 *   NEXT_PUBLIC_STRIPE_MONTHLY  Stripe payment link for the $147/mo founding plan
 */

const digits = (s: string) => s.replace(/\D/g, '')

const RAW_PHONE = (process.env.NEXT_PUBLIC_AI_PHONE || '').trim()
const PHONE_DIGITS = digits(RAW_PHONE).replace(/^1(?=\d{10}$)/, '')

export const SITE = {
  name: 'GR Scale',
  url: 'https://grscales.com',
  logo: '/logo.png',
  ogImage: '/og.jpg',
  city: 'Tampa, FL',
  /** Lead form → Day OS (Biz → GR Scale) */
  intakeUrl: 'https://gio-day-os.vercel.app/api/intake',
  phone: PHONE_DIGITS.length === 10 ? {
    tel: '+1' + PHONE_DIGITS,
    pretty: `(${PHONE_DIGITS.slice(0, 3)}) ${PHONE_DIGITS.slice(3, 6)}-${PHONE_DIGITS.slice(6)}`,
  } : null,
  stripeSetup: (process.env.NEXT_PUBLIC_STRIPE_SETUP || '').trim(),
  stripeMonthly: (process.env.NEXT_PUBLIC_STRIPE_MONTHLY || '').trim(),
}

/** Prices — change here and every page updates. */
export const PRICE = {
  setup: 297,
  bundle: 197,
  founding: 147,
  foundingSpots: 5,
}

/** Where a service sits in the customer's journey. */
export type Stage = 'found' | 'booked' | 'reviews'
export const STAGES: { id: Stage; title: string; line: string }[] = [
  { id: 'found', title: 'Get found', line: 'Show up on Google and look like the best choice.' },
  { id: 'booked', title: 'Get booked', line: 'Give callers and visitors an easy way to book — even when you can’t pick up.' },
  { id: 'reviews', title: 'Get reviews', line: 'Make it easy for every customer to leave you a Google review.' },
]

export type Agent = {
  id: string
  /** URL of the agent's own page: /agents/<slug> */
  slug: string
  name: string
  short: string
  does: string
  price: string
  bundle: boolean
  stage: Stage
  /** 'ready' = we deliver it today · 'early' = early access, limited spots */
  status: 'ready' | 'early'
  /** Full badge text when plain "Available" would overstate it (texting waits on carrier approval). */
  badge?: string
  setup: string
  includes: string[]
}

export const AGENTS: Agent[] = [
  {
    id: 'website',
    slug: 'website-booking',
    name: 'Website + Online Booking',
    short: 'A fast site where customers book themselves.',
    does: 'Mobile-first website with your services, prices, photos, Google Maps and a Book Now button. Customers pick a time without calling.',
    price: '$297 setup + $97/mo',
    bundle: true,
    stage: 'found',
    status: 'ready',
    setup: 'Live 48 hours after we have your setup fee and setup form',
    includes: ['Your own domain (or we connect yours)', 'Services, prices, photos, hours, map', 'Book Now button: your booking app or a free one we set up', 'Hosting, security and edits by text'],
  },
  {
    id: 'google',
    slug: 'google-profile-setup',
    name: 'Google Profile Setup',
    short: 'Show up on Google Maps the right way.',
    does: 'We set up or clean up your Google Business Profile: correct name, phone and hours, services, photos, booking link and a short description that matches what people search.',
    price: '$197 one-time',
    bundle: true,
    stage: 'found',
    status: 'ready',
    setup: 'Done in 3 days',
    includes: ['Name, phone, address and hours checked everywhere', 'Categories and services filled in', 'Photos and booking link added', 'Help with verification if Google asks'],
  },
  {
    id: 'textback',
    slug: 'missed-call-text-back',
    name: 'Missed-Call Text-Back',
    short: 'Missed callers get a text back with your booking link.',
    does: 'When you can’t pick up, the caller gets a text with your booking link, so they have an easy way to book instead of calling the next shop. You keep your own number; the text comes from a separate business number we set up for you.',
    price: '$97/mo',
    bundle: true,
    stage: 'booked',
    status: 'ready',
    badge: 'Available · texting starts after carrier approval',
    setup: 'Starts after carrier approval (timing is up to the carriers)',
    includes: ['You keep your own phone number', 'Text goes out right after a missed call, from a separate business number we set up', 'Message written in your voice with your booking link', 'A list of missed callers for you'],
  },
  {
    id: 'receptionist',
    slug: 'ai-receptionist',
    name: 'AI Receptionist',
    short: 'An AI assistant that answers calls you can’t take.',
    does: 'Early access. It answers calls you can’t take, answers questions about prices and hours and takes messages or bookings. It always says it’s an AI assistant, and calls are recorded only if the caller is told first.',
    price: '$297 setup + $297/mo',
    bundle: false,
    stage: 'booked',
    status: 'early',
    setup: 'Early access: limited spots',
    includes: ['Always says it’s an AI assistant', 'Knows your prices, hours and services', 'Takes messages and books appointments', 'Messages sent to you; calls recorded only with notice to the caller'],
  },
  {
    id: 'reviews',
    slug: 'review-getter',
    name: 'Review Getter',
    short: 'An easy way to ask every customer for a Google review.',
    does: 'A QR card for your counter and one short link that open your Google review page, so asking every customer takes seconds. Review request texts, for customers who agreed to get texts from you, start after carrier approval. We can’t promise ratings or rankings.',
    price: '$67/mo',
    bundle: true,
    stage: 'reviews',
    status: 'ready',
    badge: 'QR card available · texts start after carrier approval',
    setup: 'QR card 48 hours after we have your setup fee and setup form · texts after carrier approval',
    includes: ['Counter QR card that opens your review page', 'One short link to share anywhere', 'Review request text for customers who agreed to texts (after carrier approval)', 'Monthly count of new reviews'],
  },
]
