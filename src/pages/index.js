import * as React from "react"
import { graphql } from "gatsby" 
import Layout from "../components/layout"
import Seo from "../components/seo" 
import { GatsbyImage } from "gatsby-plugin-image"
import { Col, Row, Container  } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel' 
import { ChevronCompactLeft, ChevronCompactRight  } from 'react-bootstrap-icons';

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
    
  return (
    <Layout location={location} title={siteTitle}> 
      <Seo title="Atma Seva" /> 
      <Container className="col-lg-10 mx-auto">
        <Row className="col-12 col-md-8 col-lg-6 mx-auto">
          <Carousel 
            className="carousel slide carousel-fade"
              prevLabel={null} nextLabel={null}
              prevIcon={<ChevronCompactLeft color="#F2950A" size={70} />}
              nextIcon={<ChevronCompactRight color="#F2950A" size={70} />}
              interval={2500} >  
                { data.slideshow.edges.map(({node})=>(
                  <Carousel.Item key={node.id}>
                    <GatsbyImage 
                      image={node.childImageSharp.gatsbyImageData} 
                      alt={node.base.split('-').join(' ').split('.')[0]}/> 
                  </Carousel.Item>
                    ))} 
          </Carousel>  
        </Row>
     

        <Row className="col-12 col-md-10 col-lg-8 mx-auto py-5"  >
            <h3 className="front-text text-center"> 
              Providing support, in Health care, Welfare and Education for Vulnerable, 
              Marginalised, Women, Children and the Elderly in Uttarakhand, India 
            </h3>
        </Row>
      </Container>            
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    slideshow: allFile(
      filter: {relativeDirectory: {eq: "front"}}
      sort: {fields: base, order: ASC}
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            gatsbyImageData( 
              height: 600
              width: 900
              placeholder: BLURRED 
              transformOptions: {cropFocus: CENTER, fit: COVER}
              layout: CONSTRAINED
            )
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        email
      }
    }
  }
  
`
