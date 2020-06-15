import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"
import SEO from "../components/seo"
import Card from "../components/card"

class ArticleTemplate extends Component {
  render() {
    const { data, pageContext } = this.props
    const { topic } = pageContext
    const post = data.markdownRemark

    const similarPosts = data.allMarkdownRemark.edges
      .filter(item => {
        return (
          item.node.frontmatter.category === topic &&
          item.node.frontmatter.title !== post.frontmatter.title
        )
      })
      .filter((item, index) => {
        return index < 2
      })

    return (
      <Layout pageType="Post">
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description}
        />
        <div id="article">
          <header>
            <h1 className="article-title">{post.frontmatter.title}</h1>
            <p className="article-date">{post.frontmatter.date}</p>
            <div className="article-tags">
              {post.frontmatter.tags.map(tag => (
                <Link
                  className="tag"
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
              className="article-image"
            ></Image>
          </header>
          <div
            className="article-markdown"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <div>
            {similarPosts.length > 0 && (
              <h3 id="similar-posts-header">
                Other {this.props.pageContext.topic} Tutorials
              </h3>
            )}

            <section>
              {similarPosts.map(({ node }) => {
                return (
                  <Card
                    key={node.fields.slug}
                    title={node.frontmatter.title}
                    slug={node.fields.slug}
                    date={node.frontmatter.date}
                    description={node.frontmatter.description}
                    excerpt={node.excerpt}
                    frontmatter={node.frontmatter}
                  />
                )
              })}
            </section>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ArticleTemplate
export const pageQuery = graphql`
  query ArticleBySlug($slug: String!) {
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
