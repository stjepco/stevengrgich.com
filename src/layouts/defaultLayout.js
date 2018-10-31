// Default Layout
import React from "react"
import styled from "react-emotion"

const Container = styled.div`
  background-color: #fff;
  max-width: 670px;
  margin: 0 auto;
`

export default ({ children }) => (
  <Container>
    {children}
  </Container>
)