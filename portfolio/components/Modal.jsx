import { useState } from 'react'
import styles from '../styles/Modal.module.scss'
import Button, { ButtonGroup } from '../components/Button'

const Modal = ({ title, children, onClose, onPrev, onNext }) => {
  const [modalIsClosing, setModalIsClosing] = useState(false)

  const closeModal = () => {
    setModalIsClosing(true)

    setTimeout(() => {
      setModalIsClosing(false)
      onClose()
    }, 300)
  }

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen ${styles.modalWrapper}`}
    >
      <div
        className={`absolute top-0 left-0 w-screen h-screen bg-shade-80 ${
          modalIsClosing ? 'animate-fadeOut' : 'animate-fadeIn'
        }`}
        onClick={closeModal}
      />

      <div
        className="w-screen sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl absolute bottom-0 left-1/2"
        style={{ transform: 'translateX(-50%)' }}
      >
        <div
          className={`rounded-t-md overflow-hidden ${
            modalIsClosing ? 'animate-slidedown' : 'animate-slideup'
          }`}
        >
          <header className="flex items-center justify-start sm:justify-center relative bg-primary-default px-4 py-5">
            <h2 className="text-2xl">{title}</h2>

            <ButtonGroup className="absolute right-3">
              {[
                { func: onPrev, label: '&lt;' },
                { func: onNext, label: '&gt;' },
                { func: closeModal, label: '&times;' },
              ].map((btn, index) => {
                return (
                  <Button
                    key={index}
                    onClick={btn.func}
                    innerHtml={btn.label}
                    borderColor="primary-dark"
                  />
                )
              })}
            </ButtonGroup>
          </header>

          <div
            className="bg-gray-800 overflow-y-auto"
            style={{
              height: `calc(100vh - 13.5rem)`,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
