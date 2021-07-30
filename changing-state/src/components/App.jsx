import React, { useState } from "react";

function App() {
  // const [fname, setFirstName] = useState("");
  // const [lname, setLastName] = useState("");
  //instead we can use object
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  // function updateFName(event) {
  //   setFirstName(event.target.value);
  // }
  // function updateLName(event) {
  //   setLastName(event.target.value);
  // }

  function handleChange(event) {
    // const newVal = event.target.value;
    // const inpName = event.target.name;

    //use object destructering
    const { value, name } = event.target;

    setFullName((preVal) => {
      //if input name change on fName
      if (name === "fName") {
        return {
          //return an object
          fName: value, //with new val on fName
          lName: preVal.lName //use old lName, default is ""
        };
      } else if (name === "lName") {
        return {
          fName: preVal.fName, //name thing with lName changed
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          value={fullName.fName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          name="lName"
          value={fullName.lName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
