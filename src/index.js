import 'react-hot-loader'
import React,{Component} from "react";
import { render } from "react-dom";
// import App from './app'
import {createStore} from 'redux'   
import {Provider , connect} from 'react-redux'
import {AppContainer} from 'react-hot-loader'

class App extends Component{
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

const tiger = 1000

const increase = {
    type : "plus"
}

const decreasee = {
    type : "subtract"
}

const reducer = (state = tiger, action )=>{
    switch (action.type) {
        case "plus":
            return state += 100;
            break;
        case "subtract":
            return state -= 100;

        default:
            return state;
    }
}

const store = createStore(reducer)
console.log(store.getState())


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

App = connect(mapStateToProps,mapDispatchToProps)(App)


// import { hot } from 'react-hot-loader';

render(
    <Provider store = {store}>
        <AppContainer>
            <App />
        </AppContainer>
    </Provider>
    ,
    document.getElementById("root"));

if (module.hot) {
  module.hot.accept("./print.js", function() {
    console.log("Accepting the updated printMe module!");
    printMe();
  });
}
