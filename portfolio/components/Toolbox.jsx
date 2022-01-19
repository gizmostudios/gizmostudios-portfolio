import { useState } from 'react'
import styles from '../styles/Skillset.module.scss'
import Progress from './Progress'
import Title from '../components/Title'
import toolboxItems from '../constants/toolboxItems'

const Icons = ({ icons }) => {
  const path = '/icons'

  return icons.map((icon, iconIndex) => {
    return (
      <div
        key={iconIndex}
        className="w-20 mb-4 inline-flex flex-col justify-between items-center flex-none"
        style={{ height: '5rem' }}
      >
        <div
          className="flex-none h-14"
          style={{ transform: `scale(${icon.scale || 1})` }}
        >
          <img
            className="invert"
            src={`${path}/${icon.file}.svg`}
            width="48"
            height="48"
          />
        </div>
        <p className="text-center text-white opacity-40">{icon.title}</p>
      </div>
    )
  })
}

const Toolbox = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1)

  const handleRowClick = (event, newIndex) => {
    setSelectedIndex(newIndex != selectedIndex ? newIndex : -1)
  }

  return (
    <div>
      <Title size="2">Toolbox</Title>

      <div
        className={`flex flex-col md:flex-row md:gap-8 ${styles.skillColumns}`}
      >
        {toolboxItems.map((column, colIndex) => {
          return (
            <ul className="flex-1" key={colIndex}>
              {column.map((skill, index) => {
                const itemIndex = `${colIndex}:${index}`
                return (
                  <li
                    key={`${colIndex}:${index}`}
                    className=" mb-4 cursor-pointer relative select-none"
                    onClick={(event) => handleRowClick(event, itemIndex)}
                  >
                    <div className={`absolute ${styles.foldIndicator}`}>
                      {itemIndex == selectedIndex ? '-' : '+'}
                    </div>
                    <h3 className="text-xl mb-1">{skill.title}</h3>
                    {skill.value && <Progress value={skill.value} />}

                    {itemIndex == selectedIndex && (
                      <div className="px-0 py-8 flex flex-wrap justify-start">
                        <Icons icons={skill.icons} />
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          )
        })}
      </div>
    </div>
  )
}

export default Toolbox
