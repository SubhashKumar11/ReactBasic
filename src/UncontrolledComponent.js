import React,{useRef} from 'react'
//uncontrolled component dont use hook
const UncontrolledComponent = () => {
    const inputRefHai = useRef(null)
    function ram(){
        inputRefHai.current.style.color ='green'
         alert(`Name:${inputRefHai.current.value}`)
    }
  return (
    <div>UncontrolledComponent uses useRef
        <form action="" onSubmit={ram}>
            <input type="text" 
            ref={inputRefHai} />
            <button type='Submit'>Submit</button>
        </form>
        <hr /> 
    </div>
  )
}

export default UncontrolledComponent