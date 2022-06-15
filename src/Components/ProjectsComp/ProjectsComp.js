import React from 'react'
import "./ProjectsComp.scss"
import moonLight from "../../Moon-light.png"

export default function ProjectsComp() {
  return (
    <div className='projects-container'>
      <h1>Projects</h1>
      <div className="projects">
        <div className="project"><img src={moonLight} alt="" /></div>
        <div className="project">Project 2</div>
        <div className="project">Project 3</div>
      </div>
    </div>
  )
}
