// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import Inputfield from "../components/Inputfield";

// import { useState } from "react";

// export default function Startingpage(){
//     const[data, setValue] = useState({
//         fname: "",
//         lname: "",
//         // email: "",


//     });

  
//     const display = () => {
//             console.log(data.fname);
//     };
   

//     return(
//         <>
//         <Header name = "Home"/>
//         <div id = "hell">
//             <div className="fields">

                
//             <Inputfield
            
//             placeholder = {"Enter First Name"}
//             value = {data.fname}
//             onChangeText = {(text) =>setValue(text)}
//             />

//             <Inputfield
//             placeholder = {"Enter Last Name"}
//             value = {data.lname}
//             onChangeText = {(text) => setValue(text)}
            
//             />

//             {/* <Inputfield
//             placeholder = {"Enter Email Id "}
//             onChangeText = {(text) => setEmail(text)}
//             /> */}

//                 <br></br>
//             <button style = {{
//                 fontSize: 20,
//                 textAlign: "center",
                
                
//             }}
//             onClick={display}>Sign up</button>

//             </div>
//         </div>
       
//         <Footer/>
//         </>
//     );
// }


//Task - 2
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Inputfield from "../components/Inputfield";

import { useState } from "react";

export default function Startingpage(){

    
    const[data, setValue] = useState({
        fname: "",
        lname: "",
       

    });

    const[email,setEmail] = useState('');
    const[validemail,setValidEmail] = useState('');

    const handleOnChange = (value,item)=>{
        setValue((prev)=>({
            ...prev,
            [item]:value
        }))
    }

    const handleEmailChange = (e) => {
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmail(e.target.value);
        setValidEmail(emailRegex.test(e.target.value));
    };
  
    const display = () => {
            console.log("First name: " + data.fname + "\nLast name: " + data.lname);
            console.log(validemail ? null :" Enter valid email ");
             
    };


    return(
        <>
        <Header name = "Home"/>
        <div id = "hell">
           
            <div className="fields">
            <span style={{
                fontSize: 30,
                fontWeight: "bold",
            }}>SIGN UP FORM</span>
            <br></br>
                
            <Inputfield
            
            placeholder = {"Enter First Name"}
            value = {data.fname}
            onChangeText = {(text) =>handleOnChange(text,'fname')}
            />

            <Inputfield
            placeholder = {"Enter Last Name"}
            value = {data.lname}
            onChangeText = {(text) => handleOnChange(text,'lname')}
            
            />

            <Inputfield
            placeholder = {"Enter Email Id "}
            onChangeText = {handleEmailChange}
            />

                <br></br>
            <button style = {{
                fontSize: 15,
                textAlign: "center",
                width: 175,
                height: 28,
                
                
            }}
            onClick={display}>Sign up</button>



            <div id = "root"></div>
            
            

            </div>
        </div>

        
       
        <Footer/>
        </>
    );
}