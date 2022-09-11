import React,{Component} from 'react'
class ComponentDidUodate extends Component{
    constructor(){
        super()
        console.warn('constructor callled')
        this.state = {
            count : 0
        }
    }
    componentDidUpdate(preprops,prestate,snapshot){
        if(this.state.count<10){
            this.setState({count:this.state.count+1})
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=>{this.setState({
                    count:this.state.count+1
                })}}>update</button>
            </div>
        )
    }

}


export default ComponentDidUodate