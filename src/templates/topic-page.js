import React from "react"

import { graphql } from "gatsby"

import Card from "../components/card"
import Layout from "../components/layout"
import SEO from "../components/seo"

const TopicPageTemplate = ({ pageContext, data }) => {
  return <Layout pageType="Topic">topic page</Layout>
}

export default TopicPageTemplate
