import React from 'react';
import http from "../mixins/http";
import toastr from '../mixins/toastr';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class EditPost extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            body: '',
            title: '',
            time: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        console.log("Form was submitted");
    }

    componentDidMount () {
       http.getDocument('posts', this.props.match.params.id).then(postData => {
            this.setState({
                id: postData.id,
                title: postData.data().title,
                body: postData.data().body,
                time: postData.data().time,
                image: postData.data().image,
                imageURL: ''
            });
           ClassicEditor.create( document.querySelector( '#editor' ) )
               .then( editor => {

               } )
               .catch( error => {
                   toastr.displayToast('error', "There was an error initializing the text editor");
                   console.error( error );
               } );

            http.downloadImageURL(postData.data().image).then (imageURL => {
                this.setState({
                    imageURL: imageURL
                })
            }).catch(error => {
                console.log(error);
            })
       }).catch(error => {
           console.log(error);
       })

    }
    render () {
        return (
            <div>
                <h1>Edit post</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label >Title</label>
                        <input type="text" value={this.state.title} className="form-control" id="exampleFormControlInput1" placeholder="Title" />
                    </div>

                    <div className="form-group">
                        <label >Post Content</label>
                        <textarea id="editor" name="body" value={this.state.body} />
                    </div>

                    <div className="form-group">
                        <label >Post Image</label>
                        <input type="file" className="form-control-file" />
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
                <img src={this.state.imageURL} alt={this.state.title}/>
            </div>
        );
    }
}

export default EditPost;