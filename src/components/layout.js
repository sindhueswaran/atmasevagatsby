import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css'
import Navigation from "./nav";
import Footer from "./footer";

const Layout = ({children}) => {

  return (
    <>
     <Navigation/> 
        <div className="section-container">
          <main>{children}</main> 
        </div>
      <Footer /> 
    </>
  )
}

export default Layout
