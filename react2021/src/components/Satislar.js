import React, { Component } from 'react'

class Satislar extends Component {
   
    render() {
    
        const names =this.props.names
        console.log(names)


        return (
            <div>
               <p> {this.props.baslik} SAYFASIDIR</p>
                hoşgeldin satışlar sayfasına sn <h3 style={{color:"red"}}>{this.props.kullanici}</h3>
                state ile gelen ad {this.props.names}///////////
                Ürün Adı: {names}
            </div>
        )
    }
}
export default Satislar;

