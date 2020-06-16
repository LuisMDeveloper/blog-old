import React from "react"
import { graphql, Link } from 'gatsby';
import Img from "gatsby-image"
import { DiscussionEmbed } from "disqus-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class PostTemplate extends React.Component {
  render() {
    const frontmatter = this.props.data.markdownRemark.frontmatter;
    const { title, description, date, featuredImage } = frontmatter;
    const post = this.props.data.markdownRemark;
    const { previous, next, slug } = this.props.pageContext;
    const disqusConfig = {
      shortname: process.env.GATSBY_DISQUS_NAME,
      config: { identifier: slug, title },
    }
    return (
      <Layout title={title}>
        <SEO title={title} description={description || post.excerpt} slug={slug}/>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card border-light">
                <div className="row">
                  <div className="col">
                    <Img fluid={featuredImage.childImageSharp.fluid} className="card-img-top"/>
                    <div className="card-img-overlay text-center d-flex flex-column justify-content-center">
                      <h1 className="d-none d-sm-block">
                        {post.frontmatter.title}
                      </h1>
                      <p><i className={`fab ${post.frontmatter.topicIcon} fa-3x`}></i></p>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h2 className="card-title d-block d-sm-none">{post.frontmatter.title}</h2>
                  <div className="card-subtitle mb-2 post-subtitle">
                    <h5>Luis Manuel Ramirez Vargas</h5>
                    <span>{date}</span>
                    {post.frontmatter.codeLink && (
                      <a href={post.frontmatter.codeLink} target="_blank" rel="noreferrer"><i className="fas fa-code"></i> Get the Code</a>
                    )}
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
                  <DiscussionEmbed {...disqusConfig} />
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
                description
                topicIcon
                codeLink
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