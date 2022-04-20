import React, { useState } from "react";

import axios from "axios";
import Card from '../Card'

export default function CurrencyConverter () {
  
  const [first, setFirst] = useState("AUD");
  const [second, setSecond] = useState("USD");
  const [rate, setRate] = useState([]);

 
  const getRate = (first, second) => {
    axios({
      method: "GET",
      url: `https://free.currconv.com/api/v7/convert?q=${first}_${second}&compact=ultra&apiKey=ed3af5e05ffff70253f5`,
    })
    .then((response) => {
      console.log(response.data);

      setRate(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

  function clearForm(){
    setFirst('');
    setSecond('');
  }
  return (
    <Card
          
            bgcolor="primary"
            txtcolor="white"
            header="International Exchange Rates"
            title="Compare currencies below"
            
            
            body={ 
              <>
              <h5>1 {first} = {rate[`${first}_${second}`]} {second}</h5>
              <input 
              type="input"
                
                className="form-control"
                placeholder="Currency 1"
                value={first}
                onChange={(e) => setFirst(e.currentTarget.value)} 
                />

              <input 
              type="input"
                
                className="form-control"
                placeholder="Currency 2"
                value={second}
                onChange={(e)=> setSecond(e.currentTarget.value)} 
                />
                
                <button 
                type="button" className="btn btn-secondary"
                  onClick={() => {
                    getRate(first, second);
                  }}
                  >
                    Get Rate
                </button>

                <button
                type="button" className="btn btn-secondary"
                  onClick={
                    clearForm}>
                  Clear Form
                </button>
                </>
              
             
             }
     />
   )
 }


        