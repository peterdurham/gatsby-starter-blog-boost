import { Link, useStaticQuery, graphql, navigate } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { FiMenu } from "react-icons/fi"
import { MdClose } from "react-icons/md"
import { IoIosSearch } from "react-icons/io"

const Header = ({ siteTitle, menuOpen, setMenuOpen }) => {
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
        <button
          id="site-logo-wrapper"
          onClick={() => {
            if (menuOpen) {
              setMenuOpen(false)
            }
          }}
        >
          <Link
            to="/"
            id="site-logo"
            style={{
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </button>

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
              <input type="text" id="query" aria-label="Search" />
            </form>
            <IoIosSearch />
          </div>
          {menuOpen ? (
            <button className="menu-button" onClick={() => setMenuOpen(false)}>
              <MdClose />
            </button>
          ) : (
            <button className="menu-button" onClick={() => setMenuOpen(true)}>
              <FiMenu />
            </button>
          )}
        </nav>
      </div>
      {menuOpen && (
        <div id="menu">
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
        </div>
      )}
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
