import React from 'react'

const GrandchildComponent = ({userData}) => {
  return (
    <div>
      <h3>User Details</h3>
      <p>Name: {userData.name}</p>
      <p>Age: {userData.age}</p>
      <p>Address: {userData.address}</p>
    </div>
  )
}

export default GrandchildComponent
