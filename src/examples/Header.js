import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
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
  `)
  return (
    <div>
      <h1>Title: {siteMetadata.title}</h1>
      <h1>Author:</h1>
    </div>
  )
}
export default Header
