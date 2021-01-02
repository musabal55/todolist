import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Todolist from './Todolist'
import App from "../App"


class Update extends Component {
	constructor(props) {
		super(props)
        
		this.state = {
			users :[],
			id: props.match.params.id,
			getURL:"http://localhost:3004/posts/"	
		}
	}

	// changeHandler = e => 
	// 	{	 
	// 	this.setState({ [e.target.name]: e.target.value })
	// 	}


	submitHandler = (e,props) => 
	{
		// if (this.state.userId === "" || this.state.title === "" || this.state.body === "" )
		// {
		//	e.preventDefault()
			
		// 	console.log(this.state.id)	
			
		// 	console.log("boş")
		
           
		// } else {
        //     const id =props.match.params.id			
		// 	console.log(this.state)
			// axios
			// 	.get('http://localhost:3004/posts/75')
			// 	.then(response => {
			// 		const data = response.data
			// 		console.log(data)					
			// 		this.setState({users:data});
					
		 	// 	})
		// 		.catch(error => {
		// 			console.log(error)
		// 		})			
		// }			
    }
    

componentDidMount(e,props) 
{
	

				axios
				.get(this.state.getURL+this.state.id)
				.then(response => 
					{
					const data = response.data
					console.log(data)					
					this.setState({users:data});
					
					  }
					  )
}







   
	render() {
		const {id, userId, title, body } = this.state.users
		return (
			<div>				
				<form onSubmit={this.submitHandler}>	
				<p> 
				<label>ID</label>
  				<input
				type="text"		
				name="userId"
				value={id}
				//onChange={this.changeHandler}
				/>
				</p>				
                <p> 
				<label>User ID</label>
  				<input
				type="text"		
				name="userId"
				value={userId}
				//onChange={this.changeHandler}
				/>
				</p>
				
				<p>
				<label>Title</label>
  				<input
				type="text"		
				name="title"
				value={title}
				//onChange={this.changeHandler}
				/>
				</p>

			   <p>
			   <label>Body</label>
			   <input
			   type="text"		
			   name="body"
			   value={body}
			   //onChange={this.changeHandler}
			   />
			   </p>
				
				<button type="submit" class="btn btn-primary">Güncelle</button>
				</form>
			</div>
			
		)
	}
}

export default Update;