import { PLANS } from '../data/siteData'
import { SectionHeader, BtnPrimary, BtnGhost } from './UI'

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 md:py-36 bg-obsidian">
      <div className="max-w-[1240px] mx-auto px-8 md:px-10">
        <div className="reveal">
          <SectionHeader
            centered
            eyebrow="Membership"
            title={<>Invest in <em className="italic text-gold-light">Excellence</em></>}
            desc="Every tier includes full access to our facilities, equipment, and community. Choose the level of guidance that fits your ambition."
          />
        </div>

        <div className="grid md:grid-cols-3 border border-gold/20 divide-x divide-y divide-gold/[0.12] mb-6">
          {PLANS.map((plan, i) => (
            <div
              key={plan.tier}
              className={`reveal reveal-d${i + 1} relative p-10 ${
                plan.featured ? 'bg-obsidian-gold' : 'bg-obsidian-2'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-0 left-1/2 -translate-x-1/2 -translate-y-full font-body text-[9px] tracking-[2px] uppercase bg-gold text-obsidian px-4 py-1.5 font-bold whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div className="font-body text-[11px] tracking-[3px] uppercase text-gold mb-5 font-semibold">
                {plan.tier}
              </div>

              <div className="font-display font-light text-ivory leading-none mb-2 flex items-start gap-1">
                <span className="font-display text-[1.4rem] text-gold mt-2">£</span>
                <span style={{ fontSize: '3.8rem' }}>{plan.price}</span>
                <span className="font-body text-[1rem] text-ivory-muted self-end pb-2">/mo</span>
              </div>

              <p className="font-display italic text-[1rem] text-ivory-muted mb-8 font-light">
                {plan.tagline}
              </p>

              <ul className="flex flex-col gap-3 mb-10 list-none">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="font-body text-[13px] text-ivory-dim pl-5 relative leading-relaxed"
                  >
                    <span className="absolute left-0 text-gold-dark text-[11px] top-[2px]">—</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {plan.featured ? (
                <BtnPrimary href="#contact" className="w-full text-center">
                  Get Started
                </BtnPrimary>
              ) : (
                <BtnGhost href="#contact" className="w-full text-center">
                  Get Started
                </BtnGhost>
              )}
            </div>
          ))}
        </div>

        <p className="font-body text-[12px] text-ivory-muted text-center tracking-[0.5px]">
          All memberships are month-to-month. No lock-in contracts. Annual memberships available
          at 15% discount.
        </p>
      </div>
    </section>
  )
}
