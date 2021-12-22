import styles from '../styles/Logo.module.scss'

export default function Logo({ className, size, color }) {
  return (
    <div
      style={{ transform: `scale(${size || 1})` }}
      className={`${styles.logo} ${className || ''}`}
    >
      <div
        className={`border-2 ${
          color ? 'border-' + color : 'border-primary-default'
        } ${styles.tile}`}
      ></div>
      <div
        className={`border-2 ${
          color ? 'border-' + color : 'border-primary-600'
        } ${styles.tile}`}
      ></div>
    </div>
  )
}
