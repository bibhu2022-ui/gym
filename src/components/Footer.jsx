import { FOOTER_COLS } from '../data/siteData'

const SOCIALS = ['Ig', 'Tw', 'Li']

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-gold/15 pt-20 pb-10">
      <div className="max-w-[1240px] mx-auto px-8 md:px-10">
        <div className="grid md:grid-cols-3 gap-12 mb-14">

          {/* Brand */}
          <div>
            <div className="font-display text-[2rem] tracking-[6px] text-ivory mb-4">APEX</div>
            <p className="font-body text-[13px] text-ivory-muted leading-[1.7] mb-6 max-w-[240px]">
              Premium fitness for those who demand the finest.
            </p>
            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 border border-gold/20 flex items-center justify-center font-body text-[10px] font-semibold text-ivory-muted hover:border-gold hover:text-gold transition-all duration-300"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-3 gap-6 col-span-2">
            {FOOTER_COLS.map((col) => (
              <div key={col.heading}>
                <strong className="block font-body text-[10px] tracking-[2.5px] uppercase text-ivory mb-5 font-semibold">
                  {col.heading}
                </strong>
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block font-body text-[13px] text-ivory-muted mb-2.5 hover:text-gold transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-7 border-t border-gold/15 gap-2">
          <p className="font-body text-[11px] text-ivory-muted">
            © 2025 APEX Elite Fitness Ltd. All rights reserved.
          </p>
          <p className="font-body text-[11px] text-ivory-muted">Designed with intention.</p>
        </div>
      </div>
    </footer>
  )
}
