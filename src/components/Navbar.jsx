import { useState } from 'react'
import { NAV_LINKS } from '../data/siteData'
import { useNavScroll, useActiveSection } from '../hooks/useScrollReveal'

export default function Navbar() {
  const scrolled = useNavScroll()
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(NAV_LINKS.map((l) => l.href))

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-obsidian/95 backdrop-blur-md border-b border-gold/20'
          : ''
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-8 md:px-10 flex items-center justify-between py-5">
        {/* Logo */}
        <a
          href="#hero"
          className="font-display text-2xl tracking-[6px] text-ivory hover:text-gold transition-colors duration-300"
        >
          APEX
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex gap-8 items-center list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={`#${link.href}`}
                className={`nav-underline font-body text-[11px] font-medium tracking-[2px] uppercase transition-colors duration-300 ${
                  active === link.href ? 'text-gold active' : 'text-ivory-muted hover:text-gold'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#pricing"
          className="hidden lg:inline-block font-body text-[10px] font-bold tracking-[2.5px] uppercase px-5 py-2.5 border border-gold text-gold hover:bg-gold hover:text-obsidian transition-all duration-300"
        >
          Join Now
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-[1.5px] bg-ivory block transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''
            }`}
          />
          <span
            className={`w-6 h-[1.5px] bg-ivory block transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-[1.5px] bg-ivory block transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 bg-obsidian/98 border-t border-gold/20 ${
          menuOpen ? 'max-h-[480px]' : 'max-h-0'
        }`}
      >
        <div className="px-8 py-6 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={() => setMenuOpen(false)}
              className="py-3 border-b border-gold/15 font-body text-[11px] tracking-[2px] uppercase text-ivory-muted hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setMenuOpen(false)}
            className="mt-4 py-3 text-center border border-gold text-gold font-body text-[11px] tracking-[2px] uppercase hover:bg-gold hover:text-obsidian transition-all duration-300"
          >
            Join Now
          </a>
        </div>
      </div>
    </nav>
  )
}
