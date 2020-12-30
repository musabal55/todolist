import React, { Component } from 'react'
import PostForm from './Components/PostForm'
import Todolist from './Components/Todolist'


class App extends Component {
  render() {
    return (
      <div>
        <PostForm/>
        <Todolist/>
        
      </div>
    )
  }
}
export default App;