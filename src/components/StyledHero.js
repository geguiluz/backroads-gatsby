import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

import { useStaticQuery, graphql, StaticQuery } from "gatsby"

// Pulling default image from Contentful
const getImage = graphql`
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

const StyledHero = ({ img, className, children, homeFlag }) => {
  const data = useStaticQuery(getImage)
  return (
    <div>
      <BackgroundImage
        className={className}
        fluid={img || data.defaultBcg.childImageSharp.fluid}
        homeFlag={homeFlag}
      >
        {children}
      </BackgroundImage>
    </div>
  )
}

export default styled(StyledHero)`
  min-height: ${props => (props.homeFlag ? "calc(100vh - 62px)" : "50vh")};
  background: ${props =>
    props.homeFlag
      ? "linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))"
      : "none"};
  background-position: center;
  background-size: cover;
  /* If we don't add the following opcacity, it uses a default .99 opacity that fucks everything up */
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
