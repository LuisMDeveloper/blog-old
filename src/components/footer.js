import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Footer = () => {
  const data = useStaticQuery(graphql`
      query {
          site {
              siteMetadata {
                  author
              }
          }
          profilePic: file(relativePath: { eq: "profile-pic.jpg" }) {
              childImageSharp {
                  fixed(width: 174, height: 174) {
                      ...GatsbyImageSharpFixed
                  }
              }
          }
      }
  `)

  return <footer id="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-12">
          <div className="d-flex justify-content-center">
            <Img fixed={data.profilePic.childImageSharp.fixed} className="img-thumbnail rounded-circle"/>
          </div>
          <div className="footer-social d-flex justify-content-center">
            <a href="https://twitter.com/LuisMDeveloper"><i className="fab fa-twitter fa-2x"/></a>
            <a href="https://github.com/LuisMDeveloper"><i className="fab fa-github fa-2x"/></a>
          </div>
        </div>
        <div className="col-lg-9 col-md-12">
          <h2>{data.site.siteMetadata.author}</h2>
          <h4 className="muted">iOS Developer</h4>
          <p>Results-oriented software developer and research professional with seven years experience in both
            development and research positions. I make it my goal to create software with the user in mind, creating
            applications with a useable and intuitive user interface experience. I also understand the importance of
            creating highly readable and easily maintainable source code. I am constantly striving to learn new
            technologies and look to ways to better myself in this rapidly changing industry.</p>
        </div>
      </div>
    </div>
    <div id="copyright" className="text-center">
      Made with <a href="https://www.gatsbyjs.org/">Gatsby</a> and <i className="fas fa-heart"></i>
    </div>
  </footer>
}

export default Footer