// Default Layout
import React from "react"
import styled from "react-emotion"

const Container = styled.div`
  background-color: #fff
`

export default ({ children }) => (
  <Container>
    {children}
  </Container>
)