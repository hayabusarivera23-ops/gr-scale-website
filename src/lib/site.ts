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

export type Agent = {
  id: string
  name: string
  short: string
  does: string
  price: string
  bundle: boolean
}

export const AGENTS: Agent[] = [
  {
    id: 'website',
    name: 'Website + Online Booking',
    short: 'A fast site where customers book themselves.',
    does: 'Mobile-first website with your services, prices, photos, Google Maps and a Book Now button. Customers pick a time without calling.',
    price: '$297 setup + $97/mo',
    bundle: true,
  },
  {
    id: 'textback',
    name: 'Missed-Call Text-Back',
    short: 'Every missed call gets a text in seconds.',
    does: 'When you can’t pick up, the caller instantly gets a text with your booking link — so they book with you instead of calling the next shop.',
    price: '$97/mo',
    bundle: true,
  },
  {
    id: 'reviews',
    name: 'Review Getter',
    short: 'More 5-star Google reviews on autopilot.',
    does: 'After each visit, customers get a friendly text asking for a Google review. More reviews = higher on Google Maps.',
    price: '$67/mo',
    bundle: true,
  },
  {
    id: 'receptionist',
    name: 'AI Receptionist',
    short: 'An AI that answers your phone 24/7.',
    does: 'Answers every call, answers questions about prices and hours, takes messages and books appointments — and always says it’s an AI assistant.',
    price: '$297 setup + $297/mo',
    bundle: false,
  },
]
