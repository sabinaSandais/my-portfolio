import React from 'react'

const Navbar = () => {
  return (
    <nav >
      <a href="/">Portfolio</a>
      <div>
        <ul>
          <li >
            <a href="#about">About</a>
          </li>
          <li >
            <a href="experience">Experience</a>
          </li>
          <li >
            <a href="#projects">Projects</a>
          </li> <li >
            <a href="#about">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
