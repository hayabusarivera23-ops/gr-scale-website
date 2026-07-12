'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

/* ─────────────────────────────────────────────────────────────
   Reveal — fades + slides content up when it scrolls into view
──────────────────────────────────────────────────────────────── */
export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true)
            obs.disconnect()
          }
        })
      },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0px)' : 'translateY(36px)',
        transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   CursorGlow — soft light that follows the mouse inside the hero
──────────────────────────────────────────────────────────────── */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const parent = el.parentElement
    if (!parent) return

    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      el.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(14,165,233,0.10), transparent 45%)`
    }

    parent.addEventListener('mousemove', onMove)
    return () => parent.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  )
}

/* ─────────────────────────────────────────────────────────────
   ScrollZoomBrowser — 3D laptop/browser frame with a LIVE site
   inside. Starts tilted back; straightens and zooms as you scroll.
──────────────────────────────────────────────────────────────── */
export function ScrollZoomBrowser({ src, url }: { src: string; url: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const el = ref.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const vh = window.innerHeight || 1
        const raw = 1 - (rect.top - vh * 0.08) / (vh * 0.65)
        setProgress(Math.min(1, Math.max(0, raw)))
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const rotate = 22 * (1 - progress)
  const scale = 0.88 + 0.12 * progress
  const glow = 0.1 + 0.25 * progress

  return (
    <div ref={ref} style={{ perspective: '1400px' }}>
      <div
        className="browser-frame"
        style={{
          transform: `rotateX(${rotate}deg) scale(${scale})`,
          boxShadow: `0 30px 90px rgba(0,0,0,0.55), 0 0 80px rgba(14,165,233,${glow})`,
          transition: 'transform 0.08s linear, box-shadow 0.2s linear',
          transformOrigin: 'center bottom',
          willChange: 'transform',
        }}
      >
        <div className="browser-bar">
          <span className="browser-dot" style={{ background: '#ff5f57' }} />
          <span className="browser-dot" style={{ background: '#febc2e' }} />
          <span className="browser-dot" style={{ background: '#28c840' }} />
          <span className="browser-url">{url}</span>
        </div>
        <iframe src={src} title="Live GR Scale demo website" loading="lazy" />
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   Marquee — infinite scrolling strip of niches
──────────────────────────────────────────────────────────────── */
export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items]
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {row.map((item, i) => (
          <span key={i} className="marquee-item">
            {item} <span className="marquee-dot">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}
