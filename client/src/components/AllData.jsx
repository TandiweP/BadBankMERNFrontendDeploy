import {useState, useEffect} from 'react'
import Card from './Card'
export default function AllData(){


    const [data, setData] = useState('');    

    useEffect(() => {
        
        // fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(JSON.stringify(data, null, 2));                
            });

    }, []);

    return (
        <Card 
        id = "CardGroup"
        bgcolor="primary"
        header="AllData"
        body=
        {data}
        />
    );
    
}
    
