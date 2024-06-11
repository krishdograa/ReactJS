import React, { useState} from "react";

// function increment(n){
//     if(n<10){
//         return n+1;
//     }
//     else{
//         return "Baas karo";
//     }
    
    
    
//   }

//   function decrement(n){
//     if(n>-10){
//         return n-1;
//     }
//     else{
//         return "Baas karo";
//     }
//   }
  
  function Test() {
    const [n, setN] = useState(0);
    
    return (
      <div>
          <div style={{
            fontSize: 100,
            textAlign: "center",
            color: "dodgerblue",

          }}> {n} </div>
          <div style={{
            
            height: 500,
            width: 500,
            position: "relative",
          }}> 
          <button style={{
            fontSize: 50,
            position: "absolute",
            left:115,
          }} 
           onClick={() => setN(n+1)}>
             Increment 
          </button>
          
          <button style={{
            fontSize: 50,
            position: "absolute",
            left: 400,
          }} 
           onClick={() => setN(n-1)}>
             Decrement 
          </button>
          
          
          </div>
          
      </div>
    );
  }
export default Test;