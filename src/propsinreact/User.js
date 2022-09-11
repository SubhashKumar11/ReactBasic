import React from 'react'

const User = (props) => {
  return (
    <div>
      <h1>Function pass as props</h1>
      <button onClick={props.data}>callPropsFunction</button>
    </div>
  )
}

export default User
