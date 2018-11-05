// Navbar
import React from "react"
import { Link as GatsbyLink } from "gatsby"
import links from "src/data/links"

console.log(links)

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
      <Link to={links.page.home} text="Home" />
      <Link to={links.page.now} text="Now" />
      <Link to={links.page.about} text="About" />
    </ul>
  </nav>
)

export default Navbar
