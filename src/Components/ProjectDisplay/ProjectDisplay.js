import React, {useState } from 'react'
import "./ProjectDisplay.scss"
import noomPreview from "../../eznoompreview.gif"
import { ProjectsHeader } from '../../Styled'
import Navbar from '../Navbar/Navbar'


const projectsForMapping = [
  {
    id: 0,
    title: "Noom Cafe",
    github: "https://github.com/EndingNever/NoomCafe",
    siteLink: "https://endingnever.github.io/NoomCafe/",
    screenshot: "",
    heroPreview: ""
  },
  {
    id: 1,
    title: "Elden Ring",
    github: "https://github.com/EndingNever/EldenRing",
    siteLink: "https://endingnever.github.io/EldenRing/",
    screenshot: "",
    heroPreview: ""
  },
  {
    id: 2,
    title: "React Card Game",
    github: "https://github.com/EndingNever/FonsecaWebsite",
    siteLink: "https://endingnever.github.io/ReactGame/",
    screenshot: "",
    heroPreview: ""
  }
]

export default function ProjectDisplay() {
  const [projectPreview, setProjectPreview] = useState(noomPreview)
  return (
    <div className='projectDisplay-container'>
      <div className="projects-header-neon">
        <a href="#select-projects">
          <ProjectsHeader> Projects</ProjectsHeader>
        </a>
      </div>
      <div className="project-container">
        <img src={projectPreview} alt="" />
      </div>
      <div id='select-projects' className="select-projects">
        {projectsForMapping.map((project) => (
          <div className="project" key={project.id}>
            <h1>{project.title}</h1>
            <p>{project.siteLink}</p>
            <p>{project.github}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
