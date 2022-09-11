import React from 'react'
import ConstructorProps from './ConstructorProps'
import ClassComponentWithProp from './ClassCoomponentWithProps'
import Waytousestatewithprops from './Waytousestatewithprops'
import Mata from './Mata'
const Papa = () => {
  return (
    <div>
        <ConstructorProps/>
        <ClassComponentWithProp name="ramayan"/>
        <Mata data="ram from papa"/>
        <Waytousestatewithprops city="lucknow" />
    </div>
  )
}

export default Papa