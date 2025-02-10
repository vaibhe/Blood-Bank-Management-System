import React from "react";
import { Carousel } from "react-bootstrap";
import "../CSS/homepage.css"; // Import the CSS file
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
// import carousel_one from "../images/carousel_1.jpg"
import carousel_two from "../images/carousel_2.jpg"
import carousel_three from "../images/carousel_3.jpg"
import blood_drop from "../images/blood_drop.png";
import image from "../images/donate_blood.jpg"; 
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const HomePage = () => {

  const navigate = useNavigate();

  const styles = {
    container: {
      maxWidth: "72rem",
      margin: "0 auto",
      padding: "4rem 2rem",
      textAlign: "center",
    },
    headingSmall: {
      fontSize: "0.875rem",
      letterSpacing: "0.05em",
      color: "#58151c",
      fontWeight: "600",
      textTransform: "uppercase",
    },
    headingLarge: {
      fontSize: "3rem",
      fontWeight: "700",
      marginTop: "0.75rem",
      marginBottom: "2.5rem",
      color: "#111827",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "3rem",
    },
    stepContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    stepNumber: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "3.5rem",
      height: "3.5rem",
      borderRadius: "9999px",
      backgroundColor: "#58151c",
      color: "white",
      fontSize: "1.125rem",
      fontWeight: "700",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    stepTitle: {
      fontSize: "1.25rem",
      fontWeight: "600",
      marginTop: "1.25rem",
      color: "#111827",
    },
    stepDescription: {
      color: "#4b5563",
      marginTop: "0.75rem",
      fontSize: "1rem",
      lineHeight: "1.625rem",
    },
  };
  
  const steps = [
    {
      id: "01",
      title: "Check Your Eligibility",
      description:
        "Confirm you meet the eligibility requirements to donate blood, such as age, weight, and overall health.",
    },
    {
      id: "02",
      title: "Schedule An Appointment",
      description:
        "Schedule an appointment at a blood bank or blood drive near you.",
    },
    {
      id: "03",
      title: "Donate Blood",
      description:
        "Arrive at the appointment, fill out a questionnaire, and donate blood. The process takes about 10-15 minutes.",
    },
  ];

  const handleNavigation = () => {
    // Implement  logic
    alert("Want to donate blood ");
    navigate("/donorform"); 
  };








  return (
    <div className="homepage">

      {/* This is Navbar component*/}
      <Navbar></Navbar>

      {/* Hero Section */}
      <section className="hero">

        <Carousel>
          {/* <Carousel.Item>
            <img className="d-block w-100" src={carousel_one} alt="First slide" style={{  height: "600px" }}
            />
            <Carousel.Caption>
              <h3>First Slide Label</h3>
              <p>Sample description for the first slide.</p>
            </Carousel.Caption>
          </Carousel.Item> */}

          <Carousel.Item>
            <img className="d-block w-100" src={carousel_three} alt="Second slide" style={{  height: "800px" }} />
            <Carousel.Caption>
              <h3>Donate Blood </h3>
              <p>Sample description for the second slide.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={carousel_two} alt="Third slide" style={{  height: "800px" }} />
            <Carousel.Caption>
              <h3>Third Slide Label</h3>
              <p>Sample description for the third slide.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>


      </section>
      <hr></hr>

      <section className="hero-2">
      <div style={styles.container}>
      <h3 style={styles.headingSmall}>Donation Process</h3>
      <h2 style={styles.headingLarge}>Step-By-Step Guide To Donating Blood</h2>
      <div style={styles.grid}>
        {steps.map((step) => (
          <div key={step.id} style={styles.stepContainer}>
            <div style={styles.stepNumber}>{step.id}</div>
            <h4 style={styles.stepTitle}>{step.title}</h4>
            <p style={styles.stepDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </div>


      </section>

      <hr></hr>
      <section className="hero">
      <div className='col-sm-6' align='center' style={{ fontSize: '1.5rem' }}>
        <h2 >Learn About Donation</h2>
      <table className='table table-responsive' style={{ border: '2px solid black', borderCollapse: 'collapse' }}>
        <tbody>
          <tr>
            <th colSpan='3' style={{ color: 'white', backgroundColor: '#961e1b', border: '1px solid black' }}>
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

   


 
      <section className="donate-blood-section">
     
      {/* <img
        src={blood_drop}
        alt="Blood Drop"
        className="drop-animate"
        height={"130px"}
      /> */}
    
   
      <div className="donate-blood-container">
        <div className="image-container">
          <img src={image} alt="Blood donation test tubes" />
        </div>
        <div className="content-container">
          <p className="subheading">DONATE BLOOD TODAY</p>
          <h2 className="heading">Why Should You Donate Blood?</h2>
          <p className="description">
            Donating blood is a selfless act that has the power to save lives.
            Here are a few reasons why you should consider donating blood: — You
            could help save up to three lives with just one donation. — Blood is
            always needed in emergency situations, such as natural disasters
            and accidents. — Blood is needed for patients undergoing surgeries,
            cancer treatment, and other medical procedures. — Blood cannot be
            manufactured, which means that the only source of blood is through
            donations from volunteers. — Donating blood can also have health
            benefits for the donor, such as reducing the risk of heart disease
            and cancer.
          </p>
          <button className="donate-button" onClick={handleNavigation}>
           <Link to="/adminlogin" style={{ textDecoration: "none", color: "white"}}> Donate Now</Link> 
            </button>
        </div>
      </div>
    </section>



      <Footer />


    </div>
  );
};

export default HomePage;
