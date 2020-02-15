import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ title, description }) {
  return (
    <div>
      <Helmet title={title} htmlAttributes={{ lang: "en" }}>
        <meta name="description" content={description} />
      </Helmet>
    </div>
  )
}

export default SEO
