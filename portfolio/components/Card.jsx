// import Image from 'next/image'
import styles from '../styles/Card.module.scss'

const Card = ({ image, className, children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
        bg-white
        text-black
        rounded-lg
        overflow-hidden
        border-4
        border-black
        hover:scale-105
        hover:shadow-xl
        hover:z-50
        hover:border-white
        cursor-pointer
        transition-transform
        ${className}
      `}
    >
      <div className="relative w-full aspect-square">
        <img src={image} layout="fill" />
      </div>
      <div className={`p-4 ${styles.cardDescription}`}>{children}</div>
    </div>
  )
}

export default Card
