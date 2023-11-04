import React from "react";
import UserContext from "./UserContext/UserContext";
import ChildComponentContext from "./ChildComponentContext";

const ParentComponentContext = () => {
  const userData = {
    name: "John Doe",
    age: 30,
    address: "123 Main Street",
  };
  return (
    <div>
      <UserContext.Provider value={userData}>
        <ChildComponentContext />
      </UserContext.Provider>
    </div>
  );
};

export default ParentComponentContext;
