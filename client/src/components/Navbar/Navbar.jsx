import React from 'react';
import './navbar.css'
import {Link} from 'react-router-dom';



class Navbar extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      const loggedIn = localStorage.getItem('email') != null;
      const userName = localStorage.getItem('userName');

    return (
        
            <nav className="navbar navbar-expand-lg navbar-light">
                {/* <div className="container-fluid"> */}
                <Link to="/" className="navbar-brand">BadBank</Link>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span> */}
                    {/* </button> */}
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        {loggedIn ? (
                                    <>
                                        <ul className="navbar-nav" id="nav-section1">
                                            
                                            
                                            <li id="nav-logout" className="nav-item"><Link className="nav-link" title="Logout" to="/Logout">Logout</Link>
                                            </li>
                                            {/* <li id="nav-inmsg" className="nav-item"><span className="nav-link">Welcome back, {userName} </span> </li> */}
                                        </ul>
                                        
                                        <ul className="navbar-nav flex-grow-1" id="nav-section2">
                                            <li id="nav-deposit" className="nav-item"><Link className="nav-link" title="Make a deposit into your account." to="/Deposit">Deposit</Link></li>
                                            <li id="nav-withdraw" className="nav-item"><Link className="nav-link" title="Make a withdrawl from your account." to="/Withdraw">Withdraw</Link></li>
                                            <li id="nav-alldata" className="nav-item"><Link className="nav-link"title="View Transaction History" to="/Alldata">Transaction History</Link></li>
                                            <li id="nav-inmsg" className="nav-item"><span className="nav-link">Welcome back, {userName} </span> </li>
                                        </ul>
                                        
                                    </>
                                    ) : (
                                        <>
                                        <ul className="navbar-nav" id="nav-section3">
                                        <li id="nav-createaccount" className="nav-item"><Link className="nav-link" title="Create an account." to="/CreateAccount">Create Account</Link></li>
                                        <li id="nav-login" className="nav-item"><Link className="nav-link" title="Login to an account." to="/Login">Login</Link></li>
                                        <li id="nav-outmsg" className="nav-item"><span className="nav-link">You are not logged in </span> </li>
                                      </ul>
                                      
                                      </>
                                    )}
                    </div>
                    
            </nav>
    );
}
}

export default Navbar;