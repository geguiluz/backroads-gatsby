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
        {/* Facebook card */}
        <meta name="og:url" content={siteUrl} />
        <meta name="og:type" content="website" />
        <meta name="og:title" content={siteTitle} />
        <meta name="og:description" content={siteDesc} />
        <meta name="og:image" content={`${siteUrl}${image}`} />
        <meta name="og:image:width" content="400" />
        <meta name="og:image:height" content="400" />
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
