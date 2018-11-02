import React from "react"
import { Link as GatsbyLink } from "gatsby"

const Link = ({ children, href, to, ...other }) => {
  if (to !== undefined) {
    return (
      <GatsbyLink
        // className={`${other.className}`}
        to={to}
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a
      // className={`${other.className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer" // security requirement https://mathiasbynens.github.io/rel-noopener/
      {...other}
    >
      {children}
    </a>
  )
}

export default Link
