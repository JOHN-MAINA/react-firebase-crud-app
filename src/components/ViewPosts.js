import React from 'react';
import dummy1 from '../images/dummy1.jpeg';

let responsiveImageStyles = {
    height: 'auto',
    width: '100%'
};

let btn = {
    margin: '10px'
};

class ViewPosts extends React.Component {

    render(){
        return (
            <div>
                <h1>Latest posts</h1>

                <div className="postContainer">
                    <div className="card-header">
                        <h3>
                            Title
                            <span className="text-muted">posted 2 days ago</span>
                        </h3>
                    </div>

                    <img src={dummy1} className="img-fluid" style={responsiveImageStyles} alt="Responsive"/>
                    <div className="body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and more recently with
                        desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>

                    <div>
                        <button className="btn-outline-primary btn" style={btn}>Edit</button>
                        <button className="btn btn-outline-danger" style={btn}>Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewPosts;