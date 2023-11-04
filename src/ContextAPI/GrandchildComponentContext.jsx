import React, { useContext } from "react";
import UserContext from "./UserContext/UserContext";

const GrandchildComponentContext = () => {
  const userData = useContext(UserContext);
  
  return (
    <div>
      <h3>User Details</h3>
      <p>Name: {userData.name}</p>
      <p>Age: {userData.age}</p>
      <p>Address: {userData.address}</p>
    </div>
  );
};

export default GrandchildComponentContext;
