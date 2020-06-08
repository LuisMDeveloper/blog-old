import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    //const blogTitle = data.site.siteMetadata.title;
    //const authorName = data.site.siteMetadata.author;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout>
        <SEO title="Blog"/>
        <div className="container main">
          {posts.map((post, index) => {
            return (
              <div className="row post" key={index}>
                <div className="col">
                  <div className="card border-light">
                    <div className="row no-gutters">
                      <div className="col-xl-4 col-lg-5 d-none d-xl-block d-lg-block">
                        <img src={post.node.frontmatter.thumbnail.childImageSharp.fixed.src} className="card-img" alt="..."/>
                        <div className="carousel-caption">
                          <h2>
                            <i className={`fab ${post.node.frontmatter.topicIcon} fa-3x`}></i>
                          </h2>
                          <p>{post.node.frontmatter.topic}</p>
                        </div>
                      </div>
                      <div className="col-xl-8 col-lg-7">
                        <div className="card-body">
                          <h5 className="card-title">{post.node.frontmatter.title}</h5>
                          <h6 className="card-subtitle mb-2 text-muted">{post.node.frontmatter.date}</h6>
                          <p className="card-text">
                            {post.node.excerpt}
                          </p>
                          <Link to={post.node.fields.slug} className="btn btn-primary">Read More <i className="fas fa-chevron-right"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    html
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                        topic
                        topicIcon
                        thumbnail {
                            childImageSharp {
                                fixed(width: 375, height: 250) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`