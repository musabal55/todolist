import React, { Component } from 'react'
import Users from './components/Users'
import Navbar from './components/Navbar'
import AddUser from './components/AddUser'
import "./App.css"
import Test from './components/Test'


class App extends Component {
 





  render() {
    return (
      <div>
        <div className="container">
          <Test test = "deneme testi" />
          <Navbar title="User App" />
          <hr />
          <AddUser/>
          <Users/>

        </div>
      </div>
    )
  }
}

export default App;