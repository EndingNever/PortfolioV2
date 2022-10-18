import React, { useState } from 'react'
import { ProjectsHeader } from '../../Styled'
import "./Resume.scss"

export default function Resume() {
  const resume = "/files/FabianVillasenorResume.pdf"
  const [image, setImage] = useState("/files/FV1.jpg")

  const imageCarousel = () => {
    if (image === "/files/FV1.jpg") {
      setImage("/files/FV2.jpg");
    }
    else if (image === "/files/FV2.jpg") {
      setImage("/files/FV1.jpg")
    }
  }

  return (
    <div className='resume-container'>
      <ProjectsHeader>Resume </ProjectsHeader>
      <ProjectsHeader className='download'> <a href={resume} download>Download</a></ProjectsHeader>
      <div className="resume">
        <embed className='iframe' title="Resume" src={process.env.PUBLIC_URL + resume} frameBorder="0">
        </embed>
        <div className="resume-image">
          <img src={image} alt="resume" />
          <div onClick={imageCarousel} className="angle">
            <div className="left" style={{cursor: 'pointer'}}>
              {"<"}
            </div>
            <div className="right" style={{cursor: 'pointer'}}>
              {">"}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
