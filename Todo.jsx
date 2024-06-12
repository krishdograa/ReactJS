import { memo } from "react";


function Todo({todos, addTodo}) {
    console.log("Call Child");

    return(

        <>
        <div>
            
           
            {todos.map((element,index) => {
                return <p key = {index}>{element}</p>
            })}
        </div>
        <button onClick={addTodo}>Add Items</button>

        </>
    );
}

export default memo(Todo);