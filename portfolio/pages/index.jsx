import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import Separator from '../components/Separator'
import HeaderNav from '../components/HeaderNav'
import Hero from '../components/Hero'
import About from '../components/About'
import Skillset from '../components/Skillset'

export default function Home() {
  const menuItems = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/#about' },
    { title: 'Services', url: '/#services' },
    { title: 'Portfolio', url: '/portfolio' },
    { title: 'Contact', url: '/#contact' },
  ]

  return (
    <>
      <Head>
        <title>GizmoStudios</title>
        <meta name="description" content="GizmoStudios Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderNav items={menuItems} />

      <Hero />

      <main className={`container ${styles.main}`}>
        <Separator />
        <About />

        <Skillset />
      </main>
    </>
  )
}
