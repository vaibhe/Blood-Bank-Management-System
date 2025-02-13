import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Donors from './components/Donors';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Patients from './components/Patients';
import AdminDashboard from './components/AdminDashBoard';
import Home from './components/Home';
import DonateBloodForm from "./components/DonateBloodForm"
import Contact from './components/Contact';
import PatientForm from './components/PatientForm';
import BloodStocks from './components/BloodStocks';
import HostBloodDrive from './components/HostBloodDrive';
import SignIn from './components/SignIn';
import Register from './components/Register';







function App() {
  return (


    <Routes classname="App">

      <Route
        path="/"
        element={<Home />} />

      <Route
        path="/donorform"
        element={
          <DonateBloodForm></DonateBloodForm>
        } />


      <Route
        path="/patientform"
        element={
          <PatientForm />
        } />



      <Route
        path="/admindashBoard"
        element={
          <AdminDashboard />
        }
      />


      <Route
        path="/adminlogin"
        element={<Login />}
      />

      <Route
        path="/patients"
        element={
          <Patients />
        }
      />


      <Route
        path="/donors"
        element={
          <Donors />
        }
      />

      <Route
        path="/bloodstocks"
        element={
          <BloodStocks></BloodStocks>
        }
      />

      <Route
        path="/hostdrive"
        element={
          <HostBloodDrive />
        }
      />


      <Route
        path="/contact"
        element={
          <Contact />
        } />




<Route
        path="/signin"
        element={
         <SignIn/>
        } />

<Route
        path="/signup"
        element={
        <Register/>
        } />

    </Routes>




  );
}

export default App;