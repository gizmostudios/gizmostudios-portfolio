import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import classnames from 'classnames'

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0)

  const handleNavItemClick = (id) => {
    setCurrentPage(id)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>GizmoStudios</title>
        <meta name="description" content="GizmoStudios Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>GizmoStudios</h1>
        <p>Art & Technology</p>

        <nav>
          <ul>
            <li>
              <h2>Work</h2>
              <ul>
                {[
                  'web design',
                  'illustrations',
                  'animations',
                  'photographs',
                  'installations',
                ].map((name, index) => {
                  return (
                    <li key={index}>
                      <a
                        className={classnames(
                          styles.navitem,
                          currentPage == index && styles.active
                        )}
                        onClick={() => handleNavItemClick(index)}
                      >
                        {name}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </li>
            <li>
              <h2>About</h2>
            </li>
            <li>
              <h2>Contact</h2>
            </li>
          </ul>
        </nav>
      </main>
    </div>
  )
}
