import { useState } from 'react'
import Logo from '../components/Logo'
import styles from '../styles/HeaderNav.module.scss'
import cx from 'classnames'

export default function HeaderNav({ items }) {
  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMenu() {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className={`flex h-16 ${styles.header}`}>
      <div className={`container flex items-center justify-between`}>
        <a href="/">
          <Logo color="white" />
        </a>
        <nav>
          <div
            className={cx(
              'sm:hidden',
              styles.hamburgerIcon,
              menuOpen && styles.hamburgerIconActive
            )}
            onClick={toggleMenu}
          >
            <span className={`${styles.hamburgerIconLine}`}></span>
            <span className={`${styles.hamburgerIconLine}`}></span>
          </div>
          <ul
            className={`${!menuOpen ? 'hidden' : ''}
              absolute
              z-10
              right-0
              w-48 
            bg-black
              pt-1
              pb-6
              mt-2
              gap-4
              sm:w-auto
              sm:bg-transparent
              sm:p-0
              sm:mt-0
              sm:static
              sm:flex
            `}
          >
            {items.map((item, index) => {
              return (
                <li className={`text-right py-3 px-8 sm:px-2`} key={index}>
                  <a href={item.url} title={item.title}>
                    {item.title}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
