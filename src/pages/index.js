import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import { Link, graphql } from "gatsby"
import FeaturedTours from "../components/Tours/FeaturedTours"

import SEO from "../components/SEO"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" description="this is description" />
    <StyledHero homeFlag="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="Continue Exploring"
        info="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni veritatis odit ullam, quod ipsa quibusdam!"
      >
        <Link to="/tours" className="btn-white">
          Explore Tours
        </Link>
      </Banner>
    </StyledHero>
    <About />
    <Services />
    <FeaturedTours />
  </Layout>
)

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
