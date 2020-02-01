import React from "react"
import { Fragment } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "./layout.css"

export default ({ children }) => (
  <Fragment>
    <Navbar />
    {children}
    <Footer />
  </Fragment>
)
