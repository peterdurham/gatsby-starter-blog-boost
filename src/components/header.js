import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      borderBottom: `1px solid black`,

    }}
  >
    <div style={{
      display: `flex`,
      justifyContent: `space-between`,
      alignItems: `center`,
      width: `960px`,
      margin: `0 auto`,
    }}>
    <div>
        <Link
          to="/"
          style={{
    
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        <div>Example Blog with Topics and Tags</div>
        </div>

    <nav>
      <ul>
        <li>Topic 1</li>
      </ul>
      <ul>
        <li>Topic 2</li>
      </ul>
      <ul>
        <li>Topic 3</li>
      </ul>
      <ul>
        <li>Topic 4</li>
      </ul>
    </nav></div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
