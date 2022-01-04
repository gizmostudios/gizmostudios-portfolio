import Link from 'next/link'
import styles from '../styles/Button.module.scss'

const Button = ({
  autoWidth,
  link,
  children,
  className,
  transparent,
  borderColor,
  target,
  onClick,
  innerHtml,
  icon,
}) => {
  const classes = `
    px-4
    py-3
    items-center
    justify-center
    rounded-lg
    hover:bg-primary-600
    transition-colors
    ${autoWidth ? 'inline-flex' : 'flex'}
    ${!transparent && 'bg-primary-default'}
    ${!transparent && 'border-b-4'}
    ${borderColor ? 'border-' + borderColor : 'border-primary-dark'}
    ${borderColor ? 'border-2' : ''}
    ${className || ''}
  `

  const iconTag = icon ? (
    <img src={`/icons/${icon}.svg`} className="invert w-6 ml-3" />
  ) : null

  return link ? (
    <Link href={link}>
      <a
        target={target}
        className={classes}
        dangerouslySetInnerHTML={innerHtml ? { __html: innerHtml } : null}
      >
        {children}
        {iconTag}
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
