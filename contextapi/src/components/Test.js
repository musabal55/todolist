import React, { Component } from 'react';

 class Test extends Component {
     constructor(props) {
         super(props);
         this.state = {
             a:10
         }
         console.log("CONSTRUCTOR "+this.state.a)
     }

componentDidMount() {
    console.log("componentdidmount")
    this.setState({a:20})
}

componentDidUpdate = (prevProps, prevState) => {
    console.log("component did update")
}
  render() {
      console.log("render")
      
    return (
      <div></div>
    );
  }
}

export default Test;