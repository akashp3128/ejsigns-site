import { FC } from 'react'
import SectionHeading from './SectionHeading'
import Link from 'next/link'

const ContactSection: FC = () => (
  <section id="contact" className="py-24 sm:py-32">
    <SectionHeading title="Get in Touch">
      Ready to start your next project? Drop us a line and we’ll respond within one business day.
    </SectionHeading>
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <form className="grid gap-6">
        <div className="grid md:grid-cols-2 gap-6">
          <input type="text" name="name" placeholder="Name" required className="border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 bg-transparent" />
          <input type="email" name="email" placeholder="Email" required className="border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 bg-transparent" />
        </div>
        <input type="tel" name="phone" placeholder="Phone" className="border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 bg-transparent" />
        <textarea name="message" placeholder="Project details" rows={5} className="border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 bg-transparent" />
        <button type="submit" className="inline-flex items-center justify-center transition-colors rounded-full font-medium text-base h-12 px-8 bg-brand-accent text-white hover:bg-brand-accent/90">
          Send Message
        </button>
      </form>
      <p className="text-center text-xs text-foreground/60 mt-4">
        Or call us at <Link href="tel:6305194490" className="underline">(630) 519-4490</Link>
      </p>
    </div>
  </section>
)

export default ContactSection 