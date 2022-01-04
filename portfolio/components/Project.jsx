const Project = ({ path, title, video, images }) => {
  return (
    <>
      {video && (
        <div className="bg-black flex justify-center">
          <video src={`${path}/${video}`} loop autoPlay muted controls="auto" />
        </div>
      )}
      <div className="p-4 sm:p-8">
        <h2 className="text-4xl">{title}</h2>
      </div>
    </>
  )
}

export default Project
