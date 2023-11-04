import React from 'react'
import GrandchildComponent from './GrandchildComponent'

const ChildComponent = ({userData}) => {
  return (
    <div>
      <GrandchildComponent userData={userData} />
    </div>
  )
}

export default ChildComponent
