import { Component } from 'react';

import Urunler from './components/Urunler';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      ad:"Musa BAL",
      dogumYeri:"SAMSUN"
    }
  } 

  degistir=()=>{
   this.setState({
     ad:"Emre Kaya",
     dogumYeri:"Bafra"
   })
  }
render(){
  return (
    <div>
    <Urunler baslik="Ürünlerimiz:"> 1.Ürün </Urunler>
    <Urunler baslik="Stoklar:"> 1.Stok  </Urunler>
    <p>{this.state.ad}</p>
    <p>{this.state.dogumYeri}</p>
    <button onClick={this.degistir}> Değiştir </button>
    </div>
  );
}
}

export default App;
