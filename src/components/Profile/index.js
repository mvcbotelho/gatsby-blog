import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Profile = () => {
  const {
    site: {
      siteMetadata: { author, description, position },
    },
  } = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          author
          description
          position
        }
      }
    }
  `)

  return (
    <div className="profile-wrapper">
      <h1>{author}</h1>
      <h2>{position}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Profile
