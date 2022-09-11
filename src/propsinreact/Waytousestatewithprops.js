import React,{Component} from 'react'

class Waytousestatewithprops extends Component{
    state = {
        name:"rama",
        city: this.props.city,
        episode: 5
    }
   render(){
    return(
        <>
        <div>
            <h1>state using class coponent props</h1>
            <h2>{this.state.name}</h2>
            <h3>{this.state.city}</h3>
            <h3>{this.state.episode}</h3>
        </div>
        </>
    )
   }
}


export default Waytousestatewithprops