/* Navigation */

import * as React from "react"   
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link  } from "gatsby";  
import { Container,Nav, Navbar } from 'react-bootstrap';
import Logo from '../components/logo' 
 
const Navigation = () => {  
    return ( 
      <Container>
        <Navbar expand="lg">
        <Navbar.Brand className=" d-sm-block d-md-block d-lg-none mt-0"  href="/"> <Logo/> </Navbar.Brand>   
        <Navbar.Toggle aria-controls="asnavbar"/> 

        <Navbar.Collapse  className="collapse navbar-collapse" id="asnavbar">
            <Nav className="m-auto text-center" >
            <Nav.Item  >
                <Link to="/" className="nav-link logo-link d-none d-sm-none d-md-none d-lg-block" activeClassName="nav-active"> <Logo/> </Link>
            </Nav.Item>
            <Nav.Item   >
                <Link to="/covid" className="nav-link covid" activeClassName="nav-active">Covid-19</Link>
            </Nav.Item>
            <Nav.Item   >
                <Link to="/about" className="nav-link" activeClassName="nav-active">About</Link>
            </Nav.Item> 
            <Nav.Item   >
                <Link to="/whatwedo" className="nav-link" activeClassName="nav-active">What We Do</Link>
            </Nav.Item> 
            <Nav.Item >
                <Link to="/gallery" className="nav-link" activeClassName="nav-active">Gallery</Link>
            </Nav.Item> 
            <Nav.Item >        
                <Link to="/contact" className="nav-link" activeClassName="nav-active">Contact</Link>
            </Nav.Item>
            <Nav.Item >        
                <Link to="/support" className="nav-link" activeClassName="nav-active">Support</Link>
            </Nav.Item>  
            </Nav>
            </Navbar.Collapse>
        </Navbar>   
    </Container>
  )
}

export default Navigation;

 