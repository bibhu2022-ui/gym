export default function NotFound() {
  return (
    <main className="min-h-screen bg-obsidian text-ivory grid-bg flex items-center justify-center px-6">
      <section className="w-full max-w-2xl border border-gold/20 bg-[#111111]/90 px-8 py-16 text-center shadow-[0_0_60px_rgba(184,151,90,0.08)]">
        <p className="font-body text-[11px] font-semibold tracking-[4px] uppercase text-gold mb-4">
          Error 404
        </p>
        <h1 className="font-display text-5xl md:text-6xl tracking-[4px] text-ivory mb-6">
          Page Not Found
        </h1>
        <p className="font-body text-sm md:text-base leading-7 text-ivory-muted max-w-lg mx-auto mb-10">
          The page you entered does not exist. Check the URL or head back to the homepage.
        </p>
        <a
          href="/"
          className="inline-block border border-gold px-6 py-3 font-body text-[11px] font-semibold tracking-[2.5px] uppercase text-gold transition-all duration-300 hover:bg-gold hover:text-obsidian"
        >
          Back To Home
        </a>
      </section>
    </main>
  )
}
