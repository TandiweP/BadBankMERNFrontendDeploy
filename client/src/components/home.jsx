import React from 'react'
import moneyjar from '../images/moneyjar.jpg'
import Card from './Card'

export default function Home() {

    if (document.getElementById("nav-section1") !== null) {
        document.getElementById("nav-inmsg").className = "nav-item";
        document.getElementById("nav-logout").className = "nav-item"; 
    }
    if (document.getElementById("nav-section2") !== null) {
        document.getElementById("nav-deposit").className = "nav-item"; 
        document.getElementById("nav-withdraw").className = "nav-item"; 
        document.getElementById("nav-alldata").className = "nav-item"; 
    }
    if (document.getElementById("nav-section3") !== null) {
        document.getElementById("nav-createaccount").className = "nav-item"; 
        document.getElementById("nav-login").className = "nav-item"; 
        document.getElementById("nav-outmsg").className = "nav-item";
    }

    
    return (
        <Card
            id = "card-home"
            bgcolor="primary"
            txtcolor="white"
            header="BadBank"
            title="Welcome to the Bank"
            text="Disregard the lack of security"
            
            body={(<img src={moneyjar} className="img-fluid" alt="money sprout"/>)}
        />
    );
}

