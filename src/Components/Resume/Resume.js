import React from 'react'
import { ProjectsHeader } from '../../Styled'
import "./Resume.scss"
import resume from "./ResumeFinal.pdf"

export default function Resume() {
  return (
    <div className='resume-container'>
      <ProjectsHeader>Resume</ProjectsHeader>
      <div className="resume">
        <iframe className='iframe' title="iframe Doc" src={resume} frameBorder="0">
        </iframe>
      </div>
    </div>
  )
}
