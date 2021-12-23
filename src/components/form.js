/* Form component */

import * as React from "react" 
 
const Form = () => { 

  return ( 
    <>  
      <h2 className="text-title"> Do get in touch </h2>
        <form className="d-grid" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
        <p class="hidden">
          <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
        </p>
              <div className="mb-3">
                <input type="name" name="name" className="form-control text-center rounded-0" aria-describedby="emailHelp" placeholder="Your Name"/> 
              </div>
              <div className="mb-3"> 
                <input type="name" name="email" className="form-control text-center rounded-0" aria-describedby="emailHelp" placeholder="Your Email"/> 
              </div>
              <div className="mb-3 ">
                <textarea name="message" className="form-control text-center rounded-0" rows="3" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="btn btn-outline-warning btn-lg rounded-0">Submit</button>
        </form> 
    </>
   )
 }
 
 export default Form
 
