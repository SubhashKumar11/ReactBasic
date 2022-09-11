import React,{useState} from 'react'

const ControlledComponent = () => {
    const [name,setName] = useState('')
    function handleSubmit(){
        alert(`${name} ,form submitted`)
    }
  return (
    <div>ControlledComponent
       <form action="https://www.google.com" onSubmit={handleSubmit}>
        <input type="text" name='name' value={name} 
        onChange={(e)=>setName(e.target.value)} />
        <button type='Submit'>Submit</button>
       </form>
       <hr />
    </div>
  )
}

export default ControlledComponent