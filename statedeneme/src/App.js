import React, { Component } from 'react'
import Ariza from './components/Ariza.js'
import Bakim from './components/Bakim.js'

//let mudahaleEden =prompt("Müdahale eden kişi") 

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      bakim:
        { bakimYili: 2021, bakimTipi: "Periyodik", bakimPersonel: "C C" }

    };
  };


  render() {
    let birim = "Bilgi İşlem Elektronik Haberleşme"
    return (
      <div>
        <Ariza
          arizaTipi="Kamera arızası"
          birim={birim}
        //mudahaleEden={mudahaleEden}
        />

        <Bakim
          bakimYili={this.state.bakim.bakimYili}
          bakimTipi={this.state.bakim.bakimTipi}
          bakimPersonel={this.state.bakim.bakimPersonel}
        />



      </div>
    )
  }
}

export default App;