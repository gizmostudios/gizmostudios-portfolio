const Tag = ({ children }) => {
  return (
    <span
      className={`
        border-2
        border-secondary-default
        text-secondary-default
        text-xs
        px-3
        py-1
        rounded-md
      `}
      style={{ fontWeight: 600 }}
    >
      {children}
    </span>
  )
}

export default Tag
