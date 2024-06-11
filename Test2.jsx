import { useRef } from "react";


function Test2(){
    let n= useRef(0);
    
    function increment(){
        return n.current = n.current + 1;
    }

    function decrement(){
        return n.current = n.current - 1;
    }


    return(
        <div style={{
            fontSize: 100,
            textAlign: "center",
        }}> <br></br>
            {n.current} <br></br>
            <button style={{
            fontSize: 50,
            position: "absolute",
            left:115,
          }}  onClick={increment}>Increment</button>
            <button  style={{
            fontSize: 50,
            position: "absolute",
            left: 400,
          }} onClick={decrement}>Decrement</button>
        </div>
    );

}

export default Test2;