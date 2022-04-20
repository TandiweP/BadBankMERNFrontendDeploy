import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';


export default function Withdraw(){
  const [show, setShow]                           = useState(true);
  const [status, setStatus]                       = useState('');
  const [withdraw, setWithdraw]                   = useState('');
  const [account, setAccount]                     = useState({});
  const email = localStorage.getItem('email');
  const loggedIn = localStorage.getItem('email') != null;
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) 
      navigate("/login");
    else {
      document.getElementById("nav-inmsg").className = "nav-item";
      document.getElementById("nav-logout").className = "nav-item";
      document.getElementById("nav-deposit").className = "nav-item";
      document.getElementById("nav-withdraw").className = "nav-item active";
      document.getElementById("nav-alldata").className = "nav-item";
      getAccount();  
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

  function validateNumber(num) {
    if (isNaN(parseFloat(num))) {
      setStatus('Error: Please enter a number');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
}  

  function overDraft(num) {
    if (num > account.balance) {
      setStatus('Error: Withdrawal exceeds account balance');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }  

  function handleWithdraw() {
    if (!validateNumber(withdraw) || (!overDraft(withdraw)))
    return;
    const url = `/account/update/${email}/-${withdraw}`;
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


// import {UserContext} from './UserContext'
// export default function Withdraw() {
//   const ctx = useContext(UserContext);
//   return(
//     <div>
//         <h1>Withdraw</h1>
//         {JSON.stringify(ctx)}<br/>
//     </div>
//     )
// }
















// export default function Withdraw(){
//     const [show, setShow]         = React.useState(true);
//     const [status, setStatus]     = React.useState('');
//     const [balance, setBalance] = React.useState('');
//     const [withdrawal, setAmount] = React.useState('');
//     const ctx = React.useContext(UserContext);  
  
//     let users = ctx.users;
    
  
//     function currentBalance(){
//         setBalance(prevBalance => prevBalance - withdrawal)
//     }
    
  
  
//     function overdraft(num) {
//       if (withdrawal > balance) {
//         setStatus('Error: Your withdrawal amount is greater than your current balance');
//         setTimeout(() => setStatus(''),3000);
//         return false;
//       }
//       return true;
      
//     }
  
//     function validateNumber(num){
//       if (isNaN(parseFloat(num))) {
//         setStatus('Error: Please enter a number');
//         setTimeout(() => setStatus(''),3000);
//         return false;
//       }
//       return true;
//   }  
//     function validate(withdrawal, label){
//         if (!withdrawal) {
//           setStatus('Error: Please complete form');
//           setTimeout(() => setStatus(''),3000);
//           return false;
//         } else  if (withdrawal < 0) {
//           setStatus('Error: ' + "Please enter a number greater than 0 for withdrawal");
//           setTimeout(() => setStatus(''),3000);
//           return false;
//         } 
//         return true;
//     }
  
  
//     function handleCreate(){
//       console.log(balance, withdrawal);
//       //if (!validate(balance,    'balance'))    return;
//       if (!validate(withdrawal,     'withdrawal'))     return;
//       if (!validateNumber(withdrawal,  'withdrawal'))  return;
//       if (!overdraft(withdrawal,  'withdrawal'))  return;
//       //if (!validate(validateNum,     'withdrawalAmount'))     return;
//       users[0].withdrawals.push(parseFloat(withdrawal));
//       users[0].balance = balance;
//       setShow(false);
//     }    
  
//     function clearForm(){
//       setAmount('');
//       setShow(true);
//     }
  
//     return (
//       <Card 
//         id = "CardGroup"
//         bgcolor="primary"
//         header="Withdraw"
//         status={status}
//         body={show ? (  
//                 <>
//                 Your current balance: ${balance}
//                 <h4>{}</h4>
//                 <input type="input" className="form-control" id="withdrawal-amount" placeholder="Withdrawal amount" value={withdrawal} onChange={e => setAmount(e.currentTarget.value)} /><br/>
//                 <button type="submit" className="btn btn-light" onClick={handleCreate}>Withdraw</button>
//                 </>
//               ):(
//                 <>
//                 <h5>Success! </h5>
//                 <h4>Current balance is ${currentBalance()}</h4>
//                 <button type="submit" className="btn btn-light" onClick={clearForm}>Make another withdrawal</button>
//                 </>
//               )}
//       />
//     )
//   }