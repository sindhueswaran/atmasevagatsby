import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {  Col, Container  } from "react-bootstrap"
import Form from "../components/form"
// import { StaticImage } from "gatsby-plugin-image"

const ThankYou = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title` 
  const email = data.site.siteMetadata?.email || `email`

    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="Support" />   
          <Container className="col-md-8 mx-auto">
            <Col className= "text-center" > 
              <h2 className="text-title">Support the Seva</h2>  
                <p className="col-md-6 mx-auto text-center ">
                  If you would like to contribute towards Atma Seva’s efforts, <br/>
                  please do get in touch so we can send you the details.</p>     
                <a className="email-text  text-center" href="mailto:{email}" target="_top"> {email} </a>  
            </Col>   
            <div className="col-md-8 mx-auto">
            <h3> Thank you for your message. </h3>
            </div>
          </Container>   
      </Layout>
    )
  } 

export default ThankYou

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        email
      }
    }
  }
`
