import { FC } from 'react'
import Link from 'next/link'

const Footer: FC = () => {
  return (
    <footer className="bg-eggshell border-t border-black/10 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid gap-8 md:grid-cols-3 text-sm">
        <div>
          <h3 className="font-semibold text-brand mb-4">EJ Signs</h3>
          <p className="text-foreground/70 leading-relaxed">
            Fast, affordable, and high-quality screen printing & embroidery services
            for businesses and organizations.
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Contact</h4>
          <address className="not-italic text-foreground/70 leading-loose">
            711 W Fullerton Ave STE D<br />
            Addison, IL 60101<br />
            <Link href="tel:6305194490" className="hover:underline">
              (630) 519-4490
            </Link>
            <br />
            <Link href="mailto:info@eandjscreenprinting.com" className="hover:underline">
              info@eandjscreenprinting.com
            </Link>
          </address>
        </div>
        <div>
          <h4 className="font-medium mb-2">Hours</h4>
          <p className="text-foreground/70 leading-loose">
            Monday – Friday: 7am – 4pm
          </p>
          <h4 className="font-medium mb-2 mt-6">Follow Us</h4>
          <div className="flex gap-4 mt-2">
            <Link href="#" aria-label="Facebook" className="hover:text-brand-accent">
              FB
            </Link>
            <Link href="#" aria-label="LinkedIn" className="hover:text-brand-accent">
              LI
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-brand-accent">
              IG
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center text-xs py-4 border-t border-black/10 bg-eggshell">
        © {new Date().getFullYear()} EJ Signs. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer 