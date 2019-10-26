import { hot } from 'react-hot-loader';
import React from 'react'
import appcss from './app.css'
import Progress from './animation'

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            data : 2 
        }
    }

    confirm = () => {
        this.props.closeAlert();
      }
    handleChange (e){
        this.state.data = 4;
        // this.state.data++
        // this.setState({data:this.state.data+1})
        // this.forceUpdate();
        // console.log(this.state)
        // this.setState({data:this.state.data+1})
        // this.forceUpdate();
        // console.log(this.state)
        // this.setState({data:this.state.data+1})
        // console.log(this.state)
        // this.forceUpdate();
        // update right now 
        // setTimeout(() => {
        //     this.setState({data:this.state.data+1})
        //     console.log(this.state)
        // }, 1000);
        // setTimeout(() => {
        //     this.setState({data:this.state.data+1})
        //     console.log(this.state)
        // }, 1000);
    }
    handleClick(){
        console.log(1111);
        
    }
    // handetwo = ()=>{
    //     console.log(22222);
    // }
    handetwo (){
        console.log(22222);
    }

    render(){
        return(
            <div className = {appcss.blue}>hello world ....{this.state.data}
                <div>
                    <button onClick= {()=> this.handleChange()}>Button</button>
                    <button onClick = {this.handleClick}>Click</button>
                    <button onClick = {this.handetwo}>two</button>
                </div>
                <Progress></Progress>
            </div>
            
        ) 
    }
}
export default hot(module)(App)