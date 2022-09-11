import React,{useState,useMemo} from 'react'

const UseMemoHook = () => {
    const[count,setCount] = useState(0)
    const[value,setValue] = useState(0)
    const multiCountMemoHai = useMemo(function multicount(){
        console.warn('multicount')
        return count*5
       
    },[count])
  return (
    <div>UseMemoHook
        <h2>count:{count}</h2>
        <h2>item:{value}</h2>
        <h2>{multiCountMemoHai}</h2>
        <button onClick={()=>setCount(count+1)}>Update</button>
        <button onClick={()=>setValue(value+10)}>Update</button>
    </div>
  )
}

export default UseMemoHook