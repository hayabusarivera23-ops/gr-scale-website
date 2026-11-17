import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = { title: 'Terms of Service — GR Scale', description: 'The terms for GR Scale services: websites, Google profile setup, missed-call text-back, Review Getter and AI receptionist.', alternates: { canonical: '/terms' } }

const S = [
  { h: 'Who we are', p: ['GR Scale is a Tampa, Florida service run by Gio Rivera. We set up websites, online booking, Google Business Profiles, missed-call text-back, review requests and AI phone answering for local businesses. Contact: gio@grscales.com.'] },
  { h: 'Free demo', p: ['We may build a free demo before you buy. A demo is for review only. You owe nothing unless you choose to sign up.'] },
  { h: 'Payment', p: ['Services have a one-time setup fee and/or a monthly fee, as shown on our pricing page or agreed in writing. Payments are processed by Stripe. Monthly fees are billed in advance each month.', 'Founding prices stay the same for as long as your account stays active without a gap.'] },
  { h: 'Cancelling', p: ['There is no contract. You can cancel any time with 14 days’ notice by text or email. Setup fees are not refunded once setup work has started. After cancelling, we can hand over your website files and domain on request.'] },
  { h: 'Timelines', p: ['Websites usually go live within 48 hours after we receive payment and your setup form. Google profile changes usually take about 3 days but can take longer if Google requires verification. Text messaging goes live after U.S. phone carriers approve your business registration, usually 1–2 weeks. We are not responsible for delays caused by Google, phone carriers or other third parties.'] },
  { h: 'Your responsibilities', p: ['You confirm the business information you give us is accurate and that you have the right to use any photos, logos and content you send. You are responsible for how you use texting and phone tools, including only texting people who contacted you or agreed to hear from you.'] },
  { h: 'Text messages', p: ['Missed-call text-back sends one reply to a person who just called your business. Text-back messages are sent from a separate business number we set up for you, not from your own number. Review requests by text go only to customers who agreed to receive texts from your business. Every text includes a way to opt out: replying STOP stops further texts and replying HELP returns contact information. Message and data rates may apply.'] },
  { h: 'AI receptionist', p: ['Our AI receptionist always identifies itself as an AI assistant. It is in early access. Calls are recorded or transcribed only if the caller is told at the start of the call. It can make mistakes; please review the messages we send you.'] },
  { h: 'No guarantees', p: ['We work hard to bring you more bookings and reviews, but we cannot guarantee specific results, rankings or revenue. Services are provided as-is, and our total liability is limited to the fees you paid us in the last 3 months.'] },
  { h: 'Changes', p: ['We may update these terms. If a change affects what you pay, we will tell you at least 30 days in advance.'] },
]

export default function TermsPage() { return <LegalPage title="Terms of Service" updated="November 16, 2026" sections={S} /> }
