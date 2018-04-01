import React, { Component } from 'react';

import Navbar from './components/Navbar';
import ViewStudents from './components/ViewStudents';
import AddPost from './components/Addpost';
import ViewPosts from './components/ViewPosts';
import EditPost from './components/EditPost';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar/>
          <div className="container">
              <ViewStudents/>
              <hr/>
              <AddPost/>
              <hr/>
              <ViewPosts/>
              <hr/>
              <EditPost/>
          </div>
      </div>
    );
  }
}

export default App;
