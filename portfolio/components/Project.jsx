// import { useState } from 'react'

import Device from './Device'
import Tag from './Tag'

const Project = ({ data, root }) => {
  const rootPath = root || '/projects'
  const path = `${rootPath}/${data.path}`

  if (!data.description) {
    return (
      <div className="p-4">
        <h2 className="text-4xl mb-4">Coming soon...</h2>
        <p>Work is still being done on the details. Come back soon for more!</p>
      </div>
    )
  }

  const info = [
    {
      title: 'Techniques',
      value: data.icons.map((icon, index) => {
        return (
          <img
            key={index}
            className="invert h-10 w-10"
            src={`/icons/${icon}.svg`}
          />
        )
      }),
    },
    {
      title: 'Tags',
      value: data.tags.map((tag, index) => {
        return <Tag key={index}>{tag}</Tag>
      }),
    },
    {
      title: 'Year',
      value: <Tag>{data.year}</Tag>,
    },
  ]

  return (
    <div className="pb-10">
      <div
        className="bg-black flex justify-center"
        style={{ minHeight: 500, maxHeight: 650 }}
      >
        {data.heroVideo && (
          <video
            src={`${path}/${data.heroVideo}`}
            loop
            autoPlay
            muted
            controls
            width="100%"
          />
        )}

        {data.heroImage && (
          <figure>
            <img src={data.heroImage} width="100%" height="auto" />
          </figure>
        )}
      </div>

      <article className="p-4 sm:p-8 flex flex-col sm:flex-row gap-4">
        <div className="flex-2">
          <h2 className="text-4xl h-14">{data.title}</h2>
          <p>{data.description}</p>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl h-8">Info</h3>

          {info.map((section, index) => {
            return (
              <dl
                key={index}
                className="flex flex-wrap items-center gap-2 mb-3"
              >
                <dt className="text-gray-default">{section.title}:</dt>
                <dd className="flex gap-2">{section.value}</dd>
              </dl>
            )
          })}
        </div>
      </article>

      <article className="p-4 sm:p-8 flex w-full overflow-x-auto gap-4">
        {data.devices &&
          data.devices.map((device, index) => {
            return (
              <Device
                key={index}
                className="flex-none"
                type={device.type}
                image={`${path}/${device.image}`}
              />
            )
          })}
      </article>
    </div>
  )
}

export default Project
