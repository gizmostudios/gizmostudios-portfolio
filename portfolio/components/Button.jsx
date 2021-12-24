import Link from 'next/link'

const Button = ({ link, children, className, target }) => {
  return (
    <Link href={link}>
      <a
        target={target}
        className={`
          px-4
          py-3
          flex
          items-center
          justify-center
          bg-primary-default
          rounded-lg
          border-b-4
          border-primary-dark
          hover:bg-primary-600
          transition-colors
          ${className || ''}
        `}
      >
        {children}
      </a>
    </Link>
  )
}

export default Button
