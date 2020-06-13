import React from "react"
import Image from "gatsby-image"

const Card = ({ frontmatter }) => {
  return (
    <figure className="card-styles">
      <Image
        className="card-image"
        fluid={frontmatter.featuredImage.childImageSharp.fluid}
      />
      <figcaption>
        <h3>{frontmatter.title}</h3>
        <p>{frontmatter.category}</p>
      </figcaption>
    </figure>
  )
}
export default Card
