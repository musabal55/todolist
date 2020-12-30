import React, { Component } from 'react'
import axios from 'axios'

class Todoinput extends Component {
state = {
    id :'',
    user:''
    
}

handleChange = event => {
    this.setState({name:event.target.value})
}


handleSubmit = event => {
    event.preventDefault()
    const user = {
        user : this.state.user,
        id: this.state.id
    }

    axios.post(`http://localhost:3006/users`,{user})
    .then(res =>{
        console.log(res)
        console.log(res.data)
    })
}

    render() {
        return (
         <form onSubmit={this.handleSubmit}>
             <label>
                 Yapılacaklar :
                 <input type="text" name="name" onChange={this.handleChange}/>
             </label>
             <button type="submit">Ekle</button>
         </form>   
        )
    }
}
export default Todoinput;