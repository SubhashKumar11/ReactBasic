import React,{Component} from 'react'

class Car extends  Component{
    constructor(props){
        super(props)
        this.state = {
            brand:"Ford",
            model: "Ram",
            year: 2020
        }
    }
    changeColor = ()=>{
        this.setState({color:"blue"});
    }
    render(){
        return(
            <div>
                <h1>{this.state.brand}</h1>
                <h2>{this.state.color}</h2>
                <button type="button" onClick={this.changeColor} >Hmkotipo</button>
            </div>
        )
    }

    
}


export default Car