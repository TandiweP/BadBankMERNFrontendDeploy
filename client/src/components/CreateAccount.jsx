import React, { useState, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom';
import Card from './Card'



export default function CreateAccount(){
    const [show, setShow]         = useState(true);
    const [status, setStatus]     = useState('');
    const [name, setName]         = useState('');
    const [email, setEmail]       = useState('');
    const [password, setPassword] = useState('');
    const loggedIn = localStorage.getItem('email') != null;
    const navigate = useNavigate();
  
    useEffect(() => {
        if (loggedIn) 
          navigate("/");
        else {
          console.log("ready for newaccount")
        }
      })    
    

    function validate(field){
      
        if (!field) {
          setStatus('Error: Please Complete Form');
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        return true;
    }

    
    function passwordLength(password) {
      if (password.length < 8) {
        setStatus(`Password must be a minimum of 8 characters`);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
    }

    function handleCreate(){

      console.log(name,email,password);
      if (!validate(name,     'name'))     return;
      if (!validate(email,    'email'))    return;
      if (!passwordLength(password, 'password')) return;
      const url = `/account/create/${name}/${email}/${password}/`;
      (async () => {
        var res  = await fetch(url, {method: 'POST'});
        if (res.status === 200) {
            var data = await res.json();    
            console.log(data);        
            setShow(false);       
        } else {
            alert('User already exsists.')
        }
    })();
  }    
  
    
  
    return (
      <Card
        id = "CardGroup"
        bgcolor="primary"
        header="Create Account"
        status={status}
        body={show ? (  
                <>
                Name<br/>
                <input type="input" 
                className="form-control" 
                id="name" 
                placeholder="Enter name" 
                value={name} 
                onChange={e => setName(e.currentTarget.value)} /><br/>

                Email address<br/>
                <input type="input" 
                className="form-control" 
                id="email" 
                placeholder="Enter email" 
                value={email} 
                onChange={e => setEmail(e.currentTarget.value)}/><br/>

                Password<br/>
                <input type="password" 
                className="form-control" id="password" 
                placeholder="Enter password" 
                value={password} 
                onChange={e => setPassword(e.currentTarget.value)}/><br/>

                <button type="submit" 
                id = "createButton" 
                className="btn btn-light" 
                disabled={name === "" && email === "" && password === ""}
                onClick={handleCreate}>
                Create Account
                </button>

                <br/>
              
                </>
              ):(
                <>
                <h5>Account Successfully Created</h5>
                <h6>Click <Link to="/login">here</Link> to login.</h6>
                </>
              )}
      />
    )
  }
