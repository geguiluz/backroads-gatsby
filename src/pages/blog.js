import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
const blog = ({ data }) => {
  return (
    <Layout>
      Hello from blog page!!!
      <Link to="/">Back Home</Link>
      <h1>Title: {data.site.siteMetadata.title}</h1>
    </Layout>
  )
}

// This is a page query that can only be used within this page
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        data {
          name
          age
        }
      }
    }
  }
`

export default blog
