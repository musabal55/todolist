import React, { Component } from 'react'
import Arizalar from './components/Arizalar'
import Satislar from './components/Satislar'

class App extends Component {
    render() {
        return (
            <div>
              <Arizalar arizaKaydi="55"/>  
              <Satislar urunAdi="Matkap"/>
            </div>
        )
    }
}

export default App;