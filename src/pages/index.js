import * as React from "react"
import { Link } from 'gatsby'

import '../css/app.css';
import '../css/typography.css'

var backgroundTheme = "https://www.mboxdrive.com/theme.mp3"
// data
const links = []

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Creative Digital Agency in the making</title>
      <header className="header"></header>
      <script src="js/three.js"></script>
      <h1 className="h1">Coming Soon</h1>
      <footer className="footer">
        <div className="divider">
          <div className="textLeftAlign">         
             <p className="contactUs">Contact us:</p>
             <a className="email" href="mailto:contact@montone.agency">contact@monotone.agency</a>
          </div>
        </div>
        <div className="divider">
        <p className="textRightAlign">© 2022 Monotone. All Rights Reserved.</p>
        </div>
      </footer>
      <audio src={backgroundTheme} autoplay="autoplay" loop="loop"></audio>
    </main>
  )
}

export default IndexPage
