import React, { Component } from 'react';

import Navbar from './components/Navbar'
import ViewStudents from './components/ViewStudents'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar/>
          <div className="container">
              <ViewStudents/>
          </div>
      </div>
    );
  }
}

export default App;
