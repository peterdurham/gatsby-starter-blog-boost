import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/card"
import Featured from "../components/featured"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              category
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Featured markdown={data.allMarkdownRemark} />
      <div className="two-column-layout">
        <div className="cards-layout">
          <h2 id="articles-title">Articles</h2>
          {data.allMarkdownRemark.edges.map(({ node }, index) => {
            if (index < 3) {
              return null
            } else {
              return (
                <Card
                  key={node.id}
                  slug={node.fields.slug}
                  frontmatter={node.frontmatter}
                />
              )
            }
          })}
        </div>
        <div className="sidebar">
          <h2 className="sidebar-header">Mailing List</h2>
          <div className="sidebar-emails">
            <h2>Specialized header here</h2>
            <p>Subscribe to my list for lots of great reasons</p>
            <form>
              <input type="text" id="email" />
              <input type="submit" value="Subscribe" />
            </form>
            <span>Weekly updates</span>
          </div>
          <h2 className="sidebar-header">Popular Articles</h2>
          <div className="sidebar-popular">
            <div>Sidebar card</div>
            <div>Sidebar card</div>
            <div>Sidebar card</div>
          </div>
        </div>
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </Layout>
  )
}

export default IndexPage
