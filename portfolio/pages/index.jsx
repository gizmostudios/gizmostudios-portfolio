import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import Separator from '../components/Separator'
import HeaderNav from '../components/HeaderNav'
import Hero from '../components/Hero'
import About from '../components/About'
import Toolbox from '../components/Toolbox'
import Footer from '../components/Footer'

import menuItems from '../constants/menuItems'

const Home = () => {
  return (
    <>
      <Head>
        <title>GizmoStudios</title>
        <meta name="description" content="GizmoStudios Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <a
        href="#about"
        className={`px-4 py-2 bg-primary-default rounded-b-md text-white ${styles.skipContentButton}`}
      >
        Skip to content
      </a>

      <HeaderNav items={menuItems} />

      <Hero id="home" />

      <Separator />

      <main className={`container ${styles.main}`}>
        <About id="about" />
        <Toolbox />

        <Separator />
      </main>

      <Footer />
    </>
  )
}

export default Home
