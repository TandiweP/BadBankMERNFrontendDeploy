import { React, useState } from "react";
import Card from './Card'
import {API_URI} from './componentgroup'

export default function Login(props){
    const [show, setShow]         = useState(true)
    const [status, setStatus]     = useState('')
    const [email, setEmail]       = useState('')
    const [password, setPassword] = useState('')
    

     function handleLogin(){
      if (!validate(email, 'email')) return;
      if (!validate(password, 'password')) return;
      fetch(`${API_URI}/account/login/${email}/${password}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            setStatus('');
            setShow(false);
            console.log('JSON:', data);
        } catch(err) {
            setStatus(text)
            console.log('err:', text);
        }
    });
  }

  function validate(field, label) {
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''), 3000);
        return false;
      }
      return true;
    }

    function clearForm(){
      setEmail('');
      setPassword('');
      setShow(true);
    }

    
  
    return (
      <Card
        bgcolor="primary"
        header="Login"
        status={status} 
        body={show ? (  

                <>

                Email address
                <br/> 
                <input 
                type="email" 
                className="form-control" 
                id="email" 
                placeholder="Enter email" 
                value={email} 
                onChange={e => setEmail(e.currentTarget.value)}/>
                <br/>

                Password<br/>
                <input type="password" 
                className="form-control" 
                id="password" 
                placeholder="Enter password" 
                value={password} 
                onChange={e => setPassword(e.currentTarget.value)}/>
                <br/>
                <button 
                type="submit" 
                className="btn btn-light" 
                onClick={handleLogin}>
                Login
                </button>

                </>

              ):(
                <>
                <h5>You are successfully logged in</h5>
                <button 
                type="submit" 
                className="btn btn-light"
                onClick={clearForm} >
                Go Back
                </button>
                </>
              )}
      />
    )
  }
  
