import React, { Component, props } from 'react'
import axios from 'axios'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Update from "./Update"
import App from "../App"
import PostForm from './PostForm';

class Todolist extends Component {
  state = {
    users: [],
    id: ""
  }





  componentDidMount() {
    axios.get(`http://localhost:3004/posts/`)
      .then(res => {
        //  console.log(res)
        this.setState({ users: res.data })
      })
  }



  deleteRow(id, e) {
    axios.delete(`http://localhost:3004/posts/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);

        const users = this.state.users.filter(item => item.id !== id);
        this.setState({ users });
      })

  }





  updateRow(id, e) {
    console.log(id)




    // axios.get(`http://localhost:3002/posts/${id}`)
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);

    //    const {userId, id, title, body} = res.data
    //     console.log(userId)

    //     // this.state.users = res.data
    //     this.setState({ 
    //          users:res.data
    //       });

    //   })

  }


  render() {
    return (
      <div>

        <Switch>
          <Route path="./App" exact component={App} />
          <Route path="/Update/:id" component={Update} />
        </Switch>

        <h1>Kamera Bakım İşlemleri</h1>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {this.state.users.map(item => (
              <tr>
                <td key={item.id}>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
                <td>
                  <Link to="/App">  <button className="btn btn-danger" onClick={(e) => this.deleteRow(item.id, e)}>Sil</button></Link>
                  <Link to={`/Update/${item.id}`}><button className="btn btn-info" onClick={(e) => this.updateRow(item.id, e)}>Düzenle</button></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>


      </div>
    )
  }
}
export default Todolist;