// Default Layout
import React from "react"

import "src/styles/main.styl"
import Navbar from "src/components/navbar.js"

export default ({ children }) => (
  <div className="container">
    <Navbar />
    {children}
  </div>
)