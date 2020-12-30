import React, { Component } from 'react'

 class Musteriler extends Component {
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
        const {name, tutar, tarih} = this.props
        const {isVisible} = this.state
        return (
            <div className = "col-md-8 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="d-inline" onClick ={this.onClickEvent}>{name}</h4>
                        <i className="far fa-trash-alt" style = {{cursor:"pointer"}}></i>
                    </div>
                {
                    isVisible ? <div className="card-body">
                        <p className="card-text">Tutar : {tutar}</p>
                        <p className="card-text">Tarih : {tarih}</p>
                        </div> 
                     : null
                     
                }
                    
                    </div>    
              
            </div>
        )
    }
}
export default Musteriler;