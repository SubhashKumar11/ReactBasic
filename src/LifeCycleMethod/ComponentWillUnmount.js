import React, { Component } from 'react'
//galat h please refer net
class ComponentWillUnmount extends Component {
    ComponentWillUnmount(){
        alert('will unmount called')
    }
     render(){
        return(
            <div>
              <h1>i m component willunmount called exported to AppForWillUnmount</h1>
            </div>
        )
     }
  
}

export default ComponentWillUnmount