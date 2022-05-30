// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (

    <div>
    <Layout pageTitle="About">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <Link to="/">Back to Home</Link>
    </Layout>
    </div>
)
}

// Step 3: Export your component
export default AboutPage