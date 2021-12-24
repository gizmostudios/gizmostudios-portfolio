import { useState } from 'react'
import Link from 'next/link'
import Logo from '../components/Logo'
import styles from '../styles/HeaderNav.module.scss'
import cx from 'classnames'

export default function HeaderNav({ items }) {
  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMenu() {
    console.log('toggle')
    setMenuOpen(!menuOpen)
  }

  return (
    <header className={`flex h-16 ${styles.header}`}>
      <div className={`container flex items-center justify-between`}>
        <Link href="/">
          <a>
            <Logo color="white" />
          </a>
        </Link>
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
              flex
              flex-col
              justify-center
              absolute
              z-10
              right-0
              w-full
              h-screen
            bg-black
              pt-1
              pb-6
              mt-2
              gap-4
              sm:flex
              sm:flex-row
              sm:w-auto
              sm:h-auto
              sm:bg-transparent
              sm:p-0
              sm:mt-0
              sm:static
            `}
          >
            {items.map((item, index) => {
              return (
                <li
                  className={`text-center py-4 px-8 sm:px-2 text-2xl sm:text-base`}
                  key={index}
                >
                  <Link href={item.url} title={item.title}>
                    <a onClick={menuOpen && toggleMenu}>{item.title}</a>
                  </Link>
                </li>
              )
            })}
            <li className="sm:hidden h-16"></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
