import * as React from "react"
import '../css/app.css';
import '../css/typography.css'

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
        <p className="divider, textRightAlign">© 2022 Monotone. All Rights Reserved.</p>
      </footer>
      <audio src="https://www.mboxdrive.com/theme.mp3" autoplay="autoplay" loop="loop"></audio>
    </main>
  )
}

export default IndexPage
