import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const NotFoundPage = () =>
  {
  return <Layout><h1>Page not found</h1><br /><Link to="/">Go home</Link></Layout>
  }

export default NotFoundPage

export const Head = () => <title>404 Not Found</title>
