import Image from 'next/image'
import styles from '../styles/Portfolio.module.scss'

const Card = ({ image, children }) => {
  return (
    <div
      className={`
      bg-white
      text-black
      rounded-lg
      overflow-hidden
      ${styles.thumbnail}
    `}
    >
      <div className="relative w-full aspect-square">
        <Image src={image} layout="fill" />
      </div>
      <div className={`p-4 ${styles.cardDescription}`}>{children}</div>
    </div>
  )
}

export default Card
