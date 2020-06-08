import React from "react"
import { graphql, Link } from 'gatsby';
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

class PostTemplate extends React.Component {
  render() {
    const frontmatter = this.props.data.markdownRemark.frontmatter;
    const { title, subtitle, description, date, featuredImage } = frontmatter;
    const post = this.props.data.markdownRemark;
    const { previous, next, slug } = this.props.pageContext;

    return (
      <Layout title={title} subtitle={subtitle}>
        <SEO title={title} description={description || post.excerpt} slug={slug}/>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card border-light">
                {/*<img src="https://via.placeholder.com/1200x500" className="card-img-top" alt="..."/>*/}
                <Img fluid={featuredImage.childImageSharp.fluid} className="card-img-top"/>
                <div className="card-body">
                  <br/>
                  <h2 className="card-title">Serving Remote Optimized Images w/ gatsby-image w/o GraphQL</h2>
                  <br/>
                  <div className="card-subtitle mb-2 d-flex post-subtitle">
                    <h5>Luis Manuel Ramirez Vargas</h5>
                    <div className="post-subtitle-social-icons">
                      <a href="https://twitter.com/LuisMDeveloper"><i className="fab fa-twitter fa-lg"></i></a>
                      <a href="https://github.com/LuisMDeveloper"><i className="fab fa-github fa-lg"></i></a>
                    </div>
                    <span>{date}</span>
                    <a href="#"><i className="fas fa-code"></i> Get the Code</a>
                  </div>
                  <br/>
                  <div className="card-text" dangerouslySetInnerHTML={{ __html: post.html }} />
                  <div className="">
                    {previous && (
                      <Link to={previous.fields.slug} rel="prev" className="btn btn-primary">
                        ← {previous.frontmatter.title}
                      </Link>
                    )}
                    {next && (
                      <Link to={next.fields.slug} rel="next" className="btn btn-primary float-right">
                        {next.frontmatter.title} →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              <br/>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
    query Posts($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                subtitle
                description
                featuredImage {
                    childImageSharp {
                        fluid(maxWidth: 800, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`