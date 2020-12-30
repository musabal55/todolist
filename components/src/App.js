import React, { Component } from 'react'
import Users from "./components/Users.js"
import AddUser from "./components/AddUser"
import Test from "./components/Test";

 class App extends Component {
 
  
  render() {
    return (
      <div>
        <AddUser></AddUser>
        <Users/>
        <Test test="deneme"/>
      </div>
    )
  }
}

export default App;