import React from 'react'
import "./ProjectDisplay.scss"
import noomPreview from "../../eznoompreview.gif"
import Navbar from '../Navbar/Navbar'

export default function ProjectDisplay() {
  return (
    <div className='projectDisplay-container'>
      <div className="project-container">
        <img src={noomPreview} alt="" />
      </div>
      <div className="select-projects">
        <div className="project">1</div>
        <div className="project">2</div>
        <div className="project">3</div>
      </div>
    </div>
  )
}
