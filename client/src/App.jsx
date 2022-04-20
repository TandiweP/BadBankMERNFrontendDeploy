import './index.css';
import { React, useState } from 'react';
import {Routes,  Route} from "react-router-dom";
import   Navbar from './components/Navbar';
import ContextProvider from './components/context';
import CurrencyConverter from './components/currency/Currency';

import {
  Home,
  CreateAccount,
  Deposit,
  Withdraw,
  Login, 
  Logout,
  AllData
} from "./components/componentgroup";




export default function App() {
  const [loggedIn, setLoggedIn] = useState(false); 

  const handleLogin = () => {
    setLoggedIn(true);
  }
  const handleLogout = () => {
    setLoggedIn(false);
  }

  return (
    
    <div>
      
      <ContextProvider>
        <Navbar/>
        <div className="container" style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/CreateAccount/" element={<CreateAccount />} />
            <Route path="/Login/" element={<Login handleLogin={() => handleLogin()}/>} />
            <Route path="/Deposit/" element={<Deposit />} />
            <Route path="/Withdraw/" element={<Withdraw />} />
            <Route path="/AllData/" element={<AllData />} />
            <Route path="/Logout/"  element={<Logout handleLogout={() => handleLogout()}/>} />
            <Route path="/Currency/" element={<CurrencyConverter />} />
          </Routes>
        </div>
      </ContextProvider>
    
    </div>
  );
}

