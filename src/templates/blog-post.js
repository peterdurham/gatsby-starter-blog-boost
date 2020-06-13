import React from "react"
import { Link, graphql } from "gatsby"
import _ from "lodash"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

class BlogPostTemplate extends React.Component {
  render() {
    return <Layout pageType="Post">blog post</Layout>
  }
}

export default BlogPostTemplate
