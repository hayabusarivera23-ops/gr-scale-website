/**
 * GR Scale — Lead submission helper (shared by Contact + Book forms)
 *
 * Simplest free setup: Formspree. One endpoint, no backend server, works on
 * Vercel static hosting. Formspree emails you every submission AND stores it in
 * your Formspree dashboard (so leads are never lost).
 *
 * SETUP (2 min):
 *   1. Create a free form at https://formspree.io  → you get an ID like "xyzabcd"
 *   2. In Vercel → Project → Settings → Environment Variables, add:
 *        NEXT_PUBLIC_FORMSPREE_ID = xyzabcd
 *   3. Redeploy. Done — submissions now hit your email.
 *
 * SWAP LATER: when you outgrow Formspree, replace the fetch URL below with your
 * own /api/lead route (Resend email + Supabase insert). Nothing else changes.
 */

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID

export async function submitLead(payload: Record<string, unknown>): Promise<void> {
  if (!FORMSPREE_ID) {
    throw new Error(
      'Forms are not connected yet. Please call or text (407) 808-2898 and we’ll help you right away.'
    )
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
    throw new Error(
      'Something went wrong sending your message. Please call or text (407) 808-2898 instead.'
    )
  }
}
