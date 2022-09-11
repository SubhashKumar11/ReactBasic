import React,{Component} from 'react'

class ConstuctorUsingClass extends Component{
    constructor(){
        super();
        this.state = {color:'red'}
    }
   render(){
    return(
        <div>
            <h3>my car is {this.state.color}</h3>
        </div>
    )
   }
}


export default ConstuctorUsingClass