import React,{Component} from 'react'

class ConstructorProps extends Component{
    constructor(){
        super();
        this.State = {
           name: "ram",
           food: 'lddu'
        }
    }
   render(){
    return(
        <>
        <div>
            <h1>Ram from class coponent using constructor</h1>
                 <h2>{this.State.name} like {this.State.food}</h2>
        </div>
        </>
    )
   }
}


export default ConstructorProps