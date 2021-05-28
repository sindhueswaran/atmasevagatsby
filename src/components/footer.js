/* Footer component */

import * as React from "react"
import { Link  } from "gatsby";  
import { Container, ListGroup } from "react-bootstrap"
 
const Footer = () => { 

  return ( 
    <> 
      <footer> 
          <Container > 
              <p> Property of Atma Seva </p> 
            <ListGroup className="justify-content-center" horizontal>
                <ListGroup.Item variant="dark"><Link to="/covid" className="footer-nav-link" activeClassName="active">Covid-19</Link> </ListGroup.Item>
                <ListGroup.Item variant="dark"><Link to="/about" className="footer-nav-link" activeClassName="active">About</Link> </ListGroup.Item>
                <ListGroup.Item variant="dark"><Link to="/whatwedo" className="footer-nav-link"  activeClassName="active">What We Do</Link> </ListGroup.Item>
                <ListGroup.Item variant="dark"><Link to="/contact" className="footer-nav-link"  activeClassName="active">Contact</Link></ListGroup.Item>
                <ListGroup.Item variant="dark"><Link to="/donate" className="footer-nav-link"  activeClassName="active">Donate</Link></ListGroup.Item>
            </ListGroup> 
          </Container>
      </footer>
  
    <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script> 
    <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin></script> 
    <script  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script> 
    <script>var Alert = ReactBootstrap.Alert;</script>
    </>
  
   )
 }
 
 export default Footer
 
