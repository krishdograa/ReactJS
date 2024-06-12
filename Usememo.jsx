import { useState } from "react";
import { useMemo } from "react";


export default function Usememo(){

    
    const[count, setCount] = useState(0);

    const calculation = (num) => {
        for(let i =0; i<100000000; i++){
            num = num+1;
        }
        return num;
    };


    const calc = useMemo( () => calculation(count), [count] );


    
   
    // const increment = () =>{
    //     setCount(count+1);
    // }

    

    return(
        <>
        
            <h1>Expensive Calculation</h1>
            <div>
                COUNT: {count} <br></br><br></br>
                <button onClick={() => setCount(count+1)}>Increment</button>
            </div>
            <br></br>
            <div>
                <h3>Expensive Calculation:</h3> {calc}
            </div>
        
        </>
    );


    
};


