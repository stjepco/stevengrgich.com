import React from "react"
// import { Link } from "gatsby" 
import Link from "src/components/Link" 

import links from "src/data/links"

const year = new Date().getFullYear()  

const Footer = () => (
  <footer>
    <p>Content & graphics ©{year} Steven Grgich. All rights reserved. Code is open source on <Link href={links.github}>GitHub</Link>. Hosted on <Link href="https://www.netlify.com/">Netlify</Link>.</p>
    <p>See the pull request for the current design, or read the credits. Have feedback on this site? Open an issue. Or, AMA!</p>
  </footer>
)

export default Footer
