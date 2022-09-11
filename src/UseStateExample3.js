import React,{useState} from 'react'

const UseStateExample3Hai = () => {
    const[name,setName] = useState('')
    const GamMeiNahi = (e)=>{
        setName(e.target.value)
    }
  return (
    <div>
        <form action="">
            <h3>onchange in react</h3>
       <input type="text" value = {name} onChange={GamMeiNahi} 
       placeholder="your name"/>
       <p>{name}</p>
       </form>
    </div>
  )
}

export default UseStateExample3Hai