import React, { Component } from 'react'
import axios from 'axios'

class Todolist extends Component {
state = {
    users :[]
}

componentDidMount() {
    axios.get (`http://localhost:3002/posts`)
        .then(res => {
        console.log(res)
        this.setState({users:res.data})
    })
}



deleteRow(id, e){
    axios.delete(`http://localhost:3002/posts/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
  
        const users = this.state.users.filter(item => item.id !== id);
        this.setState({ users });
      })
  
  }





//   updateRow(id, e){
//   console.log(id)


//     axios.get(`http://localhost:3002/posts/${id}`)
//       .then(res => {
//         console.log(res);
//         console.log(res.data);

//        const {userId, id, title, body} = res.data
//         console.log(userId)
  
//         // this.state.users = res.data
//         this.setState({ 
//              users:res.data
//           });
         
//       })
  
//   }


    render() {
        return (
            <div>
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
                    <button className="btn btn-danger" onClick={(e) => this.deleteRow(item.id, e)}>Sil</button>
                    <button className="btn btn-info" onClick={(e) => this.updateRow(item.id, e)}>Düzenle</button>
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