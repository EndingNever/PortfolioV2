import React from 'react'
import "./ProjectDisplay.scss"
import noomPreview from "../../eznoompreview.gif"
import { ProjectsHeader } from '../../Styled'
import Navbar from '../Navbar/Navbar'

const projectsForMapping = [
  {
    title: "Noom Cafe",
    github: "https://github.com/EndingNever/NoomCafe",
    siteLink: "https://endingnever.github.io/NoomCafe/",
    screenshot: "",
    heroPreview: ""
  },
  {
    title: "Elden Ring",
    github: "https://github.com/EndingNever/EldenRing",
    siteLink: "https://endingnever.github.io/EldenRing/",
    screenshot: "",
    heroPreview: ""
  },
  {
    title: "Data Science Portfolio",
    github: "https://github.com/EndingNever/FonsecaWebsite",
    siteLink: "https://devinfonseca.com/",
    screenshot: "",
    heroPreview: ""
  }
]

export default function ProjectDisplay() {
  return (
    <div className='projectDisplay-container'>
      <ProjectsHeader>Projects</ProjectsHeader>
      <div className="project-container">
        <img src={noomPreview} alt="" />
      </div>
      <div className="select-projects">
        {projectsForMapping.map((project) => (
          <div className="project">
            <h1>{project.title}</h1>
            <a>{project.siteLink}</a>
            <a>{project.github}</a>
          </div>
        ))}
      </div>
    </div>
  )
}
