import React, {Component} from 'react';
import './App.css';
import Navbar from './Components/Layout/Navbar'
import Users from './Components/Users/Users'

class App extends Component {
  render(){
    return (
      <div>
        <Navbar />
        <div className='container'>
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
