import { BtnPrimary } from './UI'

export default function ScheduleStrip() {
  return (
    <div className="bg-obsidian-warm border-t border-b border-gold/20 py-12">
      <div className="max-w-[1240px] mx-auto px-8 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="font-display text-[1.8rem] font-light text-ivory mb-2">
            View the Full Weekly Schedule
          </h3>
          <p className="font-body text-[13px] text-ivory-muted">
            Over 60 classes a week. Morning, evening, and weekend slots at all locations.
          </p>
        </div>
        <BtnPrimary href="#contact" className="whitespace-nowrap">
          Download Schedule
        </BtnPrimary>
      </div>
    </div>
  )
}
