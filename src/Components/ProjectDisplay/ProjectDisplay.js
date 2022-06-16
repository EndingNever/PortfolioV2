import React from 'react'
import "./ProjectDisplay.scss"
import noomPreview from "../../noomPreview.gif"

export default function ProjectDisplay() {
  return (
    <div className='projectDisplay-container'>
      <div className="project-container">
        <img src={noomPreview} alt="" />
      </div>
    </div>
  )
}
