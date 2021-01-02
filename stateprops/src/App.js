import React, { Component } from 'react'
import Urunler from './components/Urunler'

 class App extends Component {
    render() {
        const title = "derinkod"
        return (
            <div>
                <Urunler title={title}/>
            </div>
        )
    }
}
export default App;