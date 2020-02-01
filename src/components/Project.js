import React from "react"
import { graphql } from "gatsby"

const BlogPostTemplate = ({ data }) => <article></article>

export default BlogPostTemplate

export const query = graphql`
  query MyQuery {
    allGitlabProjects(limit: 3) {
      nodes {
        web_url
        name
      }
    }
  }
`
