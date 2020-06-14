import React from "react"
import { graphql, Link } from "gatsby"

import Card from "../components/card"
import CardSmall from "../components/cardSmall"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa"

class Archive extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const { numPages, numPosts, currentPage } = pageContext
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    console.log(data, posts)
    return (
      <Layout pageType="Archive">
        <h2 id="articles-header">Archive Page {currentPage}</h2>
        <div className="two-column-layout">
          <div className="cards-layout">
            <h2 id="articles-title">Articles</h2>
            {posts.map(({ node }, index) => {
              return (
                <Card
                  key={node.id}
                  slug={node.fields.slug}
                  frontmatter={node.frontmatter}
                />
              )
            })}
            <div className="paginationLinks">
              {currentPage === 1 && (
                <Link disabled className="paginationDisabled">
                  <FaAngleDoubleLeft className="icon-left" />
                  <span>Previous</span>
                </Link>
              )}
              {currentPage === 2 && (
                <Link to="/archive" className="paginationLink">
                  <FaAngleDoubleLeft className="icon-left icon-fix" />
                  <span>Previous</span>
                </Link>
              )}
              {currentPage > 2 && (
                <Link
                  to={`/archive/${currentPage - 1}`}
                  className="paginationLink"
                >
                  <FaAngleDoubleLeft className="icon-left icon-fix" />
                  <span>Previous</span>
                </Link>
              )}
              {currentPage > 0 && (
                <div className="paginationDetails">
                  <span>Page</span>&nbsp;
                  {currentPage} of {numPages}
                </div>
              )}
              {currentPage < numPages ? (
                <Link
                  to={`/archive/${currentPage + 1}`}
                  className="paginationLink"
                >
                  <span>Next</span>
                  <FaAngleDoubleRight className="icon-right icon-fix" />
                </Link>
              ) : (
                <Link disabled className="paginationDisabled">
                  <span>Next</span>
                  <FaAngleDoubleRight className="icon-right icon-fix" />
                </Link>
              )}
            </div>
          </div>
          <div className="sidebar">
            <h2 className="sidebar-header">Mailing List</h2>
            <div className="sidebar-emails">
              <h2>Mailing list here</h2>
              <p>Subscribe to my list for lots of great reasons</p>
              <form>
                <input type="text" id="email" />
                <input type="submit" value="Subscribe" />
              </form>
              <span>Weekly updates, unsubscribe at any time</span>
            </div>
            <h2 className="sidebar-header">Popular Articles</h2>
            <div className="sidebar-popular">
              {data.allMarkdownRemark.edges.map(({ node }, index) => {
                if (index > 2 && index < 5) {
                  return (
                    <CardSmall
                      key={node.id}
                      slug={node.fields.slug}
                      frontmatter={node.frontmatter}
                    />
                  )
                } else return null
              })}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Archive
export const pageQuery = graphql`
  query archiveQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
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
`
