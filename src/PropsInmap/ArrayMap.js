import React from 'react'

const ArrayMap = () => {
    const meraArr = [1,2,3]
    const lingam = meraArr.map((item)=>item*2 +",")
    const data = [{name:'ram',roll:5},{name:'ram2',roll:5},
    {name:'ram3',roll:5}];
  return (
    <div>ArrayMap
        
  <h3>{lingam}</h3>
 {data.map((user)=>(
    <div className="users">name: {user.name}, Roll: {user.roll}</div>
  ))}
    </div>
  )
}

export default ArrayMap