import logo from './logo.svg';
import './App.css';
import Admins from './components/Admins';
import Donors from './components/Donors';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";



function App() {
  return (
   
   
     <Routes classname="App">
   
  
    <Route path="/" element={<Login/>} />
      <Route
       path="/Donors"
        element={
         <Donors />     
        }
      />
       
     </Routes>

   


  );
}

export default App;
