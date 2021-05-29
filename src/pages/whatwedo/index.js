import * as React from "react" 
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Container } from "react-bootstrap" 
import { GatsbyImage } from "gatsby-plugin-image"


export default function WhatWeDo ({ data, location })  {
  console.log(data)
 
const siteTitle = data.site.siteMetadata?.title || `Title`
const whatwedo = data.whatwedo.nodes  
 
   
 return (
  <Layout location={location} title={siteTitle} >
   <Seo title="What we do" />
   <h2 className="text-title">What we do</h2>
    <Container >
        <div className="row row-cols-1 row-cols-md-2 g-5">
          {whatwedo.map(whatwedos => ( 
            <div className="col">
                <Link className="wwd-link" to={whatwedos.fields.slug} key={whatwedos.id}  >
                  <div className="card wwd-list-item mb-3">
                  <GatsbyImage
                    image={whatwedos.frontmatter.img.childImageSharp.gatsbyImageData}
                    alt={whatwedos.frontmatter.title}
                    className="image"
                  /> 
                <div>
                  <h3 className="wwd-list-title text-center mt-3">{whatwedos.frontmatter.title}</h3> 
                </div>
              </div>
            </Link>   
          </div>
          ))}
        </div>  
    </Container>
  </Layout>
)}


export const query = graphql`{
  whatwedo: allMarkdownRemark(
    filter: {fields: {draft: {eq: false}}, frontmatter: {categories: {eq: "whatwedo"}}}
    sort: {fields: frontmatter___weight}
  ) {
    nodes {
      id
      frontmatter {
        title
        description
        img {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
      }
      fields {
        slug
      }
    }
  }
  site {
    siteMetadata {
      title
    }
  }
}
`




         