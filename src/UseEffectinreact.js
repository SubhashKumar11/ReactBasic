import React,{useState,useEffect} from 'react'

const UseEffectinreact = () => {
    const[count,setCount] = useState(0)
 useEffect(()=>{
    setTimeout(() => {
        setCount((count)=>
                count+1
        )
    }, 100000);
 })
  return (
    <div>
<h1>maiKhoja:{count}</h1>
    </div>
  )
}

export default UseEffectinreact