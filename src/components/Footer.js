import React from "react"

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/_Dylas_"
                target="_blank"
                rel="noopener noreferrer"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://gitlab.com/Miguel.sierra"
                target="_blank"
                rel="noopener noreferrer"
                className="icon fa-gitlab"
              >
                <span className="label">Gitlab</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:m@dylas.dev"
                className="icon fa-envelope-o"
              >
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
          <ul className="copyright">
            <li>&copy; @_dylas_</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
