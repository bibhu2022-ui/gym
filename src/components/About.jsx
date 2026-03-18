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
              <div className="relative h-[620px] md:h-[720px]">
                <img
                  src="https://media.istockphoto.com/id/1088471402/photo/personal-weight-training.jpg?s=612x612&w=0&k=20&c=6B2xzajBTgi0JHTRM2pNEaNl0i06ZJjY2fXR4F_ZDtg="
                  alt="Personal weight training session"
                  className="h-[800px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.1)_0%,rgba(10,10,10,0.45)_100%)]" />
              </div>
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
