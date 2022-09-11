import React,{Component} from 'react'

class ComponentDidMount extends Component{
    constructor(props){
          super(props)
          this.state ={
            favouriteColor: 'red'
          }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({favouriteColor:'yellow'})
        },1000);
    }
    render(){
        return(
            <h1>my favourite color: {this.state.favouriteColor}</h1>
        )
    }

}

export default ComponentDidMount