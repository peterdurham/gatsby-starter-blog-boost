import React from "react"
import Image from "gatsby-image"

const Featured = ({ markdown }) => {
  console.log(markdown)

  if (!markdown) {
    return <div>...loading</div>
  } else {
    return (
      <div id="featured-styles">
        {markdown.edges.map(({ node }, index) => {
          if (index === 0) {
            return (
              <figure id="featured-main">
                <Image
                  fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                />
                <figcaption>
                  <h2>{node.frontmatter.title}</h2>
                  <span>{node.frontmatter.category}</span>
                </figcaption>
              </figure>
            )
          } else if (index < 3) {
            return (
              <figure className="featured-secondary">
                <Image
                  fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                />
                <figcaption>
                  <h2>{node.frontmatter.title}</h2>
                  <span>{node.frontmatter.category}</span>
                </figcaption>
              </figure>
            )
          } else return null
        })}
      </div>
    )
  }
}
export default Featured
