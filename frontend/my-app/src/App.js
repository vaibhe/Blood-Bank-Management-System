
import './App.css';

import Donors from './components/Donors';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Patients from './components/Patients';
import AdminDashboard from './components/AdminDashBoard';
import Home from './components/Home';
import DonateBloodForm from "./components/DonateBloodForm"
import Contact from './components/Contact';






function App() {
  return (


    <Routes classname="App">

      <Route
       path="/"
        element={<Home />} />

        <Route
          path="/donorregistration"
          element={
          <DonateBloodForm></DonateBloodForm>
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
          path="/contact"
          element={
           <Contact/>
          } />

    </Routes>
    






  );
}

export default App;
