import React, { Component } from 'react'
import Urunler from "./components/Urunler"
import Satislar from "./components/Satislar"

class App extends Component {
constructor(){
    super();
    this.state={
        urunler :[
            {id:1, name:"Kalem", price:"15"},
            {id:2, name:"Defter", price:"18"}
        ],
        satislar :[
            {id:10, customer:"Elif Kırtasiye", price:"15"},
            {id:20, customer:"Ezgi Kitabevi", price:"18"} 
        ]
    }
}



    render() {
        return (
            <div>
               
                {/* URUNLER MAP */}
               {
                    this.state.urunler.map((urunler) =>{
                        return(
                            <Urunler
                            id={urunler.id}
                            name = {urunler.name}
                            price={urunler.price}
                           
                            />
                        )
                    })
                }

<hr></hr>
                {/* SATIŞLAR MAP */}

                {
                    this.state.satislar.map((satislar) =>{
                        return(
                            <Satislar
                            id={satislar.id}
                            customer = {satislar.customer}
                            price={satislar.price}
                           
                            />
                        )
                    })
                }

            </div>
        )
    }
}

export default App;
