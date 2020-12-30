import React, { Component } from 'react'

class Arizalar extends Component {
    render() {
        return (
            <div>
                <p>ID: {this.props.id}</p>
                <p>Arıza Türü: {this.props.arizaTuru}</p>
                <p>Personel : {this.props.personelAdi}</p>
                <h2>-/-/-/-/-/-/-
                    
                </h2>
            </div>
        )
    }
}
export default Arizalar;