import React, { Component } from 'react'
import PostForm from './Components/PostForm'
import Todolist from './Components/Todolist'
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Update from './Components/Update'
import NotFound from './Components/NotFound'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
         <Switch>
          <Route exact path="/" exact component={App} />
          <Route exact path="/Update/:id" component={Update} />
          <Route component={NotFound} />
        </Switch>
        
      </div>
      </Router>
    );
  }
}
export default App;