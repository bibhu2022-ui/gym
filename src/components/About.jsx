import { SectionEyebrow, SectionTitle } from './UI'

const PILLARS = [
  { icon: '◈', title: 'Precision', desc: 'Science-led programming tailored to your biology.' },
  { icon: '◈', title: 'Exclusivity', desc: 'Capped membership ensures an unhurried, focused environment.' },
  { icon: '◈', title: 'Longevity', desc: 'Training philosophies built for decades, not seasons.' },
]

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 bg-obsidian-2">
      <div className="max-w-[1240px] mx-auto px-8 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Visual */}
          <div className="reveal relative">
            <div className="border border-gold/20 overflow-hidden">
              <svg
                viewBox="0 0 400 480"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full block"
              >
                <defs>
                  <radialGradient id="about-rg" cx="50%" cy="42%" r="55%">
                    <stop offset="0%" stopColor="#b8975a" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0" />
                  </radialGradient>
                  <pattern id="about-pg" width="36" height="36" patternUnits="userSpaceOnUse">
                    <path
                      d="M 36 0 L 0 0 0 36"
                      fill="none"
                      stroke="#b8975a"
                      strokeWidth="0.3"
                      strokeOpacity="0.18"
                    />
                  </pattern>
                </defs>
                <rect width="400" height="480" fill="#0d0d0d" />
                <rect width="400" height="480" fill="url(#about-pg)" />
                <rect width="400" height="480" fill="url(#about-rg)" />
                <circle cx="200" cy="220" r="95" fill="none" stroke="#b8975a" strokeWidth="0.6" strokeOpacity="0.38" />
                <circle cx="200" cy="220" r="135" fill="none" stroke="#b8975a" strokeWidth="0.3" strokeOpacity="0.2" />
                <circle cx="200" cy="220" r="56" fill="#16130d" stroke="#b8975a" strokeWidth="0.6" strokeOpacity="0.5" />
                <text x="200" y="210" textAnchor="middle" fill="#b8975a" fontFamily="Cormorant Garamond, serif" fontSize="22" fontStyle="italic" opacity="0.9">APEX</text>
                <text x="200" y="240" textAnchor="middle" fill="#b8975a" fontFamily="Montserrat, sans-serif" fontSize="7" letterSpacing="5" opacity="0.5">ELITE FITNESS</text>
                <line x1="0" y1="220" x2="104" y2="220" stroke="#b8975a" strokeWidth="0.4" strokeOpacity="0.3" />
                <line x1="296" y1="220" x2="400" y2="220" stroke="#b8975a" strokeWidth="0.4" strokeOpacity="0.3" />
              </svg>
            </div>
            <div className="absolute -bottom-5 -right-5 w-1/2 h-1/2 border border-gold/15 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="reveal reveal-d1">
            <SectionEyebrow>Our Philosophy</SectionEyebrow>
            <SectionTitle>
              Where Discipline
              <br />
              Becomes <em className="italic text-gold-light">Art</em>
            </SectionTitle>

            <p className="font-body text-[14px] text-ivory-muted leading-[1.9] mb-4">
              APEX was born from a singular belief: that the pursuit of physical excellence is
              one of the most refined expressions of human will. We built our spaces to honour
              that pursuit — not as a chore, but as a discipline deserving the highest standards.
            </p>
            <p className="font-body text-[14px] text-ivory-muted leading-[1.9] mb-10">
              Every detail, from the architecture of our floors to the calibration of our
              equipment, is intentional. Our trainers are not instructors — they are
              craftspeople in the science of human performance.
            </p>

            <div className="flex flex-col gap-6">
              {PILLARS.map((p) => (
                <div key={p.title} className="flex gap-5 items-start">
                  <span className="text-gold text-lg mt-0.5 flex-shrink-0">{p.icon}</span>
                  <div>
                    <strong className="block font-body text-[11px] tracking-[1.5px] uppercase text-ivory mb-1 font-semibold">
                      {p.title}
                    </strong>
                    <p className="font-body text-[13px] text-ivory-muted leading-[1.7]">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
