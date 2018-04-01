import React from 'react';
import CKEditor from "react-ckeditor-component";


class Addpost extends React.Component{

    constructor(props) {
        super(props);

    this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
       e.preventDefault();
       console.log("Form was submitted");
    }

    componentWillMount () {

    }
    render () {
        return (
            <div>
                <h1>Add a new post</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label >Title</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" />
                    </div>

                    <div className="form-group">
                        <label >Post Content</label>
                        <CKEditor />
                    </div>

                    <div className="form-group">
                        <label >Post Image</label>
                        <input type="file" className="form-control-file" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Addpost;