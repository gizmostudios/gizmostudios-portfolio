// import Image from 'next/image'

const footerItems = [
  {
    title: 'LinkedIn',
    icon: 'linkedin',
    link: '//www.linkedin.com/in/elbertjan/',
  },
  {
    title: 'GitHub',
    icon: 'github',
    link: '//github.com/gizmostudios',
    scale: 1.3,
  },
  {
    title: 'Instagram',
    icon: 'instagram',
    link: '//www.instagram.com/gizmostudios/',
  },
  {
    title: 'Telegram',
    icon: 'telegram',
    link: '//t.me/gizmostudios',
  },
  {
    title: 'Telephone',
    icon: 'call',
    link: 'tel:+31685019249',
  },
  {
    title: 'E-mail',
    icon: 'envelope',
    link: 'mailto:bert@gizmostudios.net',
  },
]

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-primary-default">
      <div className="container py-20">
        <h2 className="text-4xl mb-8">Get in touch!</h2>

        <ul className="columns-2 lg:columns-3 max-w-xl">
          {footerItems.map((item, index) => {
            return (
              <li className="py-3" key={index}>
                <a href={item.link}>
                  <div className="flex items-center" key={index}>
                    <div
                      className="relative w-6 h-6 sm:w-8 sm:h-8"
                      style={{ transform: `scale(${item.scale || 1})` }}
                    >
                      <img
                        className="invert"
                        layout="fill"
                        src={`/icons/${item.icon}.svg`}
                      />
                    </div>
                    <p className="pl-3 sm:text-lg">{item.title}</p>
                  </div>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
      <hr className="border-white opacity-30" />
      <div className="container flex items-center justify-center py-2 opacity-60">
        <span
          className={`text-xl mr-2`}
          style={{ transform: 'translateY(2px)' }}
        >
          ©
        </span>
        <span>GizmoStudios 2021</span>
      </div>
    </footer>
  )
}

export default Footer
