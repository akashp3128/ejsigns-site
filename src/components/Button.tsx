import { FC, ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

const styles = {
  base: 'inline-flex items-center justify-center transition-colors rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-6',
  primary:
    'bg-brand-accent text-white hover:bg-brand-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent',
  secondary:
    'bg-transparent border border-brand-accent text-brand-accent hover:bg-brand-accent/10',
}

const Button: FC<ButtonProps> = ({ variant = 'primary', className, ...props }) => {
  return <button className={clsx(styles.base, styles[variant], className)} {...props} />
}

export default Button 