import * as React from "react"
import { graphql, navigate } from "gatsby" 
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Col, Row, Container, Button  } from "react-bootstrap" 
import { GatsbyImage } from "gatsby-plugin-image"  
import Carousel from 'react-bootstrap/Carousel' 
import { ChevronCompactLeft, ChevronCompactRight  } from 'react-bootstrap-icons';
 
const WhatwedoSingleTemplate = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const post = data.markdownRemark 
  
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
      <Container className="col-md-8 mx-auto "> 
        <article className="blog-post mb-5"> 
            <header>
              <h2 className="text-title" >{post.frontmatter.title}</h2> 
            </header>

           <Row className="mb-5"> 
            <Col md={10} lg={8} className="  mx-auto">
              <section
                dangerouslySetInnerHTML={{ __html: post.html }}
                itemProp="articleBody"
                />
            </Col>
          </Row> 
              

          <Row>
            <Container className="col-lg-8 mx-auto"> 
              <Carousel className="carousel slide carousel-fade"
                prevLabel={null} nextLabel={null}
                prevIcon={<ChevronCompactLeft color="#F2950A" size={70} />}
                nextIcon={<ChevronCompactRight color="#F2950A" size={70} />}
                interval={1500} >  
                  {post.frontmatter.set.map((image, index) =>{ 
                return(
                <Carousel.Item key={index}>
                  <GatsbyImage 
                      image={image.childImageSharp.gatsbyImageData}  
                      alt="Atma seva"/> 
                </Carousel.Item>
                  )})} 
              </Carousel>  
            </Container>
          </Row>  
      </article>

      
          
      <Row className="col-lg-3 mx-auto "> 
      <Button 
        className="mt-5 d-flex justify-content-center" 
        size="lg" 
        variant="outline-warning" 
        onClick={() => navigate(-1)}>
        Go Back 
      </Button> 
      </Row> 
      
      </Container> 
    </Layout>
  )
}

export default WhatwedoSingleTemplate

export const pageQuery = graphql`
  query WhatwedoSingleBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        set {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              transformOptions: {fit: FILL, cropFocus: CENTER}
            )
          }
        }
        img {
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
          }
        }
      }
    }
    
     
    
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
