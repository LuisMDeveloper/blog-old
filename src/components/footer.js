import React from "react"

let widths = ["w-25", "w-50", "w-75", "w-100"]
let colors = ["bg-success", "bg-info", "bg-warning", "bg-danger"]

class Footer extends React.Component {
  render() {
    return <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="d-flex justify-content-center">
            </div>
            <div className="footer-social d-flex justify-content-center">
              <a href="https://twitter.com/LuisMDeveloper"><i className="fab fa-twitter fa-2x"></i></a>
              <a href="https://github.com/LuisMDeveloper"><i className="fab fa-github fa-2x"></i></a>
            </div>
          </div>
          <div className="col-9">
            <h2>Luis Manuel Ramirez Vargas</h2>
            <h4 className="muted">iOS Developer</h4>
            <p>Results-oriented software developer and research professional with seven years experience in both
              development and research positions. I make it my goal to create software with the user in mind, creating
              applications with a useable and intuitive user interface experience. I also understand the importance of
              creating highly readable and easily maintainable source code. I am constantly striving to learn new
              technologies and look to ways to better myself in this rapidly changing industry.</p>
          </div>
        </div>
      </div>
    </footer>
  }
}

export default Footer