import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Col, Container } from "react-bootstrap" 
import { StaticImage } from "gatsby-plugin-image"   

const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const email = data.site.siteMetadata?.email || `Email`
  
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="Contact" />
         <Container className="col-md-8 mx-auto">
          <Col  className=" text-center mb-5">
            <h2 className="text-title"> Email </h2>                 
              <a className="email-text" href="mailto:{email}" target="_top" >{email}</a> 
              <h2 className="text-title"> Follow us on... </h2>
              
            <div className="social-icons">
              <a class="social-btn" href="https://www.facebook.com/AtmaSeva108/"> 
              <StaticImage
                className="bio-avatar"
                layout="fixed"
                formats={["AUTO", "WEBP", "AVIF"]}
                src="../images/facebook.svg"
                width={75}
                height={75}
                quality={95}
                alt="Profile picture"
              /> 
              </a>

              <a class="social-btn" href="https://www.instagram.com/atma.tattwa/">
              <StaticImage
                className="bio-avatar"
                layout="fixed"
                formats={["AUTO", "WEBP", "AVIF"]}
                src="../images/instagram.svg"
                width={75}
                height={75}
                quality={95}
                alt="Profile picture"
              /> 
              </a>
            </div>
            </Col>   
          </Container> 
      </Layout>
    )} 

export default Contact

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
