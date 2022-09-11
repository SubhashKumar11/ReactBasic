import React,{createContext} from 'react'
import Test from './Test';
export const MeraMessageHai = createContext();

const MeraMessageContext = () => {
  return (
    <MeraMessageHai.Provider value="Hello">
       <div>
        <Test/> 
       </div>
    </MeraMessageHai.Provider>
  )
}

export default MeraMessageContext
