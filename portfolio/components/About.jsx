import styles from '../styles/About.module.scss'
import Image from 'next/image'
import Button from '../components/Button'

const About = () => {
  const aboutTitle = 'Who am I?'
  const aboutText = `
  A jack of many trades, master of some. Throughout the years I’ve
  worked for a wide range of companies and clients, picking up multiple
  creative and technical disciplines along the way. `

  const whatText = `
  I offer a one-stop
  solution to bring your creative vision to life through clear
  communication, heart for your goals and a ton of experience.
  Have a look for yourself and enjoy your stay on my website.
  `

  const aboutImages = ['profile.jpg', 'me-drawing.png', 'me-guitar.png']

  const aboutButton = { link: '#', text: 'Download my resume' }

  return (
    <div className="flex flex-col md:flex-row gap-4 max-w-7xl">
      <div className="flex-1 flex flex-col items-start justify-start py-12 order-2 md:order-1">
        <h2 className="mb-2 text-3xl">{aboutTitle}</h2>
        <p className="mb-4">{aboutText}</p>
        <p>{whatText}</p>

        <div className="flex sm:flex-row md:flex-col lg:flex-row gap-2 lg:gap-4 pt-4 lg:pt-8">
          <Button link={aboutButton.link}>{aboutButton.text}</Button>
          <Button link="#">View my Portfolio</Button>
        </div>
      </div>

      <div
        className={`flex-1 flex items-center justify-center md:justify-end py-12  order-1 md:order-2 ${styles.imageGroup}`}
      >
        {aboutImages.map((image, index) => {
          return (
            <div key={index} className={`${styles.imageContainer}`}>
              <Image src={`/${image}`} className={styles.image} layout="fill" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default About
