import React from 'react'
import User from './User'
const PassingPropsFunction = () => {
    function getData(){
        alert('hello lingam have car')
    }
  return (
    <div>
      <User data={getData}/>
    </div>
  )
}

export default PassingPropsFunction
