import React, { Component } from 'react'
import axios from 'axios'
class App extends Component {

    
    state={
        id:'',
		todo:''
    }

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://localhost:3006/todolist', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
    }
    
    componentDidMount= async() => {
        const response =await axios.get("http://localhost:3006/todolist")
        console.log(response)
        this.setState({
        list:response.data
        })

    }



	render() {
		const { id, todo, list} = this.state
		return (
			<div>
				<form onSubmit={this.submitHandler}>
                <div>
						<input
							type="text"
							name="id"
							value={id}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="todo"
							value={todo}
							onChange={this.changeHandler}
						/>
					</div>
					<button type="submit">Kaydet</button>

                    
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
				</form>
			</div>
		)
	}
}

export default App