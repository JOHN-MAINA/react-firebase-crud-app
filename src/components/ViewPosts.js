import React from 'react';
import {Link} from 'react-router-dom';
import http from '../mixins/http';
import confirm from '../mixins/confirmAlert';
import moment from 'moment'

import 'react-confirm-alert/src/react-confirm-alert.css';

let responsiveImageStyles = {
    height: 'auto',
    width: '100%'
};

let btn = {
    margin: '10px'
};

class ViewPosts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
        this.deletePost = this.deletePost.bind(this);
        this.postDelete = this.postDelete.bind(this);
    }

    deletePost () {
        confirm("Confirm to delete post", "Are you sure you want to delete this post?", this.postDelete());
    }

    postDelete () {
        console.log("Deleting post");
    }

    fetchImageURL (imageName, id) {
        return new Promise((resolve, reject) => {
            http.downloadImageURL(imageName).then(url => {
                    resolve(url)
                },
                error => {
                    reject(error)
                })
        })

    }

    componentDidMount() {
        const $this = this;
        http.get('posts').then((doc) => {
            doc.forEach((post) => {
                this.fetchImageURL(post.data().image, post.id).then(url => {
                    let data = {
                        "id": post.id,
                        "title": post.data().title,
                        "body": post.data().body,
                        "time": post.data().time,
                        "image": url
                    };

                    $this.setState(prevStatus => ({
                        posts: [...prevStatus.posts, data]
                    }))
                }).catch(error => console.log(error));

            });

        }).catch((error) => {
            console.log(error);
        })
    }

    formatDate(date) {
        let newDate = moment(date);
        return moment(newDate).fromNow();
    }

    render(){

        console.log(this.state.posts);

        let posts = this.state.posts.map((post) => {

            return(
                <div className="postContainer" key={post.id}>
                    <div className="card-header">
                        <h3>
                            {post.title}
                            <small className="text-muted float-right">{ this.formatDate(post.time) }</small>
                        </h3>
                    </div>
                    { post.image !== '' &&
                    <img src={post.image} id={post.id} className="img-fluid" style={responsiveImageStyles} alt="Responsive"/>
                    }

                    <div className="body" dangerouslySetInnerHTML={{__html: post.body}}>

                    </div>

                    <div>
                        <Link to='/edit' className="btn-outline-primary btn" style={btn}>Edit</Link>
                        <button onClick={this.deletePost}className="btn btn-outline-danger" style={btn}>Delete</button>
                    </div>
                    <hr/>
                </div>
                )});
        return (
            <div>
                <h1>Latest posts</h1>

                {posts}
            </div>
        );
    }
}

export default ViewPosts;