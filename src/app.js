import React, {Component} from 'react'
import {connect} from 'react-redux'
import { hot } from 'react-hot-loader';

class App extends Component{
    componentDidMount() {
        console.log(this.props)
    } 
    render(){
        const {qqq , www } =  this.props;
        return(
            <div className = "App">
                <div className = "App">
                    <h2>current Month selary {this.props.haha.count} </h2>
                    <button onClick ={qqq} >plus</button>
                    <button onClick ={www} >subtract</button>
                    
                </div>
            </div>

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
export default App = connect(mapStateToProps, mapDispatchToProps)(App)