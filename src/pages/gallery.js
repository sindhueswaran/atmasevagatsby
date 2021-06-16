import * as React from "react"
// import {  graphql, useStaticQuery  } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container } from "react-bootstrap" 
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { SRLWrapper } from "simple-react-lightbox"
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'

  function Gallery({data, location}) {
    return (
      <Layout location={location}  >
        <Seo title="Gallery" />
        <h2 className="text-title"> Gallery </h2>
          <Container fluid className="gallery">
            <SRLWrapper>
              {data.thumbnails.edges.map((e, index) => {
                return (
                  <a
                    href={ data.images.edges[index].node.childImageSharp.gatsbyImageData.images.fallback.src}>
                    <GatsbyImage
                      image={e.node.childImageSharp.gatsbyImageData}
                      alt={e.node.name} 
                    />
                  </a>
                )
              })}
            </SRLWrapper>
        </Container> 
      </Layout>
    )}

  export const query = graphql`
  {
    images: allFile(
      filter: { relativeDirectory: { eq: "gallery" } }
      sort: { order: ASC, fields: name }
    ) {
      edges {
        node {
          name
          id
          relativePath
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
    thumbnails: allFile(
      filter: { relativeDirectory: { eq: "gallery" } }
      sort: { order: ASC, fields: name }
    ) {
      edges {
        node {
          name
          id
          relativePath
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              layout: CONSTRAINED 
              height: 240
            )
          }
        }
      }
    }
  }
`
export default Gallery