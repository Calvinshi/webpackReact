import { hot } from 'react-hot-loader';
import ReactDOM from 'react-dom';
import React from 'react'
import appcss from './app.css'
import Progress from './animation'
import CustomTextInput from './customTextInput'

class App extends React.Component{
    constructor(){
        super();
        this.data = 0
        this.state = { 
            data : 2 
        }
        this.element = React.createRef();
        this.com = React.createRef();
        this.proDom = React.createRef();
        this.subDom = React.createRef();
    }
    
    componentDidMount() {
        console.log("didmuont....");
        
        // eslint-disable-next-line
        this.container = ReactDOM.findDOMNode(this)
        console.log(this.element);
        console.log(this.com)
        console.log(this.proDom);
        console.log(this.proDom.querySelector('div'));
        console.log(this.proDom.querySelector('.progress'));
        console.log(this.subDom);
        
         
        
    }
    componentDidUpdate(){
            console.log('app update did done .....');
            
        }
    getContainer() {
        // return this.container.ownerDocument.body;
        return this.container.ownerDocument;
    }

    confirm = () => {
        console.log(this.props);
        
        // this.props
      }
    handleChange (e){
        this.state.data = 4;
        // this.state.data++
        // this.setState({data:this.state.data+1})
        // this.forceUpdate();
        // console.log(this.state)
        // this.setState({data:this.state.data+1})
        // this.forceUpdate();
        // console.log(this.state)
        // this.setState({data:this.state.data+1})
        // console.log(this.state)
        // this.forceUpdate();
        // update right now 
        // setTimeout(() => {
        //     this.setState({data:this.state.data+1})
        //     console.log(this.state)
        // }, 1000);
        setTimeout(() => {
            const data = this.data++
            this.setState({data});
            console.log(this.state)
        }, 0);
    }
    handleClick= ()=>{
        console.log(this.getContainer())
        console.log(this.getContainer().body)
        for (var a in this.getContainer()){
            console.log(a);
        }
        this.getContainer().body.onClick = ()=>{
            alert("aaaaaa");
        }
        this.getContainer().body.onClick();

        
        this.getContainer();
        
    }
    // handetwo = ()=>{
    //     console.log(22222);
    // }
    handetwo (){
        console.log(22222);
    }

    render(){
        return(
            <div className = {appcss.blue} ref={r =>this.element = r}>hello world ....{this.state.data}
                <div>
                    <button onClick= {()=> this.handleChange()}>change</button>
                    <button onClick = {this.handleClick}>handleClick</button>
                    <button onClick = {this.handetwo}>two</button>
                    <button onClick = {this.confirm}>two</button>
                </div>
                <div ref= {r => this.proDom = r}>
                    <Progress ref={this.com} ></Progress>
                </div>
                <CustomTextInput subDom = {el => this.subDom =el}/>
            </div>
            
        ) 
    }
}
export default hot(module)(App)