import { useState } from 'react'
import { CONTACT_DETAILS } from '../data/siteData'
import { SectionEyebrow, SectionTitle, BtnPrimary } from './UI'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 1200)
  }

  return (
    <section id="contact" className="py-28 md:py-36 bg-obsidian">
      <div className="max-w-[1240px] mx-auto px-8 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Info */}
          <div className="reveal">
            <SectionEyebrow>Get In Touch</SectionEyebrow>
            <SectionTitle>
              Begin Your <em className="italic text-gold-light">Journey</em>
            </SectionTitle>
            <p className="font-body text-[14px] text-ivory-muted leading-[1.9] mb-10">
              Whether you're ready to join or simply curious, we'd love to hear from you.
              Book a free tour, trial session, or speak to a membership advisor.
            </p>

            <div className="flex flex-col gap-7">
              {CONTACT_DETAILS.map((item) => (
                <div key={item.label} className="flex gap-5 items-start">
                  <span className="text-gold text-lg mt-0.5 flex-shrink-0">{item.icon}</span>
                  <div>
                    <strong className="block font-body text-[11px] tracking-[2px] uppercase text-ivory mb-1.5 font-semibold">
                      {item.label}
                    </strong>
                    <p className="font-body text-[13px] text-ivory-muted leading-[1.7] whitespace-pre-line">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="reveal reveal-d1 bg-obsidian-2 border border-gold/20 p-10 md:p-12">
            {sent ? (
              <div className="flex flex-col items-center justify-center min-h-[300px] text-center gap-4">
                <div className="text-gold text-3xl">✓</div>
                <p className="font-display text-[1.5rem] font-light text-ivory">Thank you.</p>
                <p className="font-body text-[13px] text-ivory-muted">
                  We'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="font-body text-[10px] tracking-[2px] uppercase text-gold-dark font-semibold block mb-2">
                      First Name
                    </label>
                    <input type="text" placeholder="James" required />
                  </div>
                  <div>
                    <label className="font-body text-[10px] tracking-[2px] uppercase text-gold-dark font-semibold block mb-2">
                      Last Name
                    </label>
                    <input type="text" placeholder="Reeves" required />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="font-body text-[10px] tracking-[2px] uppercase text-gold-dark font-semibold block mb-2">
                    Email
                  </label>
                  <input type="email" placeholder="hello@example.com" required />
                </div>

                <div className="mb-4">
                  <label className="font-body text-[10px] tracking-[2px] uppercase text-gold-dark font-semibold block mb-2">
                    I'm interested in
                  </label>
                  <select>
                    <option value="">Select an option</option>
                    <option>Essential Membership</option>
                    <option>Performance Membership</option>
                    <option>Elite Membership</option>
                    <option>Free Tour</option>
                    <option>Trial Session</option>
                    <option>Corporate Enquiry</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="font-body text-[10px] tracking-[2px] uppercase text-gold-dark font-semibold block mb-2">
                    Message (optional)
                  </label>
                  <textarea rows={4} placeholder="Tell us a little about your goals…" />
                </div>

                <BtnPrimary className="w-full text-center" onClick={handleSubmit}>
                  {loading ? 'Sending…' : 'Send Enquiry'}
                </BtnPrimary>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
