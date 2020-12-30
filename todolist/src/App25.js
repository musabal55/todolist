import React, { Component }from 'react';
import axios from 'axios';


class App extends Component {
    state= {   
        
            id: "",
            todo: ""
        }
    

  handleChange = event => {
    this.setState({ id:event.target.value,todo: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      id:this.state.id,
      todo: this.state.todo
    };

    axios.post(`http://localhost:3000/todolist/`,{user})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="id" onChange={this.handleChange} />
            <input type="text" name="todo" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default App;