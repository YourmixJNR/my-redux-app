import React from "react";
import UserContext from "./UserContext/UserContext";
import { useState } from "react";
import ChildComponentContext from "./ChildComponentContext";

const ParentComponentContext = () => {
  const [userData, setUserData] = useState({
    name: "John Doe",
    age: 30,
    address: "123 Main Street",
  });

  const [nameInput, setNameInput] = useState();

  const handleChange = (e) => {
    // Update the nameInput state with the typed value
    setNameInput(e.target.value);
  };

  const handleSubmit = (e) => {
    // Prevents the default form submission behavior
    e.preventDefault();
    // Update the name in userData with the value stored in nameInput
    setUserData((prevData) => ({ ...prevData, name: nameInput }));
  };

  return (
    <div>
      <UserContext.Provider value={userData}>

        <input
            type="text"
            value={nameInput}
            onChange={handleChange} />

        <button onClick={handleSubmit}>Update</button>
        
        <ChildComponentContext />

      </UserContext.Provider>
    </div>
  );
};

export default ParentComponentContext;
