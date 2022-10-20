import React, { useState } from 'react'
import "./ProjectDisplay.scss"
import noomPreview from "../../eznoompreview.gif"
import teslaPreview from "../../teslaPreview.gif"
import mixellenceGif from "../../mixellenceGif.gif"
// import cardGame from "../../cardGame.gif"
import { ProjectsHeader } from '../../Styled'

const aMartinez = <p className='project-info'>Collaboration with <a href='https://www.linkedin.com/in/alfonso-martinez-a6179a137/' target='_blank'>Alfonso Martinez</a>, UX/UI designer. Alfonso created a beautiful page and I was able to create the page using React, complete with a dark mode.</p>
const teslaInfo = <p className='project-info'>Group project with 3 other team members. We recreated the Tesla shop page. A set of product data was recreated for the products page, and the project involved working in a team on Github. </p>
const mixellenceInfo = <p className='project-info'>Website created for a bartender-catering business, the key feature being an administrator dashboard which requires Authorization. The admin dashboard allows photos and text to be updated in the website, without code, through Firebase</p>
const projectsForMapping = [
  {
    id: 0,
    title: "Noom Cafe",
    info: aMartinez,
    github: "https://github.com/EndingNever/NoomCafe",
    siteLink: "https://endingnever.github.io/NoomCafe/",
    heroPreview: noomPreview
  },
  {
    id: 1,
    title: "Tesla Shop",
    info: teslaInfo,
    github: "https://github.com/EndingNever/groupproject",
    siteLink: "https://endingnever.github.io/groupproject/",
    heroPreview: teslaPreview
  },
  {
    id: 2,
    title: "Mixellence",
    info: mixellenceInfo,
    github: "https://github.com/OxanaSF/mixellence",
    siteLink: "https://mixellence.netlify.app/",
    heroPreview: mixellenceGif
  }
]


export default function ProjectDisplay() {
  const [projectPreview, setProjectPreview] = useState(teslaPreview);

  return (
    <div className='projectDisplay-container'>
      <div className="projects-header-neon">
        <a href="#select-projects">
          <ProjectsHeader className='projectsHeader'>Projects</ProjectsHeader>
        </a>
      </div>
      <div id='select-projects' className="project-container">
        <img src={projectPreview} alt="" />
      </div>
      <div className="select-projects">
        {projectsForMapping.map((project) => (
          <div onClick={()=>setProjectPreview(project.heroPreview)} className="project" key={project.id} style={ projectPreview === project.heroPreview ? {boxShadow: " 0 0 0.2rem #363278, 0 0 0.2rem #363278, 0 0 2rem #363278, 0 0 0.8rem #363278, 0 0 2.8rem #363278, inset 0 0 1.3rem #363278", outline: "2px solid #363278"} : null}>
            <h1>{project.title}</h1>
            {project.info}
            <p><a href={project.siteLink} target='_blank'>Live Page</a></p>
            <p><a href={project.github} target='_blank'>View on Github </a></p>
          </div>
        ))}
      </div>
    </div>
  )
}
