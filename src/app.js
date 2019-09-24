import React, {Component} from 'react'
import {connect} from 'react-redux'
import { hot } from 'react-hot-loader';

class App extends Component{
    componentDidMount() {
        console.log(this.props)
    } 
    render(){
        const {PayIncrease , PayDecrease } =  this.props;
        return(
            <div className = "App">
                <div className = "App">
                    <h2>current Month selary {this.props.tiger} </h2>
                    <button onClick ={PayIncrease} >plus</button>
                    <button onClick ={PayDecrease} >subtract</button>
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
        tiger: state
    }
}

// store.dispatch(increase);

function mapDispatchToProps(dispatch) {
    return {
        PayIncrease : () => dispatch({type: "plus"}),
        PayDecrease : ()=> dispatch({type: "subtract"})
    }
}

// App = connect(mapStateToProps,mapDispatchToProps)(App)
export default App = connect(mapStateToProps, mapDispatchToProps)(App)