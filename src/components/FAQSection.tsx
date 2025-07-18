import { FC } from 'react'
import SectionHeading from './SectionHeading'

const faqs = [
  {
    q: 'What is your minimum order quantity?',
    a: 'We can accommodate orders as small as 24 pieces, though pricing is optimized for larger quantities.'
  },
  {
    q: 'Do you provide design services?',
    a: 'Yes, our in-house designers can help refine your artwork or create a design from scratch for an additional fee.'
  },
  {
    q: 'How long is your turnaround time?',
    a: 'Standard production is 7-10 business days after artwork approval and garment receipt. Rush options are available.'
  },
  {
    q: 'Can I supply my own garments?',
    a: 'Absolutely! You can provide blanks or choose from our trusted suppliers.'
  },
]

const FAQSection: FC = () => (
  <section id="faq" className="py-24 sm:py-32 bg-eggshell">
    <SectionHeading title="Frequently Asked Questions" />
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
      {faqs.map(({ q, a }) => (
        <details key={q} className="group border border-black/10 dark:border-white/10 rounded-lg p-4">
          <summary className="cursor-pointer font-medium text-brand flex items-center justify-between">
            {q}
            <span className="ml-2 text-brand-accent group-open:rotate-45 transition-transform">+</span>
          </summary>
          <p className="mt-2 text-foreground/80 leading-relaxed">
            {a}
          </p>
        </details>
      ))}
    </div>
  </section>
)

export default FAQSection 