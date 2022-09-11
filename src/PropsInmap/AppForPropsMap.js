import React from 'react'
import Propsinmap from './Propsinmap'
const AppForPropsMap = () => {
    const data = [{name:'ram',roll:5},{name:'ram2',roll:5},
    {name:'ram3',roll:5}];
  return (
    <div>AppForPropsMap
   <div>ArrayMap
        
        <h3>{lingam}</h3>
       {data.map((user)=>(
   <Propsinmap data = {user}/>
        ))}
          </div>
        
    </div>
  )
}

export default AppForPropsMap