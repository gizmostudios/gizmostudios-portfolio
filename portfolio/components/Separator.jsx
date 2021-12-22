import styles from '../styles/Separator.module.scss'

const Line = ({ rotation, left, right }) => {
  return (
    <svg
      width="900"
      viewBox="0 0 900 100"
      className={`absolute ${styles.line}`}
      style={{
        transform: rotation && `rotate(${rotation}deg)`,
        top: -20,
        left: left && `${left}px`,
        right: right && `${right}px`,
      }}
    >
      <g>
        <path
          d="M0,50l750,0l50,-30l50,30"
          style={{
            fill: 'none',
            stroke: 'rgba(255,255,255,.3)',
            strokeWidth: '2px',
          }}
        />
      </g>
    </svg>
  )
}

const Separator = () => {
  return (
    <div className="container flex py-10 overflow-hidden">
      <div className="flex-1 h-12 relative">
        <Line right="-100" />
      </div>
      <div className="flex-1 h-12 relative">
        <Line left="-100" rotation="180" />
      </div>
    </div>
  )
}

export default Separator
