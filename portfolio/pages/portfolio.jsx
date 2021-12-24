import Head from 'next/head'
import HeaderNav from '../components/HeaderNav'
import Card from '../components/Card'
import Tag from '../components/Tag'
import Footer from '../components/Footer'

import menuItems from '../constants/menuItems'
import portfolioItems from '../constants/portfolioItems'
import styles from '../styles/Portfolio.module.scss'

const basePath = '/projects'

const Portfolio = () => {
  return (
    <div>
      <Head>
        <title>GizmoStudios - Portfolio</title>
        <meta name="description" content="GizmoStudios Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <video
        className={styles.backgroundVideo}
        src="/swirls-chips.mp4"
        autoPlay
        muted
        loop
      />

      <HeaderNav items={menuItems} />

      <div className="container relative pt-28 pb-8 min-h-screen">
        <h1 className="text-5xl mb-10">Portfolio</h1>
        <h2 className="text-3xl mb-5">Clients</h2>

        <div
          className={`
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          gap-4
        `}
        >
          {portfolioItems.map((item, index) => {
            return (
              <Card image={`${basePath}/${item.path}/${item.thumbnail}`}>
                <h3 className="text-lg mb-2">{item.title}</h3>
                <div className="flex flex-wrap gap-1">
                  {item.tags &&
                    item.tags.map((tag, tagIndex) => {
                      return <Tag key={tagIndex}>{tag}</Tag>
                    })}
                </div>
              </Card>
            )
          })}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Portfolio
