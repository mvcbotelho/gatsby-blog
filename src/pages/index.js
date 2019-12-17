import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query PostList {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                backgroud
                category
                date(formatString: "DD [de] MMMM [de] YYYY", locale: "PT-BR")
                description
                title
              }
            }
          }
        }
      }
    `
  )

  const postList = allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(
        ({
          node: {
            frontmatter: { backgroud, category, date, description, title },
            fields: { slug },
          },
        }) => (
          <PostItem
            slug={slug}
            background={backgroud}
            category={category}
            date={date}
            title={title}
            description={description}
          />
        )
      )}
    </Layout>
  )
}

export default IndexPage
