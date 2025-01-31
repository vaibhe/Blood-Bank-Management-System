import logo from './logo.svg';
import './App.css';

import Donors from './components/Donors';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Patients from './components/Patients';
import AdminDashboard from './components/AdminDashBoard';





function App() {
  return (
   
   
     <Routes classname="App">

<Route path="/" element={<Login/>} />
      <Route
       path="/AdminDashBoard"
        element={
         <AdminDashboard />     
        }
      />
   
  
    <Route path="/" element={<Login/>} />
      <Route
       path="/Patients"
        element={
         <Patients />     
        }
      />

<Route path="/" element={<Login/>} />
      <Route
       path="/donors"
        element={
         <Donors />     
        }
      />
       
     </Routes>

   

   


  );
}

export default App;
