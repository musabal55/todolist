import React, { Component } from 'react';

const UserContext = React.createContext()

//Provider (sağlayıcı), Consumer (Tüketici)

export class UserProvider extends Component {
    state = {
        users: [
            {
                id:1, 
                name:"Mehmet", 
                salary:"5000",
                department:"BT"
            },
            {
                id:2, 
                name:"Murat", 
                salary:"8000",
                department:"MUH"
            }

        ]
    }
  render() {
    return (
      <UserContext.Provider value = {this.state}>
          {this.props.children}
      </UserContext.Provider>
    );
  }
}


const UserConsumer = UserContext.Consumer;
export default UserConsumer;