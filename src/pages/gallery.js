import * as React from "react"
import {  graphql, useStaticQuery  } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container } from "react-bootstrap" 
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const query = graphql`
{
  allFile(filter: {relativeDirectory: {eq: "front"}}) {
    totalCount
    nodes {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, height: 280)
      }
      name
    }
  }
}
`

const Gallery = ({ location } ) => { 
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes

 return (
  <Layout location={location}  >
   <Seo title="Gallery" />
   <h2 className="text-title"> Gallery </h2>
    <Container fluid className="gallery"> 
      {nodes.map((image, index)=>{
          const {name} = image
          const pathToImage = getImage(image)
          return(
            <article className="gallery-item" key={index}>
              <GatsbyImage
                  image={pathToImage}
                  alt={name}
                  className="gallery-image"
              />  
            </article>
          )})}   
    </Container> 
  </Layout>
    )}

export default Gallery
 