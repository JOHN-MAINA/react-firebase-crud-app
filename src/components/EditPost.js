import React from 'react';
import CKEditor from "react-ckeditor-component";

let post = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

class EditPost extends React.Component{

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
                <h1>Edit post</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label >Title</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" />
                    </div>

                    <div className="form-group">
                        <label >Post Content</label>
                        <CKEditor content={post}/>
                    </div>

                    <div className="form-group">
                        <label >Post Image</label>
                        <input type="file" className="form-control-file" />
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>
        );
    }
}

export default EditPost;