import React,{useContext} from 'react'
import { MeraMessageHai } from './MeraMessageContext'
const Test = () => {
  const messageValue = useContext(MeraMessageHai);
  return (
       <div>
        Message:{messageValue}
       </div>
  )
}

export default Test
