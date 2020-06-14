import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Featured = ({ markdown }) => {
  console.log(markdown)

  if (!markdown) {
    return <div>...loading</div>
  } else {
    return (
      <div id="featured-styles">
        {markdown.edges.map(({ node }, index) => {
          console.log(node)
          if (index === 0) {
            return (
              <figure id="featured-main">
                <Link to={node.fields.slug}>
                  <div className="featured-overlay"></div>
                  <Image
                    fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                  />
                  <figcaption>
                    <h2>{node.frontmatter.title}</h2>
                    <span>{node.frontmatter.category}</span>
                  </figcaption>
                </Link>
              </figure>
            )
          } else if (index < 3) {
            return (
              <figure className="featured-secondary">
                <Link to={node.fields.slug}>
                  <div className="featured-overlay"></div>
                  <Image
                    fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                  />
                  <figcaption>
                    <h2>{node.frontmatter.title}</h2>
                    <span>{node.frontmatter.category}</span>
                  </figcaption>
                </Link>
              </figure>
            )
          } else return null
        })}
      </div>
    )
  }
}
export default Featured
