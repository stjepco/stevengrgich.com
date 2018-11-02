// Default Layout
import React from "react"
import { Link } from "gatsby"

import Navbar from "src/components/navbar.js"
import Footer from "src/components/footer.js"
import "src/styles/main.styl"

export default ({ children }) => (
  <div className="container">
    <Navbar />
    {children}
    <Footer />
  </div>
)
