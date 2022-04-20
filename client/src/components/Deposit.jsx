import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Card from './Card'

export default function Deposit(){
    const [show, setShow]                       = useState(true);
    const [status, setStatus]                   = useState('')
    const [deposit, setDeposit]     = useState('');
    const [account, setAccount] = useState({});
    const email = localStorage.getItem('email');
    const loggedIn = localStorage.getItem('email') != null;
    const navigate = useNavigate();


  useEffect(() => {
    if (!loggedIn) 
      navigate("/login");
    else {
      console.log("status: loggedin")
    }
  }, []);

    function getAccount() {
      const url = `/account/find/${email}`;
      (async () => {
        var res = await fetch(url);
        var data = await res.json();
        setAccount(data[0]);
      })();  
    }
    
    function validNumber(num){
        if (isNaN(parseFloat(num))) {
            setStatus('Error: Please enter a number');
            setTimeout(() => setStatus(''),3000);
          return false;
        } 
        return true;
    }

    function validAmount(num){
       if (num < 0) {
        setStatus('Error: Please enter a number greater than 0');
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }
    
    function handleDeposit() {
      if (!validNumber(deposit) || !validAmount(deposit))
        return;
      const url = `/account/update/${email}/${deposit}`;
        (async () => {
          var res = await fetch(url, { method: 'PUT' });
          var data = await res.json();
      })();
        getAccount();
        setShow(false);
      };

  
    function clearForm(){
      setDeposit('');
      setShow(true);
    }
  
    return (
      <Card 
        id = "CardGroup"
        bgcolor="primary"
        header="Make A Deposit"
        status={status}
        body={ show ? (  
                <>

                
                <input type="input" 
                className="form-control" 
                placeholder="Deposit Amount" 
                value={deposit} 
                onChange={e => setDeposit(e.currentTarget.value)} 
                />
                <br/>
                <button 
                type="submit" 
                className="btn btn-light" 
                disabled={deposit === "" || deposit === 0}
                onClick={handleDeposit} >
                Deposit
                </button> 

                </>
              ) : (
                <>
                <h5>Success!</h5>
                <h6>Deposited: ${deposit}</h6>
                <h6>New Balance: ${account.balance}</h6>
                <button 
                type="submit" 
                className="btn btn-light" 
                onClick={clearForm}>
                Make another deposit
                </button>
                </>
              )}
      />
    )
  }

