import React, {useState} from 'react'
import { ProjectsHeader } from '../../Styled'
import "./Resume.scss"
import resume from "./ResumeFinal.pdf"

export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className='resume-container'>
      <ProjectsHeader>Resume</ProjectsHeader>
      <iframe title="iframe Doc" src={resume} frameborder="0">
        Press me: <a href="./ResumeFinal.pdf">Download PDF</a>
      </iframe>
    </div>
  )
}
