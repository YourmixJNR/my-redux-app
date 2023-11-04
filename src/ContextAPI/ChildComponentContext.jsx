import React from 'react'
import GrandchildComponentContext from './GrandchildComponentContext'

const ChildComponentContext = () => {
  return (
    <div>
      <GrandchildComponentContext />
    </div>
  )
}

export default ChildComponentContext
