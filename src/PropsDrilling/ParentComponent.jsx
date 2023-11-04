import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const userData = {
        name: "John Doe",
        age: 30,
        address: '123 Main Street',
    }
  return (
    <div>
      <ChildComponent userData={userData} />
    </div>
  )
}

export default ParentComponent
