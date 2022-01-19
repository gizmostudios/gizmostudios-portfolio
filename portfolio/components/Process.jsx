import Title from '../components/Title'

const Process = ({ id }) => {
  const processTitle = 'Way of working'
  const processIntro = `In order to make any project and collaboration proceed smoothly, some structure is needed.
                        Through my experience in agile teams and freelance projects I distilled a clean way of working.
                        However, since every client is different I am flexible enough to agree on a way that works best for us both.`

  const articleData = [
    {
      image: 'sketch.jpg',
      title: 'Brainstorm & Sketches',
      text: `To get a good idea of what is requested I like to sit down with my
             client and sketch out the idea together in real time. This can be
             either in person or through a video chat, where I share my iPad's
             screen and/or video feed on my sketch book.
             At this stage we can also gather references, define initial preferences and discuss budget.`,
    },
    {
      image: 'planning.jpg',
      title: 'Breakdown & Planning',
      text: `Once it is clear what needs to be made, I go and break down the steps into tasks.
             Depending on the project these can be user stories or a more direct list of components.
             I give each task a rough estimate so to come to a grand total, which I can communicate to my client.
             At this point we can tweak, cut or add tasks based on priorities and budget.
             Once my client agrees on the outline I can give a rough roadmap and official quote.`,
    },
    {
      image: 'roadmap.jpg',
      title: 'Progress & Updates',
      text: `Using the planning board I can update my client on the current status of the project.
             When a task changes status, like from To Do into Progress, my client receives an email or notification.
             Through comments on the task we can communicate details.
             Depending on the size of the project I define a number of milestones, which indicate a workable version and a partial payment.
             This allows the project to flow and reduce stress on both sides as much as possible.`,
    },
  ]

  return (
    <div className="container pt-8" id={id}>
      <div className="py-12 max-w-4xl mx-auto">
        <header className="flex flex-col items-center">
          <Title size="2">{processTitle}</Title>
          <img src="refine.jpg" width="300" />
        </header>

        <article className="pb-12">{processIntro}</article>

        {articleData.map((article, index) => {
          return (
            <article
              key={index}
              className="flex gap-4 pt-8 mt-8 border-gray-600"
              style={{ borderTopWidth: 1 }}
            >
              <div
                className={`flex justify-center flex-1 ${
                  index % 2 ? 'order-2' : 'order-1'
                }`}
              >
                <img src={article.image} width="300px" height="350px" />
              </div>
              <div className={`flex-1 ${index % 2 ? 'order-1' : 'order-2'}`}>
                <Title size="3">{article.title}</Title>
                <p>{article.text}</p>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Process
