import Logo from '../components/Logo'
import styles from '../styles/Hero.module.scss'

const Hero = () => {
  return (
    <div
      className={`flex flex-col items-center justify-center h-screen ${styles.hero}`}
    >
      <video
        className={`${styles.heroVideo}`}
        src="swirls-chips.mp4"
        muted
        autoPlay
        loop
      ></video>

      <div
        className={`flex flex-col items-center justify-center relative pt-14 ${styles.heroContent}`}
      >
        <Logo size={3} />
        <h1 className="mt-14 text-4xl text-red">GizmoStudios</h1>
        <p>Art & Development</p>
      </div>
    </div>
  )
}

export default Hero
