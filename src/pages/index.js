import * as React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Community from "../components/community"
import Feature from "../components/feature"
import Customer from "../components/customer"

const IndexPage = () =>
  {
  return <Layout><Hero/><Community/><Feature/><Customer/></Layout>
  }

export default IndexPage

export const Head = () => <title>AcceleratorApp</title>