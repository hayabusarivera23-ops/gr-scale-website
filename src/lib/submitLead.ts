/**
 * GR Scale lead submission helper shared by Contact + Book forms.
 *
 * Best setup: add NEXT_PUBLIC_FORMSPREE_ID in Vercel and submissions go
 * straight to Formspree. Until that is connected, the fallback opens a filled
 * email draft to gio@grscales.com so a real lead still has a path through.
 */

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID
const LEAD_EMAIL = 'gio@grscales.com'

export type SubmitLeadResult = 'submitted' | 'email-draft'

function formatLabel(key: string): string {
  return key
    .replace(/^_/, '')
    .replace(/([A-Z])/g, ' $1')
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase())
    .trim()
}

function formatValue(value: unknown): string {
  if (value === null || value === undefined || value === '') return 'Not provided'
  if (Array.isArray(value)) return value.join(', ')
  if (typeof value === 'object') return JSON.stringify(value)
  return String(value)
}

function openEmailDraft(payload: Record<string, unknown>): SubmitLeadResult {
  const subject = formatValue(payload._subject || 'New GR Scale website inquiry')
  const body = Object.entries(payload)
    .filter(([key]) => !key.startsWith('_'))
    .map(([key, value]) => `${formatLabel(key)}: ${formatValue(value)}`)
    .join('\n')

  const mailto = `mailto:${LEAD_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  window.location.href = mailto
  return 'email-draft'
}

export async function submitLead(payload: Record<string, unknown>): Promise<SubmitLeadResult> {
  if (!FORMSPREE_ID) {
    if (typeof window !== 'undefined') return openEmailDraft(payload)

    throw new Error('Forms are not connected yet. Please call or text (813) 869-5917.')
  }

  const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    if (typeof window !== 'undefined') return openEmailDraft(payload)

    throw new Error('Something went wrong sending your message. Please call or text (813) 869-5917 instead.')
  }

  return 'submitted'
}
