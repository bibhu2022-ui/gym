export function SectionEyebrow({ children }) {
  return (
    <p className="font-body text-[11px] font-semibold tracking-[4px] uppercase text-gold mb-4 block">
      {children}
    </p>
  )
}

export function SectionTitle({ children, centered = false }) {
  return (
    <h2
      className={`font-display text-4xl md:text-5xl font-light leading-[1.08] text-ivory mb-5 ${
        centered ? 'text-center' : ''
      }`}
    >
      {children}
    </h2>
  )
}

export function SectionDesc({ children, centered = false }) {
  return (
    <p
      className={`font-body text-[14px] text-ivory-muted leading-[1.85] ${
        centered ? 'text-center mx-auto' : ''
      }`}
      style={{ maxWidth: centered ? 560 : undefined }}
    >
      {children}
    </p>
  )
}

export function SectionHeader({ eyebrow, title, desc, centered = false }) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <SectionEyebrow>{eyebrow}</SectionEyebrow>
      <SectionTitle centered={centered}>{title}</SectionTitle>
      {desc && <SectionDesc centered={centered}>{desc}</SectionDesc>}
    </div>
  )
}

export function BtnPrimary({ children, onClick, href, className = '' }) {
  const cls = `inline-block font-body text-[11px] font-bold tracking-[2.5px] uppercase px-9 py-4 bg-gold text-obsidian border-none cursor-pointer transition-all duration-300 hover:bg-gold-light hover:-translate-y-0.5 ${className}`
  if (href) return <a href={href} className={cls}>{children}</a>
  return <button onClick={onClick} className={cls}>{children}</button>
}

export function BtnGhost({ children, onClick, href, className = '' }) {
  const cls = `inline-block font-body text-[11px] font-semibold tracking-[2.5px] uppercase px-9 py-[15px] border border-gold/50 text-ivory bg-transparent cursor-pointer transition-all duration-300 hover:border-gold hover:text-gold hover:-translate-y-0.5 ${className}`
  if (href) return <a href={href} className={cls}>{children}</a>
  return <button onClick={onClick} className={cls}>{children}</button>
}

export function TrainerMonogram({ initials }) {
  return (
    <svg
      viewBox="0 0 300 330"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full block"
    >
      <rect width="300" height="330" fill="#111" />
      <circle
        cx="150"
        cy="120"
        r="55"
        fill="#1e1a14"
        stroke="#b8975a"
        strokeWidth="0.6"
        strokeOpacity="0.4"
      />
      <ellipse cx="150" cy="320" rx="90" ry="60" fill="#1e1a14" />
      <text
        x="150"
        y="129"
        textAnchor="middle"
        fill="#b8975a"
        fontFamily="Cormorant Garamond, serif"
        fontSize="28"
        opacity="0.75"
      >
        {initials}
      </text>
    </svg>
  )
}
