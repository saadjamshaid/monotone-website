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

      <div className="header"></div>
      <h1 className="h1">Coming Soon</h1>
      <iframe className="none" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" allow="autoplay" id="iframeAudio"></iframe> 
      <div className="footer">
        <div className="divider">
          <div className="textLeftAlign">         
             <p className="contactUs">Contact us:</p>
             <a className="email" href="mailto:contact@montone.agency">contact@monotone.agency</a>
          </div>
        </div>
        <p className="divider, textRightAlign">© 2022 Monotone. All Rights Reserved.</p>
      </div>
    </main>
  )
}

export default IndexPage
