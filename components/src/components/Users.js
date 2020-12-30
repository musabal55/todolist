import React, { Component } from 'react'
import User from "./User.js"
import UserConsumer from "../components/Context"

 class Users extends Component {
    render() {
            //  const {id, name, salary, department} = this.props

        return(
            <UserConsumer>
                {
                    value => {
                        const {users} = value
                          return (
            <div>
                {
                    users.map(user =>{
                        return(
                            <User
                            key = {user.id}
                            id={user.id}
                            name = {user.name}
                            salary={user.salary}
                            department = {user.department}
                            />
                        )
                    })
                }
            </div>
        )

                    }
                }
            </UserConsumer>
        )


        
      
    }
}
export default Users;