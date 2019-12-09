import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Sobre" />
    <h1>About Page</h1>
    <div>
      <Link to="/">Home</Link>
    </div>
    <Link to="/about" activeStyle={{ color: "red" }}>
      Sobre
    </Link>
  </Layout>
)

export default AboutPage
