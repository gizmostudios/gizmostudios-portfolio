import { useState } from 'react'
import styles from '../styles/Skillset.module.scss'
import Image from 'next/image'
// import Button from '../components/Button'
import Progress from '../components/Progress'

const skillData = [
  [
    {
      title: 'Web Development',
      value: 0.85,
      icons: [
        { title: 'HTML5', file: 'html5' },
        { title: 'CSS3', file: 'css3' },
        { title: 'Pug', file: 'pug' },
        { title: 'SASS', file: 'sass' },
        { title: 'Tailwind', file: 'tailwind' },
        { title: 'Javascript', file: 'javascript' },
        { title: 'Typescript', file: 'typescript' },
        { title: 'ES6', file: 'es6' },
        { title: 'React', file: 'react' },
        { title: 'Node', file: 'node' },
        { title: 'Gulp', file: 'gulp' },
        { title: 'Grunt', file: 'grunt' },
        { title: 'Wordpress', file: 'wordpress' },
        { title: 'PHP', file: 'php' },
        { title: 'mySQL', file: 'mysql' },
        { title: 'Git', file: 'git-branch' },
      ],
    },
    {
      title: 'UX/UI',
      value: 0.8,
      icons: [
        { title: 'Sketch', file: 'sketch' },
        { title: 'Figma', file: 'figma' },
        { title: 'Principle', file: 'principle' },
        { title: 'Codepen', file: 'codepen' },
        { title: 'By hand', file: 'draw' },
      ],
    },
    {
      title: 'Graphic Design & Illustration',
      value: 0.75,
      icons: [
        { title: 'Affinity Designer', file: 'affinity-designer' },
        { title: 'Photoshop', file: 'photoshop' },
        { title: 'Procreate', file: 'procreate' },
        { title: 'By hand', file: 'draw' },
      ],
    },
    {
      title: '2D/3D Animation',
      value: 0.7,
      icons: [
        { title: 'After Effects', file: 'after-effects' },
        { title: 'Blender', file: 'blender' },
        { title: '3Ds MAX', file: '3dsmax' },
        { title: 'Video mapping', file: 'projector' },
      ],
    },
  ],
  [
    {
      title: 'Film & Photography',
      value: 0.6,
      icons: [
        { title: 'DaVinci Resolve', file: 'davinci-resolve' },
        { title: 'Premiere', file: 'premiere' },
        { title: 'Lightroom', file: 'lightroom' },
        { title: 'Digital', file: 'mirrorless', scale: 1.5 },
        { title: 'Analogue', file: 'film' },
      ],
    },
    {
      title: 'Music Production',
      value: 0.55,
      icons: [
        { title: 'Logic Pro', file: 'logicpro' },
        { title: 'Ableton Live', file: 'live' },
        { title: 'Piano', file: 'piano' },
        { title: 'Guitar', file: 'guitar' },
        { title: 'Singing', file: 'mic' },
      ],
    },
    {
      title: 'Project & team management',
      value: 0.5,
      icons: [
        { title: 'Jira', file: 'jira' },
        { title: 'Agile/SCRUM', file: 'agile' },
        { title: 'Live drawing', file: 'whiteboard' },
      ],
    },
    {
      title: 'Misc',
      icons: [
        { title: 'Computer repairs', file: 'repair' },
        { title: 'Carpetry', file: 'saw' },
        { title: 'Sculpting', file: 'clay' },
      ],
    },
  ],
]

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
          <Image
            className="invert"
            src={`${path}/${icon.file}.svg`}
            width="48"
            height="48"
            unoptimized
          />
        </div>
        <p className="text-center text-white opacity-40">{icon.title}</p>
      </div>
    )
  })
}

const Skillset = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1)

  const handleRowClick = (event, newIndex) => {
    setSelectedIndex(newIndex != selectedIndex ? newIndex : -1)
  }

  return (
    <div>
      <h2 className="mb-2 text-3xl">Skillset</h2>

      <div
        className={`flex flex-col md:flex-row md:gap-8 ${styles.skillColumns}`}
      >
        {skillData.map((column, colIndex) => {
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

export default Skillset
