import React from "react"
// import { Link } from "gatsby"
import Link from "src/components/Link"
// import { css } from "react-emotion"

import DefaultLayout from "src/layouts/defaultLayout"
import links from "src/data/links"

// Images
import desk from "src/images/sg-desk.svg"
import phoneLaptop from "src/images/sg-phone-laptop.svg"
import paperPlane from "src/images/sg-paper-plane.svg"

export default () => (
  <DefaultLayout>
    <div className="block hero">
      <h1>Steven Grgich</h1>
      <p>I am a designer who loves to code, draw, take photos... Lately, I’ve been focusing on interaction and experience design. Currently I am working at OptimoRoute. You can read more at my <Link to={links.page.about}>About</Link> page.</p>
    </div>

    <div className="block now">
      <h2>Now</h2>
      <p>Lately, I’ve been focusing on interaction and experience design. Currently I am working at <Link href={links.optimoroute}>OptimoRoute</Link>. You can read more at my <Link to={links.page.now}>Now page</Link>, or follow me on <Link href={links.ig}>instagram</Link> and <Link href={links.tw}>twitter</Link>.</p>
      <div className="svg-desk">
        <img
          src={desk}
          alt="Desk illustration"/>
      </div>
    </div>

    <div className="block work">
      <h2>Work</h2>
      <p>I have worked with startups and business around the world like OptimoRoute, Memgraph, Agrivi, vibby and others. For more details, check my resume.</p>
    </div>

    <div className="block writing">
      <h2>Writing</h2>
      <ul>
        <li><Link href={links.misfitexplorer}>Misfit Explorer</Link></li>
        <li>Designer's road (<Link href="#">Archive</Link>) <Link to="/">What happened?</Link></li>
      </ul>
      <img src={paperPlane} alt="Paper plane illustrationn"/>
    </div>

    <div className="block projects" >
      <h2>Projects</h2>
      <ul>
        <li><Link href="#">Aspect ration calculator</Link></li>
      </ul>
    </div>

    <img src={phoneLaptop} alt="Laptop and phone illustrationn"/>
  </DefaultLayout>
)
