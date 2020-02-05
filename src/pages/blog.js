import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
const blog = () => {
  return (
    <Layout>
      Hello from blog page!!!
      <Link to="/">Back Home</Link>
    </Layout>
  )
}
export default blog
