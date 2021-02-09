import React, { Component } from 'react';
import posed from 'react-pose'
import UserConsumer from '../context'

var uniqid = require('uniqid') // rastgele id dönmesi için

const Animation = posed.div(
    {
        visible : {
            opacity : 1,
            applyAtStart:{
                display:"block"
            }
        },
        hidden : {
            opacity : 0,
            applyAtEnd:{
                display:"none"
            }
        }
    }
);

class AddUser extends Component {
    state = {
        visible:false,
        name: "",
        department : "",
        salary:""
    }

changeVisibility =(e)=>{
    this.setState({visible:!this.state.visible})
}
                        // input text içine giriş yapabilmek için pasif/aktif
changeInput =(e)=>{
    this.setState({[e.target.name]:e.target.value})
}

addUser =(dispatch,e)=>{
   e.preventDefault() // add user butonuna basıldığında sayfa yenilemeyi iptal et
   const {name,department,salary}=this.state
   // form içindeki yeni kayıdı alıyoruz
   const newUser ={
       id:uniqid(),
       name: name, 
       department:department,
       salary:salary
   }
   // kaydı contexte göndermek için ACTION oluşturuyoruz
   dispatch({type:"ADD_USER", payload: newUser})
}

  render() {
      const {visible, name, department, salary} = this.state


      // dispatch için UserConsumer ekledik
return <UserConsumer>
    {
    value=>{
        const {dispatch} = value;
        return (
            <div className="col-md-8 mb-4">
                <button onClick={this.changeVisibility} className="btn btn-dark btn-block mb-2">{visible ? "Hide Form" : "Show Form"}</button>
      <Animation pose={visible?"visible":"hidden"}>
      
               <div className="card">
                   <div className="card-header">
                       <h4>Add User Form</h4>
                       </div>
                       <div className="card-body">

                           {/* bind ve dispatch tanımlamasının yaptık */}
                           <form onSubmit={this.addUser.bind(this, dispatch)}>
                               <div className="form-group">
                                   <label htmlFor="name">Ad</label>
                                   <input
                                    type="text"
                                    name="name"
                                    id="id"
                                    placeholder="Adı girin"
                                    className="form-control"
                                    value={name}
                                    onChange={this.changeInput}
                                    ></input>
                               </div>
      
                               <div className="form-group">
                                   <label htmlFor="department">Departman</label>
                                   <input
                                    type="text"
                                    name="department"
                                    id="department"
                                    placeholder="Departmanı girin"
                                    className="form-control"
                                    value = {department}
                                    onChange={this.changeInput}
                                    ></input>
                               </div>
      
                               <div className="form-group">
                                   <label htmlFor="salary">Ücret</label>
                                   <input
                                    type="text"
                                    name="salary"
                                    id="salary"
                                    placeholder="Ücreti girin"
                                    className="form-control"
                                    value = {salary}
                                    onChange={this.changeInput}
                                    ></input>
                               </div>
                               
                               <button class="btn btn-danger btn-block"type="submit">Ekle</button>
                           </form>
                       </div>
                   </div> 
                   </Animation>
                
                  </div>
                  
          );
    }
    }
</UserConsumer>
    
  }
}
export default AddUser;