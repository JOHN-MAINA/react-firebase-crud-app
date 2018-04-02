import React from 'react';
import http from "../mixins/http";
import toastr from '../mixins/toastr';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import '../css/editpost.css';

class EditPost extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            body: '',
            title: '',
            time: '',
            image:''
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange (e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        let updatedDate = {
            body: this.state.body,
            title: this.state.title,
            time: this.state.time,
            image: this.state.image
        };
        http.updateDocument('posts', updatedDate, this.state.id).then(docSnap => {
            toastr.displayToast('success', "Post was successfully edited");
        }).catch(error => {
            toastr.displayToast('error', "Failed to edit post at the moment");
        });
    }

    componentDidMount () {
        let $this = this;
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
                   editor.model.document.on( 'change', () => {
                      $this.setState({
                          body: editor.getData()
                      });
                   });
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
                        <input type="text" value={this.state.title} onChange={this.onChange} className="form-control" name="title" id="exampleFormControlInput1" placeholder="Title" />
                    </div>

                    <div className="form-group">
                        <label >Post Content</label>
                        <textarea id="editor" name="body" value={this.state.body} onChange={this.onChange}/>
                    </div>

                    <div className="row postFileContainer">
                        <div className="col-lg-6 col-sm-12 col-md-12">
                            <div className="form-group">
                                <label >Post Image</label>
                                <input type="file" name="image" className="form-control-file" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 col-md-12">
                            <img src={this.state.imageURL} alt={this.state.title} className=".img-fluid postImage rounded mx-auto d-block"/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>
        );
    }
}

export default EditPost;