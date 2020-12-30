import React, { Component } from 'react'

 class User extends Component {
     state = {
         isVisible : false
     }

     onClickEvent=(e)=>{
         this.setState({
         isVisible : !this.state.isVisible
        })
     }

    render() {
        //Destructing
        const {id, name, salary, department} = this.props
        const {isVisible} = this.state
        return (
            <div className = "col-md-8 mb-4">
                <div className="card" style={isVisible ? {backgroundColor:"#62848a", color:"white"} : null}>
                    <div className="card-header d-flex justify-content-between">
                        
                        <h4 className="d-inline" onClick ={this.onClickEvent}>{name}</h4>
                        <i className="far fa-trash-alt" style = {{cursor:"pointer"}}></i>
                    </div>
                {
                    isVisible ? <div className="card-body">
                        <p className="card-text">ID : {id}</p>
                        <p className="card-text">Tutar : {salary}</p>
                        <p className="card-text">Departman : {department}</p>
                        </div> 
                     : null
                     
                }
                    
                    </div>    
              
            </div>
        )
    }
}
export default User;