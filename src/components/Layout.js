import React from "react"
import { Fragment } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default ({ children }) => (
  <Fragment>
    <Navbar />
    {children}
    <Footer />
  </Fragment>
)
