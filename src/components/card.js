import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Card = ({ frontmatter, slug }) => {
  return (
    <figure className="card-styles">
      <Link to={slug}>
        <Image
          className="card-image"
          fluid={frontmatter.featuredImage.childImageSharp.fluid}
        />
      </Link>

      <figcaption>
        <Link to={`/${frontmatter.category.toLowerCase().replace(" ", "-")}`}>
          <div className="card-topic">{frontmatter.category}</div>
        </Link>
        <Link to={slug}>
          <h3>{frontmatter.title}</h3>
        </Link>
      </figcaption>
    </figure>
  )
}
export default Card
