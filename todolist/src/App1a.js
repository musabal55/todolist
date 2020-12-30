import React, { Component } from 'react'
import axios from "axios"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newItem: "",
            list: []
        }
    }

handleChange= event =>{
    this.setState({newItem:event.target.value})
}


handleSubmit= event =>{
    const user = {
       id: 1 + Math.random(),
        newItem: this.state.list
    }

    //
    axios.post("http://localhost:3000/todolist",{id:525,todo:"tuz"})
    .then(res =>{
        console.log(res)
        console.log(res.data)
    }
        )
    
}




    deleteItem(id,e){
        axios.delete(`http://localhost:3000/todolist/${id}`)   
        .then(res =>{
            const list = this.state.list.filter(item=> item.id !== id)
            this.setState({list}) 

        })


    }


   

    componentDidMount= async() => {
        const response =await axios.get("http://localhost:3000/todolist")
        console.log(response)
        this.setState({
        list:response.data
        })

    }
    render() {
        return (
            <div className="App">
                <form onSubmit={this.handleSubmit}>
                <div>
                    Yapılacaklar
                <br />
                <input type="text" name="list" onChange={this.handleChange} />
                <button type="submit">Add</button>


                    <br/>
                    <ul>
                        {this.state.list.map(item => {
                        return (
                        <li key={item.id}>
                        {item.id}{item.todo}
                        <button onClick={(e) => this.deleteItem(item.id)}>
                        Sil
                        </button>
                        </li>
                        )
                        })}  
                    </ul>



                </div>
                </form>
                </div>
        );
    }
}
export default App;