import React from "react";
import { Carousel } from "react-bootstrap";
import "../CSS/homepage.css"; // Import the CSS file
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import carousel_one from "../images/carousel_1.jpg"
import carousel_two from "../images/carousel_2.jpg"
import carousel_three from "../images/carousel_3.jpg"


const HomePage = () => {
  return (
    <div className="homepage">

      {/* This is Navbar component*/}
      <Navbar></Navbar>

      {/* Hero Section */}
      <section className="hero">

        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel_three} alt="First slide" style={{ width: "100%", height: "800px" }}
            />
            <Carousel.Caption>
              <h3>First Slide Label</h3>
              <p>Sample description for the first slide.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={carousel_two} alt="Second slide" style={{ width: "100%", height: "800px" }} />
            <Carousel.Caption>
              <h3>Second Slide Label</h3>
              <p>Sample description for the second slide.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={carousel_one} alt="Third slide" style={{ width: "500%", height: "800px" }} />
            <Carousel.Caption>
              <h3>Third Slide Label</h3>
              <p>Sample description for the third slide.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>


      </section>
      <hr></hr>
      <section className="hero">
      <div className='col-sm-6' align='center' style={{ fontSize: '1.5rem' }}>
      <table className='table table-responsive' style={{ border: '2px solid black', borderCollapse: 'collapse' }}>
        <tbody>
          <tr>
            <th colSpan='3' style={{ color: 'white', backgroundColor: 'red', border: '1px solid black' }}>
              Compatible Blood Type Donors
            </th>
          </tr>
          <tr>
            <td style={{ border: '1px solid black' }}><b>Blood Type</b></td>
            <td style={{ border: '1px solid black' }}><b>Donate Blood To</b></td>
            <td style={{ border: '1px solid black' }}><b>Receive Blood From</b></td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black' }}><span style={{ color: '#961e1b' }}><b>A+</b></span></td>
            <td style={{ border: '1px solid black' }}>A+ AB+</td>
            <td style={{ border: '1px solid black' }}>A+ A- O+ O-</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black' }}><span style={{ color: '#961e1b' }}><b>O+</b></span></td>
            <td style={{ border: '1px solid black' }}>O+ A+ B+ AB+</td>
            <td style={{ border: '1px solid black' }}>O+ O-</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black' }}><span style={{ color: '#961e1b' }}><b>B+</b></span></td>
            <td style={{ border: '1px solid black' }}>B+ AB+</td>
            <td style={{ border: '1px solid black' }}>B+ B- O+ O-</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black' }}><span style={{ color: '#961e1b' }}><b>AB+</b></span></td>
            <td style={{ border: '1px solid black' }}>AB+</td>
            <td style={{ border: '1px solid black' }}>Everyone</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black' }}><span style={{ color: '#961e1b' }}><b>A-</b></span></td>
            <td style={{ border: '1px solid black' }}>A+ A- AB+ AB-</td>
            <td style={{ border: '1px solid black' }}>A- O-</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black' }}><span style={{ color: '#961e1b' }}><b>O-</b></span></td>
            <td style={{ border: '1px solid black' }}>Everyone</td>
            <td style={{ border: '1px solid black' }}>O-</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black' }}><span style={{ color: '#961e1b' }}><b>B-</b></span></td>
            <td style={{ border: '1px solid black' }}>B+ B- AB+ AB-</td>
            <td style={{ border: '1px solid black' }}>B- O-</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black' }}><span style={{ color: '#961e1b' }}><b>AB-</b></span></td>
            <td style={{ border: '1px solid black' }}>AB+ AB-</td>
            <td style={{ border: '1px solid black' }}>AB- A- B- O-</td>
          </tr>
        </tbody>
      </table>
    </div>
      </section>



      <Footer />


    </div>
  );
};

export default HomePage;
