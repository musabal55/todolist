import React, { Component } from 'react'
import User from './components/User'
import Detail from './components/Detail'
import Satislar from './components/Satislar'

let girisYapan =prompt("Adınızı girin")
console.log(girisYapan)

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      person:{name:"musa bal", age:37}
       
       }
  }g

  
  
  render() {
    const sat=this.state.person.age
  console.log(sat)
    return (
      <div>
        <User baslik="USER" kullanici={girisYapan}/>
        <Detail kullanici={girisYapan} name= "Ömer" surname= "Gülçiçek" job= "Yazılım Mühendisi" />
        <Satislar baslik="SATIŞLARIM" kullanici={girisYapan} names = {this.state.person.name} />
      </div>
    )
  }
}
