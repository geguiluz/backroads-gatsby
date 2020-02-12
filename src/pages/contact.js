import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { Link, graphql } from "gatsby"

const contact = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.connectBcg.childImageSharp.fluid} />
      <Link to="/">Back Home</Link>
    </Layout>
  )
}

export const query = graphql`
  query {
    connectBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default contact
