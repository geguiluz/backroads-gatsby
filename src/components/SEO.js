import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        author
        siteUrl
        twitterUsername
        image
      }
    }
  }
`

function SEO({ title, description }) {
  const { site } = useStaticQuery(getData)
  const {
    siteTitle,
    siteDesc,
    author,
    siteUrl,
    twitterUsername,
    image,
  } = site.siteMetadata
  return (
    <div>
      <Helmet title={`${title} | ${siteTitle}`} htmlAttributes={{ lang: "en" }}>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        {/* Twitter card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={twitterUsername} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={siteDesc} />
        <meta name="twitter:image" content={`${siteUrl}${image}`} />
      </Helmet>
    </div>
  )
}

export default SEO
