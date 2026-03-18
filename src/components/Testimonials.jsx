import { TESTIMONIALS } from '../data/siteData'
import { SectionHeader } from './UI'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 md:py-36 bg-obsidian-2">
      <div className="max-w-[1240px] mx-auto px-8 md:px-10">
        <div className="reveal">
          <SectionHeader
            centered
            eyebrow="Testimonials"
            title={<>Heard from Our <em className="italic text-gold-light">Members</em></>}
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border border-gold/20 divide-x divide-y divide-gold/[0.12]">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`reveal reveal-d${i + 1} p-9 transition-colors duration-300 hover:bg-obsidian-3 ${
                t.large ? 'lg:col-span-2 bg-obsidian-gold' : 'bg-obsidian-2'
              }`}
            >
              <div className="font-display text-[4.5rem] text-gold leading-[0.5] mb-6 opacity-35 italic">
                "
              </div>
              <p className="font-display italic text-[1.05rem] font-light text-ivory-dim leading-[1.85] mb-8">
                {t.quote}
              </p>
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-obsidian-4 border border-gold-dark flex items-center justify-center font-body text-[11px] font-semibold text-gold flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <strong className="block font-body text-[13px] text-ivory font-medium mb-0.5">
                    {t.name}
                  </strong>
                  <span className="font-body text-[10px] text-ivory-muted tracking-[1px]">
                    {t.since}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
