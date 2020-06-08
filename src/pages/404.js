import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container" style={{ height: '500px'}}>
      <h1><i className="fas fa-exclamation-triangle"></i> 404</h1>
      <h2>Something is Wrong</h2>
      <p>The page you are looking for was moved, removed, renamed or might never existed.</p>
      <Link to="/" className="btn btn-primary">Go Home <i className="fas fa-chevron-right"></i></Link>
    </div>
  </Layout>
)

export default NotFoundPage
