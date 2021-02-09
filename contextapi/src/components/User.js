import React, { Component } from 'react';
import PropTypes from 'prop-types'
import UserConsumer from '../context'

class User extends Component {
    state = {
        isVisible: false
    }
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         isVisible: true
    //     }
    // }
    onClickEvent = (e) => {
        this.setState({ isVisible: !this.state.isVisible })
    }

    //Silinecek kaydın id' sini gönderiyoruz.
    onDeleteUser = (dispatch,e) => {
        const {id} = this.props
        // Consumer dispatch gelecek
        dispatch({type: "DELETE_USER", payload:id})
    }

    render() {

        const { name, department, salary } = this.props;
        const isVisible = this.state.isVisible
        return ( <UserConsumer>
{
    value => {
        const {dispatch} = value
        return (
            <div className="col-md-8 mb-4" >
                <div className="card" style ={isVisible ?{backgroundColor:"#62848d", color:"#F9F9F9"} : null}>
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="d-inline" onClick={this.onClickEvent}>{name}</h4> 
                                                                {/* Silme butonunun olayını yazıyoruz */}
                        <i onClick={this.onDeleteUser.bind(this,dispatch)} className="far fa-trash-alt" style={{ cursor: "pointer" }}></i>
                    </div>

                    {
                        isVisible ? <div className="card-body">
                            <p className="card-text">Maaş : {salary}</p>
                            <p className="card-text">Departman : {department}</p>
                        </div> : null
                    }

                </div>
            </div>
        );
    }
}

        </UserConsumer>
        )
    }
}
User.propTypes = {
    name: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    id : PropTypes.string.isRequired
}
User.defaultProps = {
    name: "Bilgi Yok",
    salary: "Bilgi Yok",
    department: "Bilgi Yok"
}

export default User;