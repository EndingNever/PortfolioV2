import React from 'react'
import "./Navbar.scss"

export default function Navbar() {
  return (
    <div className='navbar-container'>
    <a id="Home"></a>
            <nav>
                <div className="navbar-items"><a href='#Home' >{/* Home */}</a></div>                 
                <div className="navbar-items">{/* About */}</div>
                <div className="navbar-items">{/* Projects */}</div>
                <div className="navbar-items"><a href="https://www.linkedin.com/in/fabianvillasenor/" target="_blank">{/* LinkedIn*/}</a></div>
                <div className="navbar-items"><a href="https://github.com/EndingNever"  target="_blank">{/* Github*/}</a></div>
            </nav>
</div>
  )
}
