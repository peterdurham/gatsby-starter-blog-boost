/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* ↓ DELETE THIS BLOCK ↓ */}
      <div
        style={{
          width: "100%",
          background: "#000",
          color: "#fff",
          height: "45px",
        }}
      >
        <div style={{ width: "960px", margin: "0 auto", lineHeight: "45px" }}>
          Details about the starter here, delete this when ready
        </div>
      </div>
      {/* ↑ DELETE THIS BLOCK ↑ */}

      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container">
        <main>{children}</main>
        <footer>© {new Date().getFullYear()} Site Name</footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
