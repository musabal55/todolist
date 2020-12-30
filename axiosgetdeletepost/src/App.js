import React, { Component } from 'react'
import Urunler from "./components/Urunler" 


function sayHello(hi) {
  let foon ='world'
//console.log(foon+" "+hi)
return foon+hi
}

class App extends Component {
  
  
  
  render() {
    
    var hi="merhaba"
    return (
      <div>
        
        {console.log(sayHello(hi))}
        
        <Urunler/>
        <deneme/>
      </div>
    )
  }
}
export default App;