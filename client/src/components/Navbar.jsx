import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
  const loggedIn = localStorage.getItem('email') != null;
  const userName = localStorage.getItem('userName');


   return (
          
          <nav className="navbar navbar-expand-lg navbar-dark" id="nav-main">
              <Link to="/" className="navbar-brand">BadBank</Link>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    {loggedIn ? (
                      <>
                        <ul className="navbar-nav" id="nav-loggedin">
                            <li id="welcome" className="nav-link"><span>Welcome back {userName} </span></li>
                            <li id="nav1" className="nav-item"> <Link className="nav-link" title="Make a deposit to your account" to="/Deposit/">Deposit</Link></li>
                            <li id="nav2" className="nav-item"> <Link className="nav-link" title="Withdraw funds from your account" to="/Withdraw/">Withdraw</Link></li>
                            <li id="nav3" className="nav-item" ><Link className="nav-link" title="View User Data" to="/Alldata/">AllData</Link></li> 
                            
                            <li id="nav4" className="nav-item"><Link className="nav-link" title="Logout" to="/Logout">Logout</Link></li>
                            <li id="xtra" className="nav-item"><Link className="nav-link" title="Currency Converter" to="/Currency/">Currency Converter</Link></li>
                      
                      </ul>
                  
                    </>
                    ) : (
                      
                      <ul className="navbar-nav" id="nav-loggedout">
                      <li id="nav5" className="nav-link"><Link className="nav-link" title="Register as a new user" to="/CreateAccount/">Create Account</Link></li>
                      <li id="nav6" className="nav-link"><Link className="nav-link" title="Login" to="/Login/">Login</Link></li>
                      <li id="xtra" className="nav-item"><Link className="nav-link" title="Currency Converter" to="/Currency/">Currency Converter</Link></li>
                  </ul>
                   
              )}
          </div>
          </nav> 
  );
}
}

export default Navbar
