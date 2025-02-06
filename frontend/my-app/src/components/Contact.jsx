import React from 'react'
import Navbar from './Navbar'
import "../CSS/contact.css"
import Footer from './Footer'


const Contact = () => {
  return (
     <div className="main-body">
     <div><Navbar/></div>

     <div className="shape"></div>
     <div className="shape"></div>

     <div className="contact-container">
      <h2>WE'RE TO HELP</h2>
      <form className="contact-form">
        <div className="form-row">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="Phone" />
          <input type="text" placeholder="Reason" />
        </div>
        <textarea placeholder="Any other information..."></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>


   <Footer></Footer>
    
     </div>
  )
}

export default Contact
