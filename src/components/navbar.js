// Navbar
import React from "react"
import { Link as GatsbyLink } from "gatsby"
import links from "src/data/links"

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
      <Link to={links.pages.home} text="Home" />
      <Link to={links.pages.now} text="Now" />
      <Link to={links.pages.about} text="About" />
    </ul>
  </nav>
)

export default Navbar
