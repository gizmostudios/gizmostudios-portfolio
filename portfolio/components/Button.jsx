import Link from 'next/link'
import styles from '../styles/Button.module.scss'

const Button = ({
  link,
  children,
  className,
  transparent,
  borderColor,
  target,
  onClick,
  innerHtml,
}) => {
  const classes = `
    px-4
    py-3
    flex
    items-center
    justify-center
    ${!transparent && 'bg-primary-default'}
    rounded-lg
    ${!transparent && 'border-b-4'}
    ${borderColor ? 'border-' + borderColor : 'border-primary-dark'}
    ${borderColor && 'border-2'}
    hover:bg-primary-600
    transition-colors
    ${className || ''}
  `

  return link ? (
    <Link href={link}>
      <a
        target={target}
        className={classes}
        dangerouslySetInnerHTML={innerHtml ? { __html: innerHtml } : null}
      >
        {children}
      </a>
    </Link>
  ) : (
    <button
      className={classes}
      onClick={onClick}
      dangerouslySetInnerHTML={innerHtml ? { __html: innerHtml } : null}
    >
      {children}
    </button>
  )
}

const ButtonGroup = ({ className, children }) => {
  return (
    <div
      className={`flex items-center justify-center ${styles.buttonGroup} ${
        className || ''
      }`}
    >
      {children}
    </div>
  )
}

export default Button
export { ButtonGroup }
