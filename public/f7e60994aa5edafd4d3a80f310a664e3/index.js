import * as React from "react"
import Home from "../components/home"
import Layout from "../components/layout"

const IndexPage = () =>
  {
  return <Layout><Home/></Layout>
  }

export default IndexPage

export const Head = () => <title>AcceleratorApp</title>