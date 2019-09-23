// import "babel-polyfill";
import React from "react";
import { render } from "react-dom";

class Hello extends React.Component {
  render() {
    return <p>hello world</p>
  }
}
render(<Hello />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept("./print.js", function() {
    console.log("Accepting the updated printMe module!");
    printMe();
  });
}
