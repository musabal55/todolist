import React, { Component } from 'react'

const UserContext =React.createContext()

// Provider:Sağlayıcı, Consumer: Kullanıcı  
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter(user => action.payload !== user.id)
      }

      case "ADD_USER":
        return {
          ...state,
          users: [...state.users, action.payload]
        }
      default:
        return state
  }
}

export class UserProvider extends Component {

    state = {
        users: [
          { id: "1a", name: "Musa", salary: "9000", department: "BT" },
          { id: "2a", name: "Burak", salary: "5000", department: "ARGE" },
          { id: "3a", name: "Talha", salary: "6000", department: "İŞLETME" },
          { id: "4a", name: "Mehmet", salary: "5000", department: "MUHASEBE" },
          { id: "5a", name: "Ramazan", salary: "8000", department: "FİNANS" }
        ], 
        dispatch: action => {
          this.setState(state => reducer(state, action))
        }
      }

    render() {
        return (
          <UserContext.Provider value = {this.state}>
              {this.props.children}
          </UserContext.Provider>
        )
    }
}

const UserConsumer=UserContext.Consumer;

export default UserConsumer;
