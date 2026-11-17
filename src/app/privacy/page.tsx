import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = { title: 'Privacy Policy — GR Scale', description: 'How GR Scale collects, uses and protects your information, including text-message and phone data.', alternates: { canonical: '/privacy' } }

const S = [
  { h: 'What we collect', p: ['When you fill in a form on grscales.com we collect what you type: your name, business name, phone, email and details about your business. When we run services for a business, we process the phone numbers and messages of people who call or text that business, only to deliver the service.'] },
  { h: 'How we use it', p: ['To contact you about your demo or setup, to build and run the services you signed up for, to send you messages and reports, and to bill you. Calls handled by an AI assistant are recorded or transcribed only if the caller is told at the start of the call.'] },
  { h: 'Text messaging and phone data', p: ['Mobile numbers and text-message opt-in data are never sold, rented or shared with third parties or affiliates for their marketing or promotional purposes. We share phone data only with the providers needed to deliver the service (for example our phone and texting carrier), and only for that purpose.', 'You can stop texts at any time by replying STOP. Reply HELP for help or contact gio@grscales.com. Message and data rates may apply. Message frequency varies.'] },
  { h: 'Providers we use', p: ['Website hosting (Vercel), payments (Stripe), phone and texting (Twilio) and AI phone answering (Vapi) when those services are active on your account. Each handles data under its own privacy policy.'] },
  { h: 'How long we keep it', p: ['We keep your information while you are a client and for up to 12 months after, unless the law requires longer. Ask us any time and we will delete it.'] },
  { h: 'Your choices', p: ['Email gio@grscales.com to see, correct or delete your information.'] },
  { h: 'Contact', p: ['GR Scale · Tampa, Florida · gio@grscales.com'] },
]

export default function PrivacyPage() { return <LegalPage title="Privacy Policy" updated="November 16, 2026" sections={S} /> }
