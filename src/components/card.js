import React from "react"
import Image from "gatsby-image"

const Card = ({ frontmatter }) => {
  return (
    <div className="card-styles">
      <Image fluid={frontmatter.featuredImage.childImageSharp.fluid} />
      {frontmatter.title}
    </div>
  )
}
export default Card
