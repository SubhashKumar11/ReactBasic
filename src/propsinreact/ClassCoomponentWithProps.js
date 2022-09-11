import React,{Component} from 'react'

class ClassComponentWithProps extends Component{
   render(){
    return(
        <>
        <div>
            <h1>Ram from class coponent props</h1>
            <h2>{this.props.name}</h2>
        </div>
        </>
    )
   }
}


export default ClassComponentWithProps