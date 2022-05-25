import React from 'react'
import bank from '../images/bank.png'
import Card from './Card'

export default function Home() {

    return (
        <Card
            id = "card-home"
            bgcolor="secondary"
            txtcolor="white"
            header="Home"
            title="Ubank International"
            text= "Where safe travels begin"
            
            body={(<img src={bank} className="img-fluid" alt="money sprout"/>)}
        />
    );
}

