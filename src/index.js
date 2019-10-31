// import "babel-polyfill";
// import { hot } from 'react-hot-loader';
import 'react-hot-loader'
import React,{Component} from "react";
import { render } from "react-dom";
import App from './app'

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
