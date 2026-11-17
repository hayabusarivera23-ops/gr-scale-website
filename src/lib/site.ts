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
  { id: 'booked', title: 'Get booked', line: 'Turn every call and visit into a booking — even when you can’t pick up.' },
  { id: 'reviews', title: 'Get reviews', line: 'Happy customers become 5-star reviews that bring the next ones.' },
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
    setup: 'Live in 48 hours',
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
    short: 'Every missed call gets a text in seconds.',
    does: 'When you can’t pick up, the caller instantly gets a text with your booking link — so they book with you instead of calling the next shop.',
    price: '$97/mo',
    bundle: true,
    stage: 'booked',
    status: 'ready',
    setup: 'Live after carrier approval (usually 1–2 weeks)',
    includes: ['You keep your phone number', 'Text goes out within seconds of a missed call', 'Message written in your voice with your booking link', 'Every missed caller listed for you'],
  },
  {
    id: 'receptionist',
    slug: 'ai-receptionist',
    name: 'AI Receptionist',
    short: 'An AI that answers your phone 24/7.',
    does: 'Answers every call, answers questions about prices and hours, takes messages and books appointments — and always says it’s an AI assistant.',
    price: '$297 setup + $297/mo',
    bundle: false,
    stage: 'booked',
    status: 'early',
    setup: 'Early access: limited spots',
    includes: ['Answers 24/7 and always says it’s an AI', 'Knows your prices, hours and services', 'Takes messages and books appointments', 'Call summary sent to you after every call'],
  },
  {
    id: 'reviews',
    slug: 'review-getter',
    name: 'Review Getter',
    short: 'More 5-star Google reviews on autopilot.',
    does: 'After each visit, customers get a friendly request for a Google review, plus a QR card for your counter. More reviews = higher on Google Maps.',
    price: '$67/mo',
    bundle: true,
    stage: 'reviews',
    status: 'ready',
    setup: 'QR card in 48 hours · texts after carrier approval',
    includes: ['Counter QR card that opens your review page', 'Review request text after each visit', 'One short link to share anywhere', 'Monthly count of new reviews'],
  },
]
