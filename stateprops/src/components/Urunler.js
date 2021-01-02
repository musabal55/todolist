import React, { Component } from 'react'

class Urunler extends Component {

    render() {
        
        return (
            <div>
              {this.props.title} 
              {console.log("logum:"+this.props.title)}
            </div>
        )
    }
}

export default Urunler;
