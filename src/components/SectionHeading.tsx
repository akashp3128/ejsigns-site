import { FC, ReactNode } from 'react'
import clsx from 'clsx'

interface SectionHeadingProps {
  title: string
  className?: string
  children?: ReactNode
}

const SectionHeading: FC<SectionHeadingProps> = ({ title, className, children }) => (
  <div className={clsx('text-center mb-12 max-w-3xl mx-auto', className)}>
    <h2 className="text-3xl sm:text-4xl font-bold text-brand mb-4">{title}</h2>
    {children && <p className="text-foreground/70 text-lg leading-relaxed">{children}</p>}
  </div>
)

export default SectionHeading 