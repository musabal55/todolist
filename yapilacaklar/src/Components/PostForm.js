import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class PostForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			userId: '',
			title: '',
			body: ''
		}
	}

	changeHandler = e => 
		{	 
		this.setState({ [e.target.name]: e.target.value })
		}


	submitHandler = e => 
	{
		if (this.state.userId === "" || this.state.title === "" || this.state.body === "" )
		{
			e.preventDefault()
			console.log("boş")
		} else {			
			console.log(this.state)
			axios
				.post('http://localhost:3004/posts', this.state)
				.then(response => {
					console.log(response)
				})
				.catch(error => {
					console.log(error)
				})			
		}			
	}

	render() {
		const { userId, title, body } = this.state
		return (
			
			<div>
				
				
				<form onSubmit={this.submitHandler}>
					<div className="form-group col-md-6 mb-6">
					<h1>Yeni Kayıt</h1>
					
						<input
							type="text"
							className="form-control"
							id="formGroupExampleInput"
							placeholder="Kullanıcı no gir"
							name="userId"
							value={userId}
							onChange={this.changeHandler}
						/>
					
					<div>
					
						<input
							type="text"
							className="form-control"
							id="formGroupExampleInput"
							placeholder="Başlık gir"
							name="title"
							value={title}
							onChange={this.changeHandler}
						/>
					</div>
					<div>

						<input
							type="text"
							className="form-control"
							id="formGroupExampleInput"
							placeholder="Açıklama gir"
							name="body"
							value={body}
							onChange={this.changeHandler}
						/>
					</div>
					
					<button type="submit" class="btn btn-primary">Kaydet</button>
					</div>
				</form>

				
				
			</div>
			
		)
	}
}

export default PostForm;