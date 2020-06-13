import React from "react"
import Layout from "../components/layout"

import { Link, graphql } from "gatsby"

import Card from "../components/card"
import SEO from "../components/seo"

const TagPageTemplate = ({ pageContext, data }) => {
  return <Layout pageType="Tag">tag page</Layout>
}

export default TagPageTemplate
