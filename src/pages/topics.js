import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

const Topics = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
              tags
              category
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 400) {
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
  console.log(data)
  return (
    <Layout>
      <h1 style={{ marginBottom: "2rem" }}>Topics</h1>
      <div className="trendingTags">
        {data.allMarkdownRemark.group.map(topic => (
          <Link
            to={`/${topic.fieldValue.toLowerCase().replace(" ", "-")}/`}
            key={topic.fieldValue}
            className="Tag"
          >
            <span>
              {topic.fieldValue} ({topic.totalCount})
            </span>
          </Link>
        ))}
      </div>
    </Layout>
  )
}
export default Topics
