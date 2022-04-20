// import { useContext} from 'react'
// // import { useNavigate } from 'react-router-dom';
// import UserContext from './context';
// // import Card from './Card'


// export default function AllData(){
    
//     const ctx = useContext(UserContext);
    
    
    
// return (
//     <div className="card text-white bg-light mb-3" style={{margin: "5% 30% 30% 30%"}}>
//         <h5 className="card-header" >All Data Record:</h5>
//         <div className="card-body" style={{fontSize: "1.5em"}}>
        
//         <pre>{JSON.stringify(ctx, null, 2)}</pre>
//         </div>
    
// </div>
    

// );
// }
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
                setData(JSON.stringify(data));                
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
    
