import React,{useRef} from 'react'

const UseRefhook = () => {
    let inputRef = useRef(null)
    function handleInput(){
        inputRef.current.value = "Ram"
        inputRef.current.focus()
        inputRef.current.style.color = 'red'
    }
    
  return (
    <div>UseRefhook
        <h1>Very imporrtant useRef</h1>
        <input type="text" ref={inputRef} />
        <button onClick={handleInput}>HandleKroInput</button>
    <br />
    <hr />
    </div>
    
  )
}

export default UseRefhook