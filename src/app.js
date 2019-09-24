import { hot } from 'react-hot-loader';
import React from 'react'
import appcss from './app.css'

class App extends React.Component{
    render(){
        return(
            <div className = {appcss.blue}>hello world ....</div>
        ) 
    }
}
export default hot(module)(App)