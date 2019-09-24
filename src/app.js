import React from 'react'
import { hot } from 'react-hot-loader';
import './app.less'
class App extends React.Component{
    render(){
        return(
            <div className = "app-background">hello world ....</div>
        ) 
    }
}
export default hot(module)(App)