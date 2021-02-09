import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Todolist from './Todolist'
import App from "../App"


class Update extends Component {
	constructor(props) {
		super(props)

		this.state = {
	userId: "",
	title: "",
	body: "",
	id: props.match.params.id,
	getURL: "http://localhost:3004/posts/",
	degisim:[]
}
}


changeHandler = e => {
	this.setState({
          
		[e.target.name] : e.target.value
	})
	
	this.state.degisim=this.state
	//console.log(this.state.degisim)
}


updateUser = (e) => {
	e.preventDefault();

   
	//this.state.degisim
	const {id} = this.props.match.params;
const degisim={
	userId:this.state.userId,
	title:this.state.title,
	body:this.state.body
}


//console.log(veri)


		const request = axios.put(`http://localhost:3004/posts/${id}`,degisim)
				.then(response => {
					console.log("response"+response.data)
					//this.setState({degisim:response.data}) 
					
					
				})

this.props.history.push("/App");
	
 	//axios.
 //console.log("put sonrası:"+veri)
	//dispatch({type: "UPDATE_USER",payload : response.data});

	// Redirect
	
} 



componentDidMount= async(e, props)=> {

	//const { id } = props.match.params
	//console.log(id)
	const response = await axios.get(`http://localhost:3004/posts/${this.state.id}`)
	const { userId, title, body } = response.data
	console.log(response.data)
	this.setState({
		userId,
		title,
		body
	});

	
	
}


render() {
	const { id, userId, title, body } = this.state
	return (
		<div>
			<form onSubmit={this.updateUser}>
				{/* <p>
					<label>ID</label>
					<input
						type="text"
						name="userId"
						value={id}
						id="id"

						onChange={this.changeHandler}
					/>
				</p> */}
				<p>
					<label>User ID</label>
					<input
						type="text"
						name="userId"
						value={userId}
						id="userId"
						onChange={this.changeHandler}
					/>
				</p>

				<p>
					<label>Title</label>
					<input
						type="text"
						name="title"
						value={title}
						id="title"
						onChange={this.changeHandler}
					/>
				</p>

				<p>
					<label>Body</label>
					<input
						type="text"
						name="body"
						value={body}
						id="body"
						onChange={this.changeHandler}
					/>
				</p>

				<button type="submit" class="btn btn-primary">Güncelle</button>
			</form>
		</div>

	)
}
}

export default Update;