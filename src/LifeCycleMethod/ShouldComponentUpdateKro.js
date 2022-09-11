import React, { Component } from "react";

class ShouldComponentUpdateKro extends Component {
    constructor(){
        super()
        this.state = {
            favouritecolor:'red'
        }
    }
    shouldComponentUpdate(){
         return false; //render hone se rokega ohi true hoga to render ho jayega
    }
    changecolor = ()=>{
            this.setState({favouritecolor:blue})
    }
  render() {
    return <div>
        <h1>Should update life cycle</h1>
        <h2>{this.state.favouritecolor}</h2>
        <button onClick={this.changecolor}>update</button>
    </div>;
  }
}

export default ShouldComponentUpdateKro;
