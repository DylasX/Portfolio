import React from "react"

import Footer from "./Footer"
import avatar from "../assets/images/avatar.jpg"

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar">
            <img src={avatar} alt="" />
          </a>
          <h1>
            <strong>I am Miguel Sierra</strong>, Just a simple mortal that likes
            all about software <br></br>
            <span role="img" aria-label="emoji">
              💻💙
            </span>
            <br />
            @_Dylas
          </h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
