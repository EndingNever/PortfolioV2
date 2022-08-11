import React, { useState } from 'react'
import { ProjectsHeader } from '../../Styled'
import "./Resume.scss"
// import resume from "./ResumeFinal.pdf"
// import resume from "./ResumeFinal.pdf"

export default function Resume() {

  const [image, setImage] = useState("/files/resume1.jpg")

  const imageCarousel = () => {
    if (image === "/files/resume1.jpg") {
      setImage("/files/resume2.jpg");
    }
    else if (image === "/files/resume2.jpg") {
      setImage("/files/resume1.jpg")
    }
  }

  return (
    <div className='resume-container'>
      <ProjectsHeader>Resume </ProjectsHeader>
      <ProjectsHeader className='download'>Download</ProjectsHeader>
      <div className="resume">
        <embed className='iframe' title="Resume" src={process.env.PUBLIC_URL + "/files/Resume3.pdf"} frameBorder="0">
        </embed>
        <div className="resume-image">
          <img src={image} alt="resume" />
          <div onClick={imageCarousel} className="angle">
            <div className="left">
              {"<"}
            </div>
            <div className="right">
              {">"}
            </div>
          </div>
        </div>
        {/* <img src="/files/resume2.jpg" alt="" /> */}
      </div>
    </div>
  )
}
