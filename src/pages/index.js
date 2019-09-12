import React from "react"
import Helmet from "react-helmet"

import Layout from "../components/layout"
// import Lightbox from 'react-images'
// import Gallery from "../components/Gallery"

class HomeIndex extends React.Component {
  render() {
    const siteTitle = "Home"
    const siteDescription = "Site description"

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>
                Something about me
                <br />
              </h2>
            </header>
            <p>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Im Miguel also known as Dylas, I'm a Software Engineer with a lot
              of passion of his work. I really enjoy learning new things,
              develop with new tecnologys, do hikes, play basketball, expend
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              time with my friends and I'm a lover of videogames
              <br />
              <span role="img" aria-label="emoji">
                🎮
              </span>
              <br />
              <br />
              This space is only to show a little bit of me and my work if you
              are interested on something just let me know!
              <span role="img" aria-label="emoji">
                🤓
              </span>
            </p>
          </section>

          <section id="two">
            <h2>Skills</h2>
            <div>
              <img
                src="https://img.icons8.com/color/48/000000/javascript.png"
                alt="JavaScript"
                height="50"
                width="50"
                className="skills"
              />
              <img
                src="https://img.icons8.com/color/48/000000/nodejs.png"
                alt="node"
                height="50"
                width="50"
                className="skills"
              />
              <img
                src="https://img.icons8.com/color/48/000000/html-5.png"
                alt="html"
                height="50"
                width="50"
                className="skills"
              />
              {/* <img
                src="https://img.icons8.com/color/48/000000/css3.png"
                alt="css"
                height="50"
                width="50"
                className="skills"
              /> */}
              <img
                src="https://img.icons8.com/color/48/000000/bootstrap.png"
                alt="bootstrap"
                height="50"
                width="50"
                className="skills"
              />
              <img
                src="https://img.icons8.com/color/48/000000/git.png"
                alt="GIT"
                height="50"
                width="50"
                className="skills"
              />
              <img
                src="https://img.icons8.com/color/48/000000/raspberry-pi.png"
                alt="rpi"
                height="50"
                width="50"
                className="skills"
              />
              <img
                src="https://img.icons8.com/color/48/000000/arduino.png"
                alt="arduino"
                height="50"
                width="50"
                className="skills"
              />
              <img
                src="https://img.icons8.com/color/48/000000/docker.png"
                alt="docker"
                height="50"
                width="50"
                className="skills"
              />
              <img
                src="https://img.icons8.com/color/48/000000/php.png"
                alt="php"
                height="50"
                width="50"
                className="skills"
              />
              <img
                src="https://img.icons8.com/color/48/000000/sql.png"
                alt="sql"
                height="50"
                width="50"
                className="skills"
              />
              <img
                src="https://img.icons8.com/color/48/000000/amazon-web-services.png"
                alt="amazon"
                height="50"
                width="50"
                className="skills"
              />
              <img
                src="https://img.icons8.com/color/48/000000/linux.png"
                alt="linux"
                height="50"
                width="50"
                className="skills"
              />
              <img
                src="https://img.icons8.com/color/48/000000/react-native.png"
                alt="linux"
                height="50"
                width="50"
                className="skills"
              />
            </div>
            <br />
            <div>
              <h2>Languages</h2>
              <img
                src="https://img.icons8.com/color/48/000000/colombia.png"
                alt="spanish"
                height="50"
                width="50"
                className="skills"
              />
              <img
                src="https://img.icons8.com/color/48/000000/usa.png"
                alt="english"
                height="50"
                width="50"
                className="skills"
              />
            </div>
          </section>

          <section id="three">
            <h2>Recent Work</h2>

            {/* <Gallery
              images={DEFAULT_IMAGES.map(
                ({ source, thumbnail, caption, description }) => ({
                  source,
                  thumbnail,
                  caption,
                  description,
                })
              )}
            /> */}

            <ul className="actions">
              <li>
                <a href="https://gitlab.com/Miguel.sierra" className="button">
                  Full Portfolio
                </a>
              </li>
            </ul>
          </section>

          <section id="four">
            <h2>Get In Touch</h2>
            <div className="row">
              <div className="8u 12u$(small)">
                <form
                  name="contact"
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input type="hidden" name="bot-field" />
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                  <ul className="actions">
                    <li>
                      <input type="submit" value="Send Message" />
                    </li>
                  </ul>
                </form>
              </div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="#">miguel-sg01@hotmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
