import React, { useState } from "react";


//this function will set a line through of text if the text got clicked 
function TodoItem(props){
    const [isDone, setIsDone] = useState(false);
    function handleClick(){
        setIsDone((prevValue)=>{
            return !prevValue;
        })
    }
    //props are read only
    return(
        <div onClick={handleClick}>
            <li style={{textDecoration: isDone ? "line-through" : "none"}} >{props.text}</li>
        </div>
     );
}

export default TodoItem;