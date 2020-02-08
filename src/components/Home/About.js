import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      {/* Classes in css moudules are hyphened, but are exported as CamelCase */}
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={aboutImage.childImageSharp.fluid} alt="About Company" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Explore The difference</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            veniam placeat dolores ullam ad saepe tenetur beatae illum alias
            doloremque?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            veniam placeat dolores ullam ad saepe tenetur beatae illum alias
            doloremque?
          </p>
          <button type="button" className="btn-primary">
            Learn More
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
