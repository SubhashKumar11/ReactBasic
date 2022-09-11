import React,{useEffect,useState} from 'react'

const UseStateUseEffect = () => {
    const[name,setName] = useState('jack')
    const[age,setAge] = useState(50)
    useEffect(() => {
      console.log("use Effect called")
    }, [age])
    
  return (
    <div>
      <h1>My name:{name}</h1><br />
      <h1>My age:{age}</h1>
      <br />
      <button className="btn" btn-primary onClick={()=>setName('tom')}>Updatename</button>
      <button className="btn" btn-primary onClick={()=>setAge(age+1)}></button>
    </div>
  )
}

export default UseStateUseEffect
