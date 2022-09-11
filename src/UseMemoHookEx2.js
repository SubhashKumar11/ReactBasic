import React,{useState,useMemo} from 'react'

const UseMemoHookEx2 = () => {
    const[number,setNumber] = useState(0)
    //use memo
    const[counter,setCounter] = useState(0)
    const SquaredNum = useMemo(()=>{
        return SquaredNum(number)
        
    },[number])
    const mugheChangeKaro = (e)=>{
        setNumber(e.target.value)
    }
    const meracounter = ()=>{
        setCounter(counter+1)
    }

  return (
    <div>UseMemoHookEx2
        <input type="number" placeholder='enter number' value={number}
        onChange={mugheChangeKaro} />
        <div>
        squareno.{SquaredNum}
        <button onClick={meracounter}>counter++</button>
        <div>counter:{counter}</div>
        </div>
    </div>
  )
}

export default UseMemoHookEx2