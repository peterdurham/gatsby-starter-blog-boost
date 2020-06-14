import React from "react"
import { Link, graphql } from "gatsby"
import _ from "lodash"
import Layout from "../components/layout"
import Image from "gatsby-image"
import SEO from "../components/seo"
import Card from "../components/card"

class BlogPostTemplate extends React.Component {
  render() {
    const { data, pageContext, location } = this.props
    console.log(data, "DATA")
    const post = data.markdownRemark
    const siteTitle = data.site.siteMetadata.title
    const { previous, next, topic } = pageContext
    // const similarPosts = data.allMarkdownRemark.edges
    //   .filter(item => {
    //     return (
    //       item.node.frontmatter.category === topic &&
    //       item.node.frontmatter.title !== post.frontmatter.title
    //     )
    //   })
    //   .filter((item, index) => {
    //     return index < 2
    //   })

    return (
      <Layout pageType="Post">
        <div id="blogPost">
          <header>
            <h1>{post.frontmatter.title}</h1>
            <p className="blogPostDate">{post.frontmatter.date}</p>
            <div className="blogPostTags">
              {post.frontmatter.tags.map(tag => (
                <Link
                  className="Tag"
                  key={tag}
                  to={`/${tag
                    .split(" ")
                    .join("-")
                    .split("/")
                    .join("-")
                    .toLowerCase()}`}
                >
                  {tag}
                </Link>
              ))}
            </div>
            <Image
              fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
              className="blogPostImage"
            ></Image>
          </header>
          <div
            className="blogPostMarkdown"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        dateModified(formatString: "MMMM DD, YYYY")
        description
        tags
        category
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
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
`
