import React from "react"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="Continue Exploring"
        info="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni veritatis odit ullam, quod ipsa quibusdam!"
      >
        <Link to="/tours" className="btn-white">
          Explore Tours
        </Link>
      </Banner>
    </SimpleHero>
    <About />
  </Layout>
)
