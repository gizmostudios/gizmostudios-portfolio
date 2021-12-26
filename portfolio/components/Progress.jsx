const Progress = ({ value }) => {
  return (
    <div className="w-full" style={{ background: `rgba(255, 255, 255, 0.15)` }}>
      <div
        className="w-full h-1 bg-primary-default origin-left"
        style={{ transform: `scaleX(${value})` }}
      ></div>
    </div>
  )
}

export default Progress
