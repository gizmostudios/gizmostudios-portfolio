const Title = ({ children, size, className, spacing, color }) => {
  const textSize = ['text-5xl', 'text-4xl', 'text-2xl', 'text-1xl'][
    size - 1 || 0
  ]
  const textColor = color ? `text-${color}` : 'text-primary-600'
  const CustomTag = `h${size || 1}`
  const marginBottom = spacing ? `mb-${spacing}` : `mb-4`

  return (
    <CustomTag
      className={`${textSize} ${textColor} ${className || ''} ${marginBottom}`}
    >
      {children}
    </CustomTag>
  )
}

export default Title
