import { TRAINERS } from '../data/siteData'
import { SectionHeader, TrainerMonogram } from './UI'

export default function Trainers() {
  return (
    <section id="trainers" className="py-28 md:py-36 bg-obsidian-2">
      <div className="max-w-[1240px] mx-auto px-8 md:px-10">
        <div className="reveal">
          <SectionHeader
            centered
            eyebrow="The Team"
            title={<>Your <em className="italic text-gold-light">Coaches</em></>}
            desc="World-class credentials. Deeply personal coaching. Every trainer at APEX is selected for mastery of their discipline and the ability to elevate yours."
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TRAINERS.map((trainer, i) => (
            <div
              key={trainer.name}
              className={`reveal reveal-d${i + 1} border border-gold/20 bg-obsidian-3 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 group`}
            >
              <div className="overflow-hidden">
                {trainer.image ? (
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <TrainerMonogram initials={trainer.initials} />
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display text-[1.25rem] font-light text-ivory mb-1">
                  {trainer.name}
                </h3>
                <span className="font-body text-[10px] tracking-[1.5px] uppercase text-gold mb-3 block">
                  {trainer.role}
                </span>
                <p className="font-body text-[12px] text-ivory-muted leading-[1.75] mb-4">
                  {trainer.bio}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {trainer.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-[9px] tracking-[1.5px] uppercase px-2.5 py-1 border border-gold/20 text-ivory-muted group-hover:border-gold-dark group-hover:text-gold-dark transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
