import React, { Component } from 'react'

const UserContext = React.createContext()

//Provider, Consumer

export  class UserProvider extends Component {

    state = {
        users : [
         
        ]
      }

    render() {
        return (
            <UserContext.Provider value = {this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer

export default UserConsumer;