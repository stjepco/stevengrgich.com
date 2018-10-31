// Default Layout
import React from "react"
import { Link as GatsbyLink } from "gatsby"
// import styled from "react-emotion"
// import { css } from "emotion"

// import styles from "./navbar.module.styl"

// const Navbar = styled.div`
//   background-color: #ccc;
//   max-width: 670px;
//   margin: 0 auto;
// `

// const Links = styled.ul`
//   background-color: #afa;
// `

const Link = ({ to, text }) => (
  <li>
    <GatsbyLink 
      to={to} 
      activeClassName="active"
      >
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
    {/*<ul className={styles.links}>
      <Link to="/" text="Home" />
      <Link to="/now/" text="Now" />
      <Link to="/about/" text="About" />
    </ul>
     <ul className={styles.links}>
      <li class="test">Home</li>
      <li>Features</li>
      <li>Pricing</li>
    </ul> */}
  </nav>
)

export default Navbar