/*  Bio component */

 import * as React from "react"
 import { StaticQuery, graphql } from "gatsby"
 import { GatsbyImage } from "gatsby-plugin-image"
 import Carousel from 'react-bootstrap/Carousel'
 import { Col, Container } from "react-bootstrap"
 import { CaretRightFill, CaretLeftFill } from 'react-bootstrap-icons';


 export default function MyCarousel () {
    return (
      <> 
        <Container className="mx-auto">
          <StaticQuery
            query={graphql`
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
                                placeholder: TRACED_SVG 
                                transformOptions: {cropFocus: CENTER, fit: COVER}
                                layout: CONSTRAINED
                              )
                      }
                        }
                      }
                    }
                }`}
            render={data => (
              <Col> 
                <Carousel className="carousel slide carousel-fade"
                    prevLabel={null} nextLabel={null}
                    prevIcon={<CaretLeftFill  size={50} />}
                    nextIcon={<CaretRightFill size={50} />}
                    interval={1500} >  
                    { data.slideshow.edges.map(({node})=>(
                    <Carousel.Item key={node.id}>
                      <GatsbyImage 
                          image={node.childImageSharp.gatsbyImageData} 
                          alt={node.base.split('-').join(' ').split('.')[0]}/>               
                        {/* <Carousel.Caption className="carcap">
                          <h3 className="carcap-title">
                            {node.base.split('-').join(' ').split('.')[0]}
                          </h3> 
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    ))} 
                </Carousel>  
              </Col>    
            )} 
          /> 
        </Container>    
      </>
    )
  } 