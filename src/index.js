// import "babel-polyfill";
import 'react-hot-loader'
import React from "react";
import { render } from "react-dom";
import App from './app'
// import './app.css';
// import { hot } from 'react-hot-loader';

class Hello extends React.Component {
  render() {
    return <p>hello 45687</p>
  }
}
render(
    // <AppContainer>
        <App />
    // </AppContainer>
    ,
    document.getElementById("root"));

if (module.hot) {
  module.hot.accept("./print.js", function() {
    console.log("Accepting the updated printMe module!");
    printMe();
  });
}
