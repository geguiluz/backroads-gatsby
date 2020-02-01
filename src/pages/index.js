import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default () => (
  <Layout>
    Hello world!
    <Link to="/blog">Blog</Link>
    <h1 style={{ fontSize: "20px", textTransform: "capitalize", color: "red" }}>
      hello styling
    </h1>
  </Layout>
)
