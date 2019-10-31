<<<<<<< HEAD
import React, {Component} from 'react'
import {connect} from 'react-redux'
=======
>>>>>>> master
import { hot } from 'react-hot-loader';
import React from 'react'
import appcss from './app.css'

class App extends Component{
    componentDidMount() {
        console.log(this.props)
    } 
    render(){
        const {qqq , www } =  this.props;
        return(
<<<<<<< HEAD
            <div className = "App">
                <div className = "App">
                    <h2>current Month selary {this.props.haha.count} </h2>
                    <button onClick ={qqq} >plus</button>
                    <button onClick ={www} >subtract</button>
                    
                </div>
            </div>

=======
            <div className = {appcss.blue}>hello world ....</div>
>>>>>>> master
        ) 
    }
}

// store.subscribe(()=>
//     console.log(store.getState())
// );
function mapStateToProps(state){
    return {
        haha: state
    }
}

// store.dispatch(increase);

//dispatch action object / using thunk actioncould be one function so that it will could using async function 
function mapDispatchToProps(dispatch) {
    return {
        qqq : () => dispatch({type: "plus"}),
        www : ()=> dispatch({type: "subtract"})
    }
}

// App = connect(mapStateToProps,mapDispatchToProps)(App)
export default App = connect(mapStateToProps, {qqq:()=>({type:"plus"})})(App)