import styles from '../styles/About.module.scss'
// import Image from 'next/image'
import Button from '../components/Button'

const About = ({ id }) => {
  const aboutTitle = 'About me'
  const aboutText = [
    `
    Hi, my name is Bert. A jack of many trades, master of some. Throughout the years I’ve
    worked for a wide range of companies and clients, picking up multiple
    creative and technical disciplines along the way.
  `,
    `
    I offer a one-stop solution for bringing your creative vision to life.
    With clear communication, creativity and heart for your goals.
    Have a look around and I wish you a great stay on my website.
  `,
  ]

  const aboutImages = ['profile.jpg', 'me-drawing.jpg', 'me-computer.jpg']

  const buttons = [
    {
      link: '/portfolio',
      text: 'View my portfolio',
    },
    {
      link: '/GizmoStudios-CV-2021-v3.pdf',
      text: 'Download my CV',
      target: '_blank',
    },
  ]

  return (
    <div id={id} className="flex flex-col md:flex-row gap-4 max-w-7xl pt-8">
      <div className="flex-1 flex flex-col items-start justify-start py-12 order-2 md:order-1">
        <h2 className="mb-4 text-4xl">{aboutTitle}</h2>
        {aboutText.map((text, index) => {
          return (
            <p key="index" className="mb-4">
              {text}
            </p>
          )
        })}

        <div className="flex sm:flex-row md:flex-col lg:flex-row gap-2 lg:gap-4 pt-4 lg:pt-8">
          {buttons.map((button, index) => {
            return (
              <Button key={index} link={button.link} target={button.target}>
                {button.text}
              </Button>
            )
          })}
        </div>
      </div>

      <div
        className={`flex-1 flex items-center justify-center md:justify-end py-12  order-1 md:order-2 ${styles.imageGroup}`}
      >
        {aboutImages.map((image, index) => {
          return (
            <div
              key={index}
              className={`border-2 border-white rounded-lg ${styles.imageContainer}`}
            >
              <img
                src={`/${image}`}
                className={`${styles.image}`}
                layout="fill"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default About
