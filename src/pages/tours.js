import React from "react"
import Layout from "../components/Layout"
import Button from "../examples/Button"

export default () => {
  return (
    <Layout>
      hello from tours page!!
      <div>
        <Button color="white" size="big">
          First Button
        </Button>
        <Button color="red">Second Button</Button>
      </div>
    </Layout>
  )
}
