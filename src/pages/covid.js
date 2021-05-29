import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Row, Container  } from "react-bootstrap" 
import { GatsbyImage } from "gatsby-plugin-image"
import Carousel from 'react-bootstrap/Carousel' 
import { ChevronCompactLeft, ChevronCompactRight  } from 'react-bootstrap-icons';

const Covid = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  
    return (
      <Layout location={location} title={siteTitle}> 
      <Seo title="Covid-19" /> 

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
 
        <Row className="col-lg-6 mx-auto mt-5">
          <p> Since the start of the Covid-19 pandemic and during lockdowns Atma Seva has focused on Rations Relief for below poverty level families, now jobless, daily wage earners with no backup or support to feed their hungry families. 
          <br/><br/>           
          The situation is dire. Many are itinerant labourers not beggars but proud working men and women. Through extraordinary Grace from the Divine Powers that be, support has flowed in from yogis, friends, family and openhearted kindness and trust of previously unknown souls from Australia, Belgium, Canada, China, Denmark, Germany, Hawaii, Hungary, India, Ireland, Lebanon, Netherlands and UK which has made it possible, for nearly 900 families in slums and villages in 14 locations in 6 states.
          <br/><br/>           
          Family Ration ‘kits’ with 14 items cost 1200 rupees each (USD 16, EUR 13.5, GBP 11.6, AUD 21 & CAD 19.8 at the time of writing). They last for 18 to 21 days. We continue to do what we can with what we receive. With zero administration costs every cent and penny goes directly to our beneficiaries.
          </p>
        </Row> 
        </Container>
    </Layout>
    )} 

export default Covid

export const pageQuery = graphql`
  query {
    slideshow: allFile(
      filter: {relativeDirectory: {eq: "covid"}}
      sort: {fields: base, order: ASC}
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            gatsbyImageData(width: 640, height: 480, placeholder: BLURRED, transformOptions: {cropFocus: CENTER, fit: COVER})
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
