import React, { Component } from 'react';
import User from "./components/User.js"
import './App.css';
import Urun from "./components/Urun.js"
import Navbar from "./components/Navbar.js"
import Musteriler from "./components/Musteriler.js"


function App() {
  //const test =55
  //let isAuth = false
  return (
    <div>
      <h2 className="container"> App Component</h2>
      <User/>
      <Urun/>  
      <Navbar title="User APP"/>

      <Musteriler 
      name="Oğuz"
      tutar="3500"
      tarih="01.01.2020"
      />
      <Musteriler 
      name="Ahmet"
      tutar="4500"
      tarih="01.01.2019"
      />
      <Musteriler 
      name="Ali"
      tutar="14500"
      tarih="01.01.2018"
      />

    </div>
     );
}

export default App;
