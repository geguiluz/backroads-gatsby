import React from "react"
import { Link } from "gatsby"
import styles from "../css/error.module.css"
import Banner from "../components/Banner"
import Layout from "../components/Layout"

const error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="Page does not exist">
          <Link to="/" className="btn-white">
            Back to Homepage
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
