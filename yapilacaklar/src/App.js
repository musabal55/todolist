import React, { Component } from 'react'
import PostForm from './Components/PostForm'
import Todolist from './Components/Todolist'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


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