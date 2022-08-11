import React from 'react'
import "./Body.scss"
import { motion } from 'framer-motion'
import Navbar from '../Navbar/Navbar'
import { ProjectsHeader } from '../../Styled'

const textVariant = {
  neon: {
    textShadow: "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #bc13fe,0 0 82px #bc13fe, 0 0 92px #bc13fe, 0 0 102px #bc13fe, 0 0 151px #bc13fe",
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse"
    }
  },
  neonBox: {
    boxShadow: "0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #bc13fe, 0 0 0.8rem #bc13fe, 0 0 2.8rem #bc13fe, inset 0 0 1.3rem #bc13fe",
    textShadow: "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #bc13fe, 0 0 82px #bc13fe, 0 0 92px #bc13fe, 0 0 102px #bc13fe, 0 0 151px #bc13fe",
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
}

export default function Body() {
  return (
    <div className='body-container'>
      <div className="name-container">
        <motion.h1 variants={textVariant} animate="neonBox" className='neon-text'>Fabian Villaseñor</motion.h1>
      </div>
      <div className="social-media">
        <a href="https://www.linkedin.com/in/fabianvillasenor/" target="_blank">
          <ProjectsHeader className="linkedin">LinkedIn</ProjectsHeader>
        </a>
        <a href="https://github.com/endingnever" target="_blank">
          <ProjectsHeader className="github">Github</ProjectsHeader>
        </a>
      </div>
    </div>
  )
}
