import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Donors from './components/Donors';
import Login from './components/Login';
import Patients from './components/Patients';
import AdminDashboard from './components/AdminDashBoard';
import Home from './components/Home';
import DonateBloodForm from "./components/DonateBloodForm";
import Contact from './components/Contact';
import PatientForm from './components/PatientForm';
import BloodStocks from './components/BloodStocks';
import HostBloodDrive from './components/HostBloodDrive';
import SignIn from './components/SignIn';
import Register from './components/Register';
import CampsDetailsToDonors from './components/CampsDetailsToDonors';

// Function to get user role from localStorage
const getUserRole = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user).role : null;
};

// Protected Route Component
const ProtectedRoute = ({ element, allowedRoles }) => {
  const userRole = getUserRole();
  return allowedRoles.includes(userRole) ? element : <Navigate to="/signin" />;
};

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<Register />} />

      {/* Donor Routes */}
      <Route path="/donorform" element={<ProtectedRoute element={<DonateBloodForm />} allowedRoles={["DONOR"]} />} />
      <Route path="/campdetails" element={<ProtectedRoute element={<CampsDetailsToDonors />} allowedRoles={["DONOR"]} />} />

      {/* Patient Routes */}
      <Route path="/patientform" element={<ProtectedRoute element={<PatientForm />} allowedRoles={["PATIENT"]} />} />
     

      {/* Admin Routes */}
      <Route path="/admindashboard" element={<ProtectedRoute element={<AdminDashboard />} allowedRoles={["ADMIN"]} />} />
      <Route path="/bloodstocks" element={<ProtectedRoute element={<BloodStocks />} allowedRoles={["ADMIN"]} />} />
      <Route path="/donors" element={<ProtectedRoute element={<Donors />} allowedRoles={["ADMIN"]} />} />
      <Route path="/patients" element={<ProtectedRoute element={<Patients />} allowedRoles={["ADMIN"]} />} />
      <Route path="/hostdrive" element={<ProtectedRoute element={<HostBloodDrive />} allowedRoles={["ADMIN"]} />} />
      <Route path="/adminlogin" element={<Login />} />
    </Routes>
  );
}

export default App;
