import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import HeaderNav from '../components/HeaderNav'
import Button from '../components/Button'
import Card from '../components/Card'
import Tag from '../components/Tag'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import Project from '../components/Project'

import menuItems from '../constants/menuItems'
import portfolioItems from '../constants/portfolioItems'
import styles from '../styles/Portfolio.module.scss'

const basePath = '/projects'

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('')
  const [modalContents, setModalContents] = useState('')

  const handleCardClick = (cardIndex) => {
    const currentItem = portfolioItems[cardIndex]

    setModalTitle(currentItem.title)
    setModalContents(
      <Project
        path={`${basePath}/${currentItem.path}`}
        video={currentItem.video}
        title={currentItem.title}
        date={currentItem.date}
      />
    )
    setModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const handleModalClose = () => {
    setModalOpen(false)
    document.body.style.overflow = 'visible'
  }

  return (
    <div>
      <Head>
        <title>GizmoStudios - Portfolio</title>
        <meta name="description" content="GizmoStudios Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!modalOpen && (
        <div className={`animate-fadeIn ${styles.backgroundVideoContainer}`}>
          <video
            className={styles.backgroundVideo}
            src="/swirls-chips.mp4"
            autoPlay
            muted
            loop
          />
        </div>
      )}

      <HeaderNav items={menuItems} />

      <div className="container relative pt-28 pb-8 min-h-screen">
        <h1 className="text-5xl mb-10">Portfolio</h1>

        <h2 className="text-3xl mb-5">Illustrations</h2>

        <Button
          className="mb-4"
          link="https://instagram.com/gizmostudios"
          target="_blank"
          icon="instagram"
          autoWidth
        >
          Visit my Instagram page
        </Button>

        <h2 className="text-3xl mb-4">Clients</h2>

        <div
          className={`
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          gap-4
        `}
        >
          {portfolioItems.map((item, index) => {
            return (
              <Card
                key={index}
                className="max-w-sm"
                image={`${basePath}/${item.path}/${item.thumbnail}`}
                onClick={() => handleCardClick(index)}
              >
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

      {modalOpen && (
        <Modal title={modalTitle} onClose={handleModalClose}>
          {modalContents}
        </Modal>
      )}
    </div>
  )
}

export default Portfolio
