/**
 * GR Scale lead submission — every form on the site posts here.
 *
 * Leads go straight into Gio's Day OS (Biz → GR Scale) with a push to his
 * phone. If that ever fails and NEXT_PUBLIC_FORMSPREE_ID is set, Formspree is
 * the backup. No personal phone numbers on the site.
 */
import { SITE } from './site'

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID

export type SubmitLeadResult = 'submitted'

export async function submitLead(payload: Record<string, unknown>): Promise<SubmitLeadResult> {
  const body = JSON.stringify({ ...payload, page: payload.source || payload.page || 'website' })
  let msg = ''
  try {
    const res = await fetch(SITE.intakeUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    })
    if (res.ok) return 'submitted'
    const j = await res.json().catch(() => ({}))
    msg = (j && j.error) || ''
    if (res.status === 400) throw new Error(msg || 'Please check the form and try again.')
  } catch (e) {
    if (msg && e instanceof Error && e.message === msg) throw e
  }

  if (FORMSPREE_ID) {
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body,
    })
    if (res.ok) return 'submitted'
  }

  throw new Error(
    msg ||
      (SITE.phone
        ? `Something went wrong. Please call ${SITE.phone.pretty} — our AI receptionist answers 24/7.`
        : 'Something went wrong sending your request. Please try again in a minute.'),
  )
}
