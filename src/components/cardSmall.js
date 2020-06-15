import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Card = ({ frontmatter, slug }) => {
  return (
    <figure className="card-small-styles">
      <Link to={slug}>
        <Image
          className="card-small-image"
          fluid={frontmatter.featuredImage.childImageSharp.fluid}
        />
      </Link>

      <figcaption>
        <Link to={slug}>
          <h3>{frontmatter.title}</h3>
        </Link>
        <Link to={`/${frontmatter.category.toLowerCase().replace(" ", "-")}`}>
          <span className="card-small-topic">{frontmatter.category}</span>
        </Link>
      </figcaption>
    </figure>
  )
}
export default Card
