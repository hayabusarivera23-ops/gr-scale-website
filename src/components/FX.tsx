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
   ParticleField — living constellation network in the hero.
   Dots drift, link to each other, and reach toward the cursor.
──────────────────────────────────────────────────────────────── */
export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    let w = 0
    let h = 0
    const mouse = { x: -9999, y: -9999 }
    const N = 70
    const pts = Array.from({ length: N }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0008,
      vy: (Math.random() - 0.5) * 0.0008,
    }))

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      w = parent.clientWidth
      h = parent.clientHeight
      const dpr = Math.min(2, window.devicePixelRatio || 1)
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    const step = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of pts) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > 1) p.vx *= -1
        if (p.y < 0 || p.y > 1) p.vy *= -1
      }
      for (let a = 0; a < N; a++) {
        const ax = pts[a].x * w
        const ay = pts[a].y * h

        const dmx = ax - mouse.x
        const dmy = ay - mouse.y
        const dm = Math.sqrt(dmx * dmx + dmy * dmy)
        if (dm < 170) {
          ctx.strokeStyle = `rgba(56,189,248,${0.28 * (1 - dm / 170)})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(ax, ay)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }

        for (let b = a + 1; b < N; b++) {
          const bx = pts[b].x * w
          const by = pts[b].y * h
          const dx = ax - bx
          const dy = ay - by
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 110) {
            ctx.strokeStyle = `rgba(14,165,233,${0.12 * (1 - d / 110)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(ax, ay)
            ctx.lineTo(bx, by)
            ctx.stroke()
          }
        }

        ctx.fillStyle = 'rgba(56,189,248,0.55)'
        ctx.beginPath()
        ctx.arc(ax, ay, 1.6, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseout', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseout', onLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}
    />
  )
}

/* ─────────────────────────────────────────────────────────────
   TypeWords — typewriter that cycles through words forever
──────────────────────────────────────────────────────────────── */
export function TypeWords({ words, className = '' }: { words: string[]; className?: string }) {
  const [text, setText] = useState('')
  const [del, setDel] = useState(false)
  const [i, setI] = useState(0)

  useEffect(() => {
    const word = words[i % words.length]
    let delay = del ? 42 : 92
    if (!del && text === word) delay = 1600
    if (del && text === '') delay = 250

    const t = setTimeout(() => {
      if (!del && text === word) {
        setDel(true)
        return
      }
      if (del && text === '') {
        setDel(false)
        setI(v => (v + 1) % words.length)
        return
      }
      setText(del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
    }, delay)

    return () => clearTimeout(t)
  }, [text, del, i, words])

  return (
    <span className={className}>
      {text}
      <span className="type-caret">|</span>
    </span>
  )
}

/* ─────────────────────────────────────────────────────────────
   Magnetic — element subtly pulls toward the cursor
──────────────────────────────────────────────────────────────── */
export function Magnetic({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      el.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`
    }
    const onLeave = () => {
      el.style.transform = 'translate(0px, 0px)'
    }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <div ref={ref} style={{ display: 'inline-block', transition: 'transform 0.25s cubic-bezier(0.16,1,0.3,1)' }}>
      {children}
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────
   ScrollProgress — thin gradient beam across the top of the page
──────────────────────────────────────────────────────────────── */
export function ScrollProgress() {
  const [p, setP] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      setP(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <div className="scroll-progress" style={{ transform: `scaleX(${p})` }} />
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
