import React from 'react'
import bank from '../images/bank.png'
import Card from './Card'

export default function Home() {

    return (
        <Card
            id = "card-home"
            bgcolor="primary"
            txtcolor="white"
            header="Home"
            title="Welcome to BadBank"
            text= "Where Nothing Matters"
            
            body={(<img src={bank} className="img-fluid" alt="money sprout"/>)}
        />
    );
}

