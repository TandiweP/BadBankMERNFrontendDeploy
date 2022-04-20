import { useState } from "react";
import Card from './Card';
import {API_URI} from './componentgroup'

export default function Withdraw(){
  const [show, setShow]                           = useState(true);
  const [status, setStatus]                       = useState('');
  const [withdraw, setWithdraw]                   = useState('');
  const [account, setAccount]                     = useState({});
  const email = localStorage.getItem('email');
  

  function getAccount() {
    const url = `${API_URI}/account/find/${email}`;
    (async () => {
      var res = await fetch(url);
      var data = await res.json();
      setAccount(data[0]);
    })();  
  }

  function validateNumber(num) {
    if (isNaN(parseFloat(num))) {
      setStatus('Error: Please enter a number');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
}  

  function validateOverDraft(num) {
    if (num > account.balance) {
      setStatus('Error: Withdrawal exceeds account balance');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }  

  function handleWithdraw() {
    if (!validateNumber(withdraw) || (!validateOverDraft(withdraw)))
    return;
    const url = `${API_URI}/account/update/${email}/-${withdraw}`;
    (async () => {
      var res = await fetch(url, { method: 'PUT' });
      var data = await res.json();
    })();
    getAccount();
    setShow(false);
  };

  function clearForm(){
    setWithdraw('');
    setShow(true);
  }

  return (
    <Card 
      id = "CardGroup"
      bgcolor="primary"
      header="Withdraw Funds"
      status={status}
      body={ show ? (  
              <>

              <input type="input" 
              className="form-control" 
              placeholder="Withdrawal Amount" 
              value={withdraw} 
              onChange={e => setWithdraw(e.currentTarget.value)} />
              <br/>
              <button 
              type="submit" 
              className="btn btn-light" 
              disabled={withdraw === "" || withdraw === 0}
              onClick={handleWithdraw} >
              Withdraw
              </button> 
              </>
            ) : (
              <>
              <h5>Success! </h5>
              <h6>Withdrew: ${withdraw}</h6>
              <h6>New balance: ${account.balance}</h6>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make another withdrawal</button>
              </>
            )}
    />
  )
}



















