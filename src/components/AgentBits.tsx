import { Bot, CalendarCheck, MapPin, MessageSquareText, Star, Layers } from 'lucide-react'
import { statusLabel } from '@/lib/agentStore'

const ICONS: Record<string, typeof Bot> = {
  'front-desk-bundle': Layers,
  'website-booking': CalendarCheck,
  'google-profile-setup': MapPin,
  'missed-call-text-back': MessageSquareText,
  'review-getter': Star,
  'ai-receptionist': Bot,
}

export function AgentIcon({ slug, className = 'h-6 w-6 text-brand-400' }: { slug: string; className?: string }) {
  const Icon = ICONS[slug] || Bot
  return <Icon className={className} aria-hidden="true" />
}

/** Available / Early access. Text carries the meaning; color is extra. */
export function StatusBadge({ status }: { status: 'ready' | 'early' }) {
  const tone = status === 'early'
    ? 'text-amber-300 bg-amber-500/10 border-amber-500/30'
    : 'text-emerald-300 bg-emerald-500/10 border-emerald-500/30'
  return (
    <span className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${tone}`}>
      <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${status === 'early' ? 'bg-amber-300' : 'bg-emerald-300'}`} />
      {statusLabel(status)}
    </span>
  )
}

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
}
