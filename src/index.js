import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import ViewStudents from './components/ViewStudents';
import AddPost from './components/Addpost';
import ViewPosts from './components/ViewPosts';
import EditPost from './components/EditPost';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

ReactDOM.render(
    <BrowserRouter>
        <div >
            <Navbar/>
            <div className="container">
                <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
                    <Route exact path="/" component={ViewPosts}/>
                    <Route exact path="/add" component={AddPost}/>
                    <Route exact path="/edit/:id" component={EditPost}/>
                    <Route exact path="/students" component={ViewStudents}/>
                </div>
                </div>
            </div>

        </div>
    </BrowserRouter>,
    document.getElementById('root'));
