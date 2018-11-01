// Default Layout
import React from "react"
import { Link as GatsbyLink } from "gatsby"

const Link = ({ to, text }) => (
  <li>
    <GatsbyLink 
      to={to} 
      activeClassName="active">
        {text}
    </GatsbyLink>
  </li>
)

const Navbar = () => (
  <nav className="navbar">
    <ul className="links">
      <Link to="/" text="Home" />
      <Link to="/now/" text="Now" />
      <Link to="/about/" text="About" />
    </ul>
  </nav>
)

export default Navbar