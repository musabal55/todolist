import React, { Component } from 'react'

class Satislar extends Component {

    render() {
        
        return (
            <div>
              <p>Ürün No: {this.props.id}, Müşteri Adı: {this.props.customer}, Satış Tutarı: {this.props.price}</p> 
            </div>
        )
    }
}

export default Satislar;
