import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import ViewStudents from './components/ViewStudents';
import AddPost from './components/Addpost';
import ViewPosts from './components/ViewPosts';
import EditPost from './components/EditPost';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
        <div >
            <Navbar/>
            <div className="container">
                <div className="col-8">
                    <Route exact path="/" component={ViewPosts}/>
                    <Route exact path="/add" component={AddPost}/>
                    <Route exact path="/edit" component={EditPost}/>
                    <Route exact path="/students" component={ViewStudents}/>
                </div>

            </div>

        </div>
    </BrowserRouter>,
    document.getElementById('root'));
