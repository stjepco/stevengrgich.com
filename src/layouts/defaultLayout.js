// Default Layout
import React from "react"
import styled from "react-emotion"

import "src/styles/main.styl"
import Navbar from "src/components/navbar"

export default ({ children }) => (
  <div className="container">
    <Navbar />
    {children}
  </div>
)