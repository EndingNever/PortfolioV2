import React from 'react'
import { ProjectsHeader } from '../../Styled'
import "./Resume.scss"
// import resume from "./ResumeFinal.pdf"
// import resume from "./ResumeFinal.pdf"

export default function Resume() {
  return (
    <div className='resume-container'>
      <ProjectsHeader>Resume</ProjectsHeader>
      <div className="resume">
        <iframe className='iframe' title="Resume" src={process.env.PUBLIC_URL + "/files/ResumeFinal.pdf"} frameBorder="0">
        </iframe>
        {/* <embed src={process.env.PUBLIC_URL + "./ResumeFinal.pdf"} type="application/pdf" width="100%" height="100%">
           <p>Your web browser doesn't have a PDF plugin.
            Instead you can <a href={resume}>click here to
              download the PDF file.</a></p> 
        </embed> */}
      </div>
    </div>
  )
}
