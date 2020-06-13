import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    {
      allTopicsJson {
        edges {
          node {
            name
            slug
          }
        }
      }
    }
  `)

  return (
    <header id="nav-header">
      <div className="container">
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>

        <nav>
          <ul>
            {data.allTopicsJson.edges.map(({ node }) => (
              <li key={node.slug}>
                <Link to={`/${node.slug}`}>{node.name}</Link>
              </li>
            ))}
          </ul>
          <div>Search</div>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
