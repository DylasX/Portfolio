import React from "react"

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/_Dylas"
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
                href="mailto:miguel-sg01@hotmail.com"
                className="icon fa-envelope-o"
              >
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
          <ul className="copyright">
            <li>&copy; @_Dylas</li>
            <li>{/* <a href="https://icons8.com/">icons by Icons8</a> */}</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
