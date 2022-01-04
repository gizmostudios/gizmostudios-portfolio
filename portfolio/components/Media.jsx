const Media = ({
  type,
  file,
  width,
  height,
  caption,
  hideControls,
  onClick,
}) => {
  const handleClick = () => {
    onClick && onClick()
  }

  const media =
    type == 'video' ? (
      <video
        src={file}
        loop
        autoPlay
        muted
        controls={hideControls ? false : 'auto'}
        className="object-cover"
        style={{
          width: width || 'auto',
          height: height || 'auto',
          pointerEvents: hideControls ? 'none' : 'initial',
        }}
      />
    ) : (
      <img src={file} width={width} height={height} />
    )

  return (
    <figure className="relative">
      {onClick && (
        <div className="absolute w-full h-full" onClick={handleClick}></div>
      )}
      {media}
      {caption && <figcaption className="bg-black h-8">{caption}</figcaption>}
    </figure>
  )
}

export default Media
