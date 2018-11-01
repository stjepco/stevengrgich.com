import React from "react"
import { Link } from "gatsby"

import DefaultLayout from "src/layouts/defaultLayout"

export default () => (
  <DefaultLayout>
    <h1>Steven Grgich</h1>
    <p>I am a designer who loves to code, draw, take photos... Lately, I’ve been focusing on interaction and experience design. Currently I am working at OptimoRoute. You can read more at my <Link to="/about/">About</Link> page.</p>
    <h2>Now</h2>
    <p>Lately, I’ve been focusing on interaction and experience design. Currently I am working at <Link>OptimoRoute</Link>. You can read more at my <Link>Now page</Link>, or follow me on <Link>instagram</Link> and <Link>twitter</Link>.</p>
    <h2>Work</h2>
    <p>I have worked with startups and business around the world like OptimoRoute, Memgraph, Agrivi, vibby and others. For more details, check my resume.</p>
    <h2>Work</h2>
    <p>I have worked with startups and business around the world like OptimoRoute, Memgraph, Agrivi, vibby and others. For more details, check my resume.</p>
    <h2>Writing</h2>
    <ul>
      <li><Link>Misfit Explorer</Link></li>
      <li>Designer's road (<Link>Archive</Link>) <Link>What happened?</Link></li>
    </ul>
  </DefaultLayout>
)
