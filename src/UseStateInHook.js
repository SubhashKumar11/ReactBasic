import React,{useState} from 'react'

const UseStateInHook = () => {
    const[color,setColor] = useState('red')
    const goluHai = ()=>{
        setColor('blue')
     }
  return (
    <div>
        <h3>{color}</h3>
        <button onClick={goluHai}>colorBadlo</button>
    </div>
  )
}

export default UseStateInHook