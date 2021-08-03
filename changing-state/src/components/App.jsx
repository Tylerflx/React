import React, { useState } from "react";

function App() {
  // const [fname, setFirstName] = useState("");
  // const [lname, setLastName] = useState("");
  //instead we can use object
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  // function updateFName(event) {
  //   setFirstName(event.target.value);
  // }
  // function updateLName(event) {
  //   setLastName(event.target.value);
  // }
  function updateContact(event){
    const {name, value} = event.target; //get the updated value name its name
    //update by setContact 
    setContact(preValue =>{
      // if (name === "fName"){
      //   return {
      //   fName : value ,
      //   lName : preValue.lName ,
      //   email : preValue.email
      //   };
      // }else if (name === "lName"){
      //   return{
      //     fName : preValue.fName,
      //     lName : value,
      //     email : preValue.email
      //   };
      // }else if(name === "email"){
      //   return {
      //     fName : preValue.fName,
      //     lName : preValue.lName,
      //     email : value
      //   };
      // }
      return {
        //using spread operator in ES6
        ...preValue,
        [name] : value
      };
    });
  }



  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p> 
      <form>
        <input
          name="fName"
          value={contact.fName}
          onChange={updateContact}
          placeholder="First Name"
        />
        <input
          name="lName"
          value={contact.lName}
          onChange={updateContact}
          placeholder="Last Name"
        />
        {/* added email field */}
        <input
          name="email"
          value={contact.email}
          onChange={updateContact}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
