import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  // State to store the input value
  const [nameInput, setNameInput] = useState("");
  const [userData, setUserData] = useState({
    name: "John Doe",
    age: 30,
    address: "123 Main Street",
  });

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
        
      <input
        type="text"
        value={nameInput}
        onChange={handleChange} />

      <button onClick={handleSubmit}>Update</button>

      <ChildComponent userData={userData} />

    </div>
  );
};

export default ParentComponent;
