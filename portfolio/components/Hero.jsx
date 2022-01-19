import Logo from '../components/Logo'
import Title from '../components/Title'
import styles from '../styles/Hero.module.scss'

const Hero = ({ id }) => {
  return (
    <div
      id={id}
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
        <Title size="1" className="mt-14" spacing="2" color="white">
          GizmoStudios
        </Title>
        <p>Art & Tech</p>
      </div>
    </div>
  )
}

export default Hero
