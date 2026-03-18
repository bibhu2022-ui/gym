import { CLASSES } from '../data/siteData'
import { SectionHeader } from './UI'

export default function Classes() {
  return (
    <section id="classes" className="py-28 md:py-36 bg-obsidian">
      <div className="max-w-[1240px] mx-auto px-8 md:px-10">
        <div className="reveal">
          <SectionHeader
            centered
            eyebrow="Disciplines"
            title={<>Curated <em className="italic text-gold-light">Classes</em></>}
            desc="Each programme is architected by specialists. Each session is a step toward mastery."
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border border-gold/20 divide-x divide-y divide-gold/[0.12]">
          {CLASSES.map((cls, i) => (
            <div
              key={cls.title}
              className={`card-left-bar reveal reveal-d${(i % 3) + 1} relative p-9 transition-colors duration-300 hover:bg-obsidian-3 cursor-default ${
                cls.featured ? 'bg-obsidian-gold' : 'bg-obsidian-2'
              }`}
            >
              {cls.featured && (
                <span className="absolute top-0 left-6 font-body text-[9px] tracking-[2px] uppercase bg-gold text-obsidian px-3 py-1 font-bold -translate-y-full">
                  Most Popular
                </span>
              )}
              <div className="text-gold text-xl mb-4 opacity-70">{cls.icon}</div>
              <h3 className="font-display text-[1.45rem] font-light text-ivory mb-3">
                {cls.title}
              </h3>
              <p className="font-body text-[13px] text-ivory-muted leading-[1.8] mb-5">
                {cls.desc}
              </p>
              <div className="flex gap-2 font-body text-[11px] text-gold-dark tracking-[1px]">
                <span>{cls.duration}</span>
                <span>·</span>
                <span>{cls.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
