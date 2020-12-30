import React, { Component } from 'react'
import Arizalar from "./components/Arizalar"

 class App extends Component {

constructor(){
    super();
    this.state={
        arizalar:[
            {id:"1", arizaTuru:"Kamera", personelAdi:"Emre K."},
            {id:"2", arizaTuru:"Kablo", personelAdi:"Burak K."},
            {id:"3", arizaTuru:"Pano", personelAdi:"İlhan E."}
    ]
    }
}



    render() {
        return (
            <div>
                {
                    this.state.arizalar.map((arizalar)=>{
                        return(
                        <Arizalar
                        id={arizalar.id}
                        arizaTuru={arizalar.arizaTuru}
                        personelAdi={arizalar.personelAdi}
                        />

                        )
                    })
                }
            </div>
        )
    }
}
export default App;