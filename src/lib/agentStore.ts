/**
 * GR Scale agent store — the catalog content for /agents and /agents/<slug>.
 *
 * Names, prices and status come from src/lib/site.ts (AGENTS + PRICE) so a
 * price is only ever typed once. This file adds the plain-English detail each
 * agent page needs: what we need from the owner, how it works, honest limits
 * and FAQ. No invented numbers, no client claims.
 */
import { AGENTS, PRICE, type Agent } from './site'

export type StoreItem = {
  slug: string
  /** Exact name used in the /book "Interested in" list, so the form preselects it. */
  name: string
  kind: 'bundle' | 'agent'
  status: 'ready' | 'early'
  /** Full badge text when plain "Available" would overstate it. */
  badge?: string
  tagline: string
  does: string
  price: string
  priceNote?: string
  timeline: string
  includes: string[]
  /** "What you need to give us" */
  needs: string[]
  /** How it works, always 3 steps */
  steps: { t: string; d: string }[]
  /** What the owner has to do after setup */
  ownerDoes: string[]
  /** Honest limits */
  limits: string[]
  faqs: { q: string; a: string }[]
  seoTitle: string
  seoDescription: string
  /** Machine-readable offers for schema markup (USD) */
  offers: { name: string; price: number; unit?: 'MON' }[]
}

const CARRIER =
  'Texting only starts after U.S. phone carriers approve your business registration (called 10DLC). We file it once your site is live. Approval usually takes 1–2 weeks, but the timing is up to the carriers and we can’t speed them up.'

type Detail = Omit<StoreItem, 'slug' | 'name' | 'kind' | 'status' | 'badge' | 'tagline' | 'does' | 'price' | 'timeline' | 'includes'>

