import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>A jack of many trades, master of some. I embody art and technology, where I'm equally equipped to do front-end development as wel as ux/ui design and illustration work. I’ve studied at the Graphic Lyceum, High School of Arts and the Gerrit Rietveld Academy in the Netherlands. Throughout the years I’ve worked for a wide range of companies and clients, picking up multiple creative and technical disciplines along the way.</p>
        <hr/>
        <p>
          Have a look around and enjoy your stay!
        </p>
      </section>
    </Layout>
  )
}