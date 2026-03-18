import { STATS } from '../data/siteData'
import { BtnPrimary, BtnGhost } from './UI'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/2075354173/photo/fitness-couple-is-doing-kettlebell-twist-in-a-gym-togehter.jpg?s=612x612&w=0&k=20&c=lfs1V1d0YB33tn72myi6FElJnylPJYYM9lW5ZhlnYqY=')",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.45)_0%,rgba(10,10,10,0.74)_45%,rgba(10,10,10,0.94)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(184,151,90,0.18),transparent_40%)] grid-bg opacity-80" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 pt-36 pb-28 animate-fadeUp">
        <p className="font-body text-[11px] font-medium tracking-[4px] uppercase text-gold mb-6">
          Est. 2018 · London, UK
        </p>

        <h1
          className="font-display font-light leading-[0.95] text-ivory mb-7"
          style={{ fontSize: 'clamp(3.5rem, 9vw, 8.5rem)' }}
        >
          Forge Your
          <br />
          <em className="shimmer-text not-italic">Finest Self</em>
        </h1>

        <p className="font-body text-[15px] text-ivory-muted max-w-[480px] mx-auto leading-[1.85] mb-12">
          Premium training. Uncompromising standards.
          <br />
          An environment built for those who refuse to settle.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <BtnPrimary href="#pricing">Begin Your Journey</BtnPrimary>
          <BtnGhost href="#about">Discover APEX</BtnGhost>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <span className="font-body text-[9px] tracking-[3px] uppercase text-gold-dark">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold-dark to-transparent animate-scrollPulse" />
      </div>

      {/* Stats strip */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-gold/20 bg-obsidian/80 backdrop-blur-sm z-10 hidden md:flex items-center justify-center">
        {STATS.map((stat, i) => (
          <div key={stat.num} className="flex items-center">
            {i > 0 && <div className="w-[1px] h-10 bg-gold/20" />}
            <div className="flex flex-col items-center px-10 lg:px-14 py-5 gap-1">
              <span className="font-display text-[2.2rem] font-light text-gold leading-none">
                {stat.num}
              </span>
              <span className="font-body text-[9px] tracking-[2px] uppercase text-ivory-muted">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
