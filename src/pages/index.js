import React from "react"
import styled from "react-emotion"
import DefaultLayout from "src/layouts/defaultLayout"

const Title = styled.h1`
  background-color: #fff
`

export default () => (
  <DefaultLayout>
    <Title>Steven Grgich</Title>
    <p>I am a designer who loves to code, draw, take photos... Lately, I’ve been focusing on interaction and experience design. Currently I am working at OptimoRoute. You can read more at my About page.</p>
    <h2>Now</h2>
    <p>Lately, I’ve been focusing on interaction and experience design. Currently I am working at OptimoRoute. You can read more at my Now page, or follow me on instagram and twitter.</p>
    <h2>Work</h2>
    <p>I have worked with startups and business around the world like OptimoRoute, Memgraph, Agrivi, vibby and others. For more details, check my resume.</p>
  </DefaultLayout>
)
