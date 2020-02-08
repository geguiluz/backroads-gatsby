import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const StyledHero = ({ img, className, children, homeFlag }) => {
  return (
    <div>
      <BackgroundImage className={className} fluid={img} homeFlag={homeFlag}>
        {children}
      </BackgroundImage>
    </div>
  )
}

export default styled(StyledHero)`
  min-height: ${props => (props.homeFlag ? "calc(100vh - 62px)" : "50")};
  background: ${props =>
    props.homeFlag
      ? "linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))"
      : "home"};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
