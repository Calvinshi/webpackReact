import 'react-hot-loader'
import React,{Component} from "react";
import { render } from "react-dom";
import App from './app'
import {createStore} from 'redux'   
import {Provider} from 'react-redux'
import reducer from './reducer/saleryReducer'
import {AppContainer} from 'react-hot-loader'

const store = createStore(reducer)
console.log(store.getState())

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
