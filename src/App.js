import React, {Component} from 'react';
import './App.css';
import Navbar from './Components/Layout/Navbar'
import UserItem from './Components/Users/UserItem'

class App extends Component {
  render(){
    return (
      <div>
        <Navbar />
        <UserItem />
      </div>
    );
  }
}

export default App;
