import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

class Hello extends React.Component {
    render() {
       return (
           <p>hello react！</p>
        )
    }
}
render(
    <Hello/>,
    document.getElementById('root')
)  


if (module.hot) {
    // 实现热更新
    module.hot.accept();
  }