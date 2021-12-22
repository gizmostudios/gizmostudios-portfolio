const Button = ({ link, children, className }) => {
  return (
    <a
      href={link || '#'}
      className={`
        px-4 py-3
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
  )
}

export default Button
