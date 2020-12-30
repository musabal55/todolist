import React, { Component } from 'react'

class Urunler extends Component {

    render() {
        
        return (
            <div>
              <p>Ürün No: {this.props.id}, Ürün Adı: {this.props.name}, Fiyatı: {this.props.price}</p> 
            </div>
        )
    }
}

export default Urunler;
