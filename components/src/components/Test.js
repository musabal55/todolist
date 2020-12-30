import React, { Component } from 'react'

class Test extends Component {
constructor (props){
    super(props)
    console.log(this.props)
    this.state = {
        a:10
    }
    console.log("Constructor")
}

componentDidMount() {
    console.log("componentDidMount")
   // this.setState({
    //    a:20    })
    
}

componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate")
}

    render() {
        console.log("render içi")
        return (
            <div>
                
            </div>
        )
    }
}
export default Test;