import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Images from "../examples/images"
const blog = () => {
  return (
    <Layout>
      Hello from blog page!!!
      <Images />
      <Link to="/">Back Home</Link>
    </Layout>
  )
}
export default blog