const DETAIL: Record<string, Detail> = {
  website: {
    needs: ['Business name, address and hours', 'Your services and prices', '5–10 photos of your work (phone photos are fine)', 'The booking app you use, if you have one'],
    steps: [
      { t: 'We build a free demo', d: 'You get a link to a real page with your name, services and a Book Now button. You see it before you pay.' },
      { t: 'You send your details', d: 'Say yes, pay the setup fee and fill in a 5-minute form. We connect your domain or get you one.' },
      { t: 'It goes live', d: 'Your site goes live within 48 hours after we have your setup fee and setup form. Customers can find you, see prices and book without calling.' },
    ],
    ownerDoes: ['Text us when a price, photo or your hours change', 'Keep your booking app calendar up to date'],
    limits: [
      'A website alone does not put you at the top of Google. It gives Google and customers something good to land on.',
      'Booking runs through your booking app (or a free one we set up). We don’t replace it.',
      'The 48 hours start when we have your setup fee and your setup form, including photos.',
      'Small edits are included. A full redesign later is quoted separately.',
    ],
    faqs: [
      { q: 'I already have a booking app. Do I have to switch?', a: 'No. The Book Now button opens the app you already use. If you don’t have one, we set up a free one.' },
      { q: 'Do I own the domain?', a: 'Yes. If we register it for you, it’s yours. If you cancel, we hand over the domain and site files on request.' },
      { q: 'What does the $97 a month cover?', a: 'Hosting, security, the domain connection and small edits by text: prices, hours, photos.' },
      { q: 'Can you fix my current site instead?', a: 'Usually it’s faster to build a new one. Send it with your demo request and we’ll tell you straight.' },
    ],
    seoTitle: 'Website + Online Booking for Local Businesses',
    seoDescription: 'A fast, mobile-first website with your services, prices, photos and a Book Now button. Free demo first. $297 setup + $97/mo. Live 48 hours after setup fee and form.',
    offers: [{ name: 'Setup', price: 297 }, { name: 'Monthly', price: 97, unit: 'MON' }],
  },
  google: {
    needs: ['Access to your Google Business Profile, or the Google account you want it under', 'Correct name, address, phone and hours', 'A few photos', 'Your booking link, if you have one'],
    steps: [
      { t: 'We check your listing', d: 'We look at what Google shows today: name, phone, hours, categories, photos, booking link.' },
      { t: 'You add us as a manager', d: 'One tap from your Google account. You stay the owner the whole time.' },
      { t: 'We fill it in right', d: 'Categories, services, description, photos and booking link, done in about 3 days.' },
    ],
    ownerDoes: ['Accept our manager invite', 'Do the verification step if Google asks for one (a postcard, call or short video)'],
    limits: [
      'Google decides rankings and verification. We can’t promise a spot on the map or a date for verification.',
      'This is a one-time setup, not monthly posting or ad management.',
      'If your profile is suspended, we can help you appeal but we can’t guarantee Google reinstates it.',
    ],
    faqs: [
      { q: 'I don’t have a Google profile yet. Can you create it?', a: 'Yes. We create it under your Google account so you own it, then fill everything in.' },
      { q: 'Will this put me at the top of Google Maps?', a: 'No one can promise that. A complete, correct profile with reviews gives you the best shot, and that’s what we set up.' },
      { q: 'Is it really one-time?', a: 'Yes, $197 once. It is also included in the Front Desk Bundle at no extra charge.' },
    ],
    seoTitle: 'Google Business Profile Setup for Local Businesses',
    seoDescription: 'We set up or clean up your Google Business Profile: name, phone, hours, categories, services, photos and booking link. $197 one-time. You stay the owner.',
    offers: [{ name: 'One-time setup', price: 197 }],
  },
  textback: {
    needs: ['Your business phone number and who your carrier is', 'Your booking link', 'Legal business name and EIN (or your details as a sole proprietor) for carrier registration', 'The owner’s cell, for a one-time code the carriers send', 'How you want the text to sound'],
    steps: [
      { t: 'We register your business', d: 'Carriers require every business that texts to be registered. We file it for you once your site is live. Approval timing is up to the carriers.' },
      { t: 'We set up a second number', d: 'You keep your own number. Calls you don’t answer forward to a separate business number we set up, and the text is sent from that number.' },
      { t: 'Missed call, text back', d: 'The caller gets a text with your booking link right after the missed call. You get a list of missed callers.' },
    ],
    ownerDoes: ['Turn on call forwarding once (we walk you through it, about 2 minutes)', 'Reply to anyone who texts back with a question'],
    limits: [
      CARRIER,
      'The text comes from a separate business number we set up, not from your own number. Your number stays yours.',
      'Calls you don’t answer forward to that number, so they no longer go to your old voicemail.',
      'It sends one text to someone who just called you. It never cold-texts or blasts a list.',
      'It only works for callers on mobile phones. Landline callers can’t receive texts.',
      'It doesn’t answer the call or hold a conversation. That is the AI Receptionist, which is early access.',
      'Callers can reply STOP at any time and they won’t be texted again.',
    ],
    faqs: [
      { q: 'Do I need a new phone number?', a: 'You keep your number and customers keep calling it. We set up a separate business number, and the text-back is sent from that one.' },
      { q: 'Why can’t it start tomorrow?', a: 'U.S. carriers must approve every business that sends texts. We file once your site is live. Approval usually takes 1–2 weeks, but the timing is up to the carriers.' },
      { q: 'What does the text say?', a: 'Something short in your voice, like: “Sorry we missed you, this is Mike’s Barbershop. Book here: (your link).” You approve the wording first.' },
      { q: 'Is there a setup fee?', a: 'Not for text-back on its own. It’s $97 a month. In the Front Desk Bundle it’s included.' },
    ],
    seoTitle: 'Missed-Call Text-Back for Local Businesses',
    seoDescription: 'When you can’t pick up, the caller gets a text with your booking link from a separate business number. $97/mo, keep your number. Starts after carrier approval.',
    offers: [{ name: 'Monthly', price: 97, unit: 'MON' }],
  },
  reviews: {
    needs: ['Your Google Business Profile (we pull your review link from it)', 'Your logo, for the counter card', 'For review texts: which customers agreed to get a text from you'],
    steps: [
      { t: 'We make your review link and QR card', d: 'One short link and a printable counter card that open your Google review page. Ready within 48 hours after we have your setup fee and setup form.' },
      { t: 'We set up the review text', d: 'A short, friendly request written in your voice, for customers who agreed to get texts from you. It starts once carriers approve texting.' },
      { t: 'You ask, they review', d: 'Customers scan the card or tap the link. Each month we send you the count of new reviews.' },
    ],
    ownerDoes: ['Put the QR card on your counter or mirror', 'Ask every customer the same way', 'For review texts: tell us which customers agreed to get a text from you'],
    limits: [
      CARRIER + ' The QR card and link work right away.',
      'Every customer is asked the same way. We don’t filter out unhappy customers, we don’t offer anything in exchange for a review and we don’t write, buy or remove reviews. Google’s rules don’t allow it.',
      'We can’t promise a number of reviews, a star rating or a Google ranking.',
      'Review texts go only to customers who agreed to get texts from your business. A visit alone isn’t permission.',
    ],
    faqs: [
      { q: 'Do you write the reviews?', a: 'No. Real customers write them. We make it easy to ask every customer and quick for them to leave one.' },
      { q: 'Can I use only the QR card?', a: 'Yes. The card and link need no carrier approval.' },
      { q: 'Will customers get spammed?', a: 'No. One request, only to customers who agreed to get texts from you. They can reply STOP and won’t be texted again.' },
      { q: 'Will more reviews move me up on Google Maps?', a: 'We can’t promise that. Google decides rankings. What we do is make it easy to ask every customer for a review.' },
    ],
    seoTitle: 'Review Getter: More Google Reviews for Local Businesses',
    seoDescription: 'A counter QR card and short link that make it easy to ask every customer for a Google review. $67/mo. Review texts start after carrier approval. No fake reviews.',
    offers: [{ name: 'Monthly', price: 67, unit: 'MON' }],
  },
  receptionist: {
    needs: ['Your services, prices and hours', 'The questions callers ask most', 'What it should do with a booking: your booking link or a message to you', 'When it should answer: always, or only when you miss the call'],
    steps: [
      { t: 'Join early access', d: 'Tell us about your business. Spots are limited while we test, and we’ll tell you honestly if it’s a fit.' },
      { t: 'We teach it your business', d: 'Prices, hours, services and how you like the phone answered. You call it and test it before customers do.' },
      { t: 'It answers', d: 'It picks up, says it’s an AI assistant, answers questions, takes a message or books, then sends you the message.' },
    ],
    ownerDoes: ['Test-call it and tell us what to fix', 'Read the messages it sends you', 'Call back anyone it couldn’t help'],
    limits: [
      'This is early access. It is not generally available yet and we’re taking a small number of businesses.',
      'It always tells callers it’s an AI assistant. We won’t set it up to pretend to be a person.',
      'Calls are recorded or transcribed only if the caller is told at the start of the call. Without that notice, nothing is recorded.',
      'It can get things wrong. Please read the messages it sends you, especially in the first weeks.',
      'It answers from what you give us. It won’t quote custom jobs, diagnose problems or handle emergencies.',
      'Text confirmations to callers depend on the same carrier approval as our other texting.',
    ],
    faqs: [
      { q: 'Can I buy this today?', a: 'Not yet. It’s early access. Request a demo and we’ll tell you where you are in line and whether it fits your business.' },
      { q: 'Does it sound like a robot?', a: 'It sounds like a friendly front-desk voice, and it always says it’s an AI assistant at the start of the call.' },
      { q: 'What if it can’t answer something?', a: 'It takes a message with the caller’s name and number and sends it to you right away.' },
      { q: 'Is it in the Front Desk Bundle?', a: 'No. It’s a separate agent at $297 setup + $297 a month.' },
    ],
    seoTitle: 'AI Receptionist for Local Businesses (Early Access)',
    seoDescription: 'An AI assistant that answers your business phone, answers questions about prices and hours and takes messages. Early access, limited spots. $297 setup + $297/mo.',
    offers: [{ name: 'Setup', price: 297 }, { name: 'Monthly', price: 297, unit: 'MON' }],
  },
}

