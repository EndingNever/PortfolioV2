import React from 'react'
import "./Contact.scss"
import { ProjectsHeader } from '../../Styled'

export default function Contact() {
  return (
    <div className='contact' >
      <div className="header">
        <ProjectsHeader className='getInTouch'>Get In Touch</ProjectsHeader>
      </div>
      <div className="form-container">
        <form target="_blank" action="https://formsubmit.co/892f02cd745c69ebcd1bfc26e36baf43" method="POST">
          <div className="input-container">
            <input type="text" name="name" className="form-control" placeholder="Full Name" required />
            <input type="email" name="email" className="form-control" placeholder="Email Address" required />
          </div>
            <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea>
          <button type="submit" className="btn btn-lg btn-dark btn-block">Send</button>
        </form>
      </div>
    </div>

  )
}
