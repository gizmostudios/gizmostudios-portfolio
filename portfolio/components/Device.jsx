import styles from '../styles/Device.module.scss'

const Device = ({ className, type, image }) => {
  return (
    <div className={`bg-black ${styles.device} ${styles[type]} ${className}`}>
      <div className={styles.camera} />
      <img src={image} />
    </div>
  )
}

export default Device
