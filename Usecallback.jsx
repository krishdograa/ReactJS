import { useState } from "react";
import { useCallback } from "react";
import Todo from "./Todo";

export default function Usecallback() {
    const[todo, setTodo] = useState([]);
    const[count, setCount] = useState(0);

    const addTodo = useCallback(() => {
        setTodo((t) => [...t, "New Todo"]);
      }, [todo]);

    return(
        <>
            <div>

            <h1>My List</h1> 
               
                
        
                <Todo todos = {todo} addTodo = {addTodo} />
                <br></br>
                <hr></hr>
                <h2>Increment test</h2>
                Count: {count} <br></br>
                <button onClick={() => setCount(count +1)}>Increment</button>
               

            </div>
        
        
        
        </>
    );
}