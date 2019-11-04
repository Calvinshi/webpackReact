import React from 'react'
export default class CustomTextInput extends React.Component {
    constructor(props) {
      super(props);
      // create a ref to store the textInput DOM element
      this.com = React.createRef();
      this.textInput = React.createRef();
      this.textInput1 =React.createRef();
      this.focusTextInput = this.focusTextInput.bind(this);
    }
  
    focusTextInput() {
      // Explicitly focus the text input using the raw DOM API
      // Note: we're accessing "current" to get the DOM node
      console.log(this.textInput)
      console.log(this.textInput.current)
      console.log(this.textInput1)
      this.textInput.current.focus();
    //   setTimeout(() => {
    //     this.textInput1.focus();
    //   }, 1);
    this.textInput1.focus();
    }
  
    render() {
      // tell React that we want to associate the <input> ref
      // with the `textInput` that we created in the constructor

      return (
        <div>
          <input
            type="text"
            ref={this.textInput} />
            <input
            type="text"
            ref={r => this.textInput1 =r} />
            <input
            type="text"
            ref={this.props.subDom} />
            <input
            type="text"
            ref="test2" />
  
          <input
            type="button"
            value="Focus the text input"
            onClick={this.focusTextInput}
          />
        </div>
      );
    }
  }