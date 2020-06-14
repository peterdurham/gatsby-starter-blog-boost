import { Link, useStaticQuery, graphql, navigate } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { IoIosSearch } from "react-icons/io"

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
    <header id="header">
      <div className="container">
        <Link
          to="/"
          id="site-logo"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>

        <nav id="nav">
          <ul>
            {data.allTopicsJson.edges.map(({ node }) => (
              <li key={node.slug}>
                <Link to={`/${node.slug}`}>{node.name}</Link>
              </li>
            ))}
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <div id="search-box">
            <form
              onSubmit={e => {
                e.preventDefault()
                navigate(`/?s=${e.target.query.value.toLowerCase()}`)
              }}
            >
              <input type="text" id="query" />
            </form>
            <IoIosSearch />
          </div>
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
