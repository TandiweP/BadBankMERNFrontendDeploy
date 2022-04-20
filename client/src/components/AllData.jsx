import {useState, useEffect} from 'react'
import Card from './Card'
import {API_URI} from './componentgroup'

export default function AllData(){


    const [data, setData] = useState('');    

    useEffect(() => {
        
        // fetch all accounts from API
          const url = `${API_URI}/account/all`;
          fetch(url)
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
    
