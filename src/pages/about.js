import * as React from "react"
import { graphql } from "gatsby" 
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row } from "react-bootstrap"

const About = ({ data, location }) => { 
  const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="About" />
        <Container className="col-lg-10 mx-auto">
            <Row className="col-10 col-md-6 col-lg-4 mx-auto"> 
            <StaticImage
                className="bio-avatar"
                layout="fullWidth"
                formats={["AUTO", "WEBP", "AVIF"]}
                src="../images/aboutatma.jpg" 
                quality={95}
                alt="Profile picture"
              /> 
            </Row>
            <Row className="col-lg-6 mx-auto mt-5"> 
            <p> 
            Atma received training in Seva (selfless service) under the auspices of Munger & Rikhiapeeth Ashrams in North East India, participating for many years with sevaks/volunteer teams in annual seva programs distributing essential items to tens of thousands of poor villagers. In 2011 she moved from long standing institutional yoga posts in Europe to apply this training full time in the slums and Himalayan mountain regions in Uttarakhand, India. 
            <br/><br/> 
            Since Atma Seva’s inception Atma has been the key worker and primary financial support via modest personal funds and assisted by grace, blessings and contributions from kind friends and family. 
            <br/><br/> 
//             Atma Seva has been blessed with sevaks’ helping hands from Argentina, Australia, Brazil, Bulgaria, Chile, China, Croatia, Denmark, Finland, France, Germany, Hungary, India, Ireland, Korea, Lithuania, Mexico, Morocco, Russia, Spain, Ukraine, Uruguay, UK & USA.
//             <br/><br/> 
            Founded on an ethos of Seva or voluntary service from the heart, Atma Seva is apolitical and non-religious. We are committed to establishing direct contact with beneficiaries, regardless of ethnicity, faith or caste, to understand their needs and capacities.
            <br/><br/> 
            <h3>About SEVA… </h3> 
            <figure>
            <blockquote class="blockquote">
            <p>Seva is not meeting your own aims, but offering the best there is in you. When it is offered to another being and it contains your best thoughts, love and compassion, then that action becomes a blessing in disguise to uplift another being. That is seva.</p>
            </blockquote>
            <figcaption class="blockquote-footer">
            <cite title="Source Title"> Swami Niranjanananda Saraswati  </cite>
            </figcaption>
            </figure> 
            <br/><br/> 
            Seva has been defined as selfless service, a spiritual practice with roots in two forms of yoga, Karma Yoga, the yoga of action and Bhakti Yoga, the yoga of devotion inspired by divine love.​
            <br/><br/> 
            Seva can be as simple as helping a child or old lady cross a street, or as challenging as caring for refugees in a war torn land a world away. Nevertheless, it is one of the most profound and life changing practices.
            <br/><br/> 
            When we have nothing to gain and nothing to lose by not doing, performing Seva in our daily activities not just for our individual families but in all our interactions and activities, the practice of Seva becomes a path to self-realization which is the essence of yoga. There are innumerable ways that every one can practice and put our best intentions into direct action and experience.
            <br/><br/> 
            Seva is done with no expectation of reward, praise, blame or even acknowledgement of the work that is done. We serve not to convert or save a soul, but simply to serve and for no other reason, performing acts of kindness without expectation of return, coming from a place of love.
            </p>              
            </Row>   
          </Container> 
      </Layout>
    )
  } 

export default About

export const pageQuery = graphql`
  query  {
    markdownRemark(frontmatter: {slug: {eq: "about"}}) {
      html
      frontmatter {
        title
        description
        img {
          childImageSharp {
            gatsbyImageData
          }
        }
        categories
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }  
`
