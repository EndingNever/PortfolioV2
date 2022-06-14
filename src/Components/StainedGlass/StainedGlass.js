import React from 'react'
import "./StainedGlass.scss"
import noomCafe from "../../noomcafe.png"

export default function StainedGlass() {
  return (
    <div className='stained-container'>
      <div className="row-1">
        <div className="col-1">
          <h1>Fabian Villasenor</h1>
        </div>
        <div className="col-2">Projects</div>
      </div>
      <div className="row-2">
        <div className="col-1">
        My name is Fabian Villaseñor, a Front End Web Developer. I began coding when I found a coding academy teaching web development using Angular in my hometown of Modesto, California.
          I had never coded before so I was intimidated at first, however once I started learning I was hooked! Since my completion of the bootcamp I have continued my coding journey by learning new things and creating projects, some of which you can find below!
          Some tools I have used to create these projects are React, Javascript, Angular, MySQL, REST APIs, and Node.js
        </div>
        <div className="col-2">
          <p>LinkedIn</p>
          <p>LinkedIn</p>
          <p>LinkedIn</p>
          <div className="nested-col">
            <p>Github</p>
            <p>Github</p>
            <p>Github</p>
          </div>
        </div>
        <div className="col-3"><img src={noomCafe} alt="" /></div>
      </div>
    </div>
  )
}
