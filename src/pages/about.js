import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About Blog Boost Starter" />
      <div style={{ minHeight: "420px" }}>
        <h2 style={{ margin: "40px 0 20px 0" }}>About Blog Boost Starter</h2>
        <p style={{ marginBottom: "20px" }}>
          <strong>Gatsby Starter Blog Boost</strong> is a Netlify CMS powered
          Gatsby Blog with a wide range of features already configured.
        </p>

        <p style={{ marginBottom: "20px" }}>
          This starter is a great way to get blogging using a content manager
          while learning and practicing <strong>JavaScript</strong>,{" "}
          <strong>React</strong>, <strong>Gatsby</strong>, and{" "}
          <strong>GraphQL</strong>,
        </p>

        <div style={{ fontSize: "36px", margin: "20px 0 60px 0" }}>
          <span role="img" aria-label="Laptop.">
            💻
          </span>
          <span role="img" aria-label="Rocket.">
            🚀
          </span>
        </div>

        <h3>Thanks for visiting!!</h3>
      </div>
    </Layout>
  )
}
export default AboutPage
