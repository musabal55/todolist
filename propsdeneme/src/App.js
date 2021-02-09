import React, { Component } from 'react'
import Urunler from './components/Urunler'
import Satislar from './components/Satislar'
class App extends Component {

  constructor(props) {
    super(props)

    this.state = {     // rcon ile satislar objesini oluşturduk
      satislar: [
        { id: 1, name: "kitap", price: 50 },
        { id: 2, name: "defter", price: 75 }
      ]
    };
  };
  render() {
    const satis = this.state.satislar; // objeji değişkene atadık
    console.log(satis);
    return (
      <div>
        <Urunler
          urunID="1"
          urunAdi="İşlemci"
          urunFiyati="850"
          stokAdedi="1500"
        />
        <Satislar
          satis={satis}  //satışlar state objesini props olarak gönderdik
        />
      </div>
    )
  }
}
export default App;