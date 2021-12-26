import styles from '../styles/Modal.module.scss'
import Button, { ButtonGroup } from '../components/Button'

const Modal = ({ title, children, open, onClose, onPrev, onNext }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen ${styles.modalWrapper}`}
    >
      <div
        className="absolute top-0 left-0 w-screen h-screen bg-black opacity-80"
        onClick={onClose}
      />

      <div className="absolute left-0 bottom-0 w-full">
        <div className="container">
          <div className="rounded-t-md overflow-hidden">
            <header className="flex items-center justify-between relative bg-primary-default px-4 py-2">
              <h2>{title}</h2>

              <ButtonGroup className="">
                {[
                  { func: onPrev, label: '&lt;' },
                  { func: onNext, label: '&gt;' },
                  { func: onClose, label: '&times;' },
                ].map((btn, index) => {
                  return (
                    <Button
                      onClick={btn.func}
                      innerHtml={btn.label}
                      borderColor="primary-dark"
                    />
                  )
                })}
              </ButtonGroup>
            </header>

            <div
              className="bg-gray-800 px-4 py-4"
              style={{
                minHeight: `calc(100vh - 15rem)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