const fromAgent = (a: Agent): StoreItem => ({
  slug: a.slug,
  name: a.name,
  kind: 'agent',
  status: a.status,
  badge: a.badge,
  tagline: a.short,
  does: a.does,
  price: a.price,
  timeline: a.setup,
  includes: a.includes,
  ...DETAIL[a.id],
})

export const BUNDLE_SLUG = 'front-desk-bundle'
const inBundle = AGENTS.filter(a => a.bundle)

export const BUNDLE: StoreItem = {
  slug: BUNDLE_SLUG,
  name: 'Front Desk Bundle',
  kind: 'bundle',
  status: 'ready',
  tagline: 'Get found, get booked and get reviews, in one package.',
  does: 'Your website with online booking, Google profile setup, missed-call text-back and the Review Getter, all set up for you and working together.',
  price: `$${PRICE.setup} setup + $${PRICE.founding}/mo`,
  priceNote: `Founding price for the first ${PRICE.foundingSpots} businesses, kept for as long as you stay. Then $${PRICE.bundle}/mo.`,
  badge: 'Available · texting starts after carrier approval',
  timeline: 'Website 48 hours after we have your setup fee and setup form · Google profile in about 3 days · texting after carrier approval',
  includes: [
    'Website with online booking',
    'Google Profile Setup (normally $197)',
    'Missed-Call Text-Back',
    'Review Getter + counter QR card',
    'All setup done for you',
    'Edits and support by text',
    'Month to month, cancel with 14 days’ notice',
  ],
  needs: ['Business name, address, hours, services and prices', '5–10 photos of your work', 'Your phone number and carrier', 'Access to your Google Business Profile', 'Your booking link, if you have one'],
  steps: [
    { t: 'Free demo', d: 'We build a demo for your business first: your name, your services, your booking link. You see it before you pay.' },
    { t: 'One 5-minute form', d: 'Say yes, pay the setup fee and send your details once. We use them for all four parts.' },
    { t: 'It goes live in order', d: 'Website within 48 hours after we have your setup fee and setup form, Google profile in about 3 days, texting once carriers approve it. That timing is up to the carriers.' },
  ],
  ownerDoes: ['Accept our Google manager invite', 'Turn on call forwarding once (about 2 minutes, we walk you through it)', 'Put the QR card on your counter', 'Text us when prices or hours change'],
  limits: [
    CARRIER + ' Your website, booking and Google profile go live while you wait.',
    'The AI Receptionist is not included. It’s a separate early-access agent.',
    'We can’t guarantee rankings, bookings or a number of reviews.',
    `The $${PRICE.founding}/mo founding price is for the first ${PRICE.foundingSpots} businesses. After that the bundle is $${PRICE.bundle}/mo.`,
  ],
  faqs: [
    { q: 'What’s the difference between $147 and $197 a month?', a: `$${PRICE.founding}/mo is the founding price for the first ${PRICE.foundingSpots} businesses, and they keep it for as long as they stay. After those spots are taken the bundle is $${PRICE.bundle}/mo.` },
    { q: 'How much do I save compared to buying each one?', a: 'Bought one by one, the website ($97/mo), text-back ($97/mo) and Review Getter ($67/mo) add up to $261 a month, plus $197 for Google Profile Setup. The bundle covers all four.' },
    { q: 'Is there a contract?', a: 'No. Month to month. Cancel with 14 days’ notice.' },
    { q: 'What if I only want one part?', a: 'Every agent is sold on its own too. Start with one and add more later.' },
    { q: 'When do I pay?', a: 'Only after you’ve seen your free demo and said yes.' },
  ],
  seoTitle: 'Front Desk Bundle: Website, Google, Text-Back and Reviews',
  seoDescription: `Website with online booking, Google profile setup, missed-call text-back and Review Getter in one package. $${PRICE.setup} setup + $${PRICE.founding}/mo founding price. Free demo first.`,
  offers: [{ name: 'Setup', price: PRICE.setup }, { name: 'Monthly (founding price)', price: PRICE.founding, unit: 'MON' }],
}

/** Bundle first (the recommended pick), then every agent. */
export const STORE: StoreItem[] = [BUNDLE, ...AGENTS.map(fromAgent)]
export const getItem = (slug: string) => STORE.find(i => i.slug === slug)
export const itemHref = (i: { slug: string }) => `/agents/${i.slug}`
export const bookHref = (i: { name: string }) => `/book?plan=${encodeURIComponent(i.name)}`
export const BUNDLE_AGENT_NAMES = inBundle.map(a => a.name)
export const statusLabel = (i: { status: 'ready' | 'early'; badge?: string }) => i.badge || (i.status === 'early' ? 'Early access' : 'Available')
