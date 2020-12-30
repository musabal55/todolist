import React, { Component } from 'react'
import axios from "axios"

class Urunler extends Component {
    state ={
        urun :[],            //BOŞ BİR STATE OLUŞTURDUK
        id:''
    }

    handleChange = (e) => {
      this.setState({
          //name="name"
       //   this.setState ({name:e.target.value})
      })
  
  }


      handleSubmit = event => {
        event.preventDefault();
    
        axios.delete(`http://localhost:3004/users/${this.state.id}`)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }

    componentDidMount = async () => {
        const response =await axios.get("http://localhost:3004/users")
        this.setState({             //BOŞ STATE İÇİNİ AXİOS GELEN VERİ İLE DOLDURDUK 
         urun : response.data
        })

        console.log(this.state.urun)
        }


    render() {
        return (
            <div>
              <form onSubmit={this.handleSubmit}>
                               {/* //URUN STATE MAP LEDİK EKRANA BASTIK */}
        {this.state.urun.map((urun) => (

<div>Adı:{urun.name} Departman: {urun.department} Maaş: {urun.salary} <button type="button" onClick={this.handleChange}>Sil</button> </div>   
        ))}
         </form>
        </div>
        
        );
}
}


export default Urunler;
