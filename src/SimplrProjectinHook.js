import React,{useState} from 'react'

const SimplrProjectinHook = () => {
    const[count,setCount] = useState(0)
    const GamMeiNahi = ()=>{
        setCount(count+1)
    }
  return (
    <div>
         <h1>count project in react</h1>
         <h2>{count}</h2>
         <button onClick={GamMeiNahi}>CountBadhao</button>
    </div>
  )
}

export default SimplrProjectinHook