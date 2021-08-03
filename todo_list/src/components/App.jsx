import React, {useState} from "react";

function App() {
    const [item, setItem] = useState("");
    //create new array to hold
    const [items, setItems] = useState([]);
    function newItem(event){
        const newValue = event.target.value;
        setItem(newValue);
    }
    function addNewItem(){
        //2. When the add button is pressed, the current data in the input should be
        //added to an array.
        setItems(prevItems =>{
            return[
                //using spread operator
                ...prevItems, item];
        });
        setItem("");
    }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={newItem} value={item} name="new_item" type="text" />
        <button onClick={addNewItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {items.map(todoItem => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
