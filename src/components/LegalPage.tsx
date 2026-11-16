export default function LegalPage({ title, updated, sections }: { title: string; updated: string; sections: { h: string; p: string[] }[] }) {
  return (
    <div className="pt-24">
      <section className="section">
        <div className="container-site max-w-3xl">
          <h1 className="h1 mb-2">{title}</h1>
          <p className="text-sm text-[var(--text-dim)] mb-10">Last updated {updated}</p>
          <div className="flex flex-col gap-8">
            {sections.map(s => (
              <div key={s.h}>
                <h2 className="text-lg font-bold text-white mb-2">{s.h}</h2>
                {s.p.map((t, i) => <p key={i} className="text-sm text-[var(--text-muted)] leading-relaxed mb-2">{t}</p>)}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
