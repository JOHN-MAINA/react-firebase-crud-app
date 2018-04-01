import React from 'react';
import CKEditor from "react-ckeditor-component";
import http from "../mixins/http";


class Addpost extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            imageName: '',
            time: '',
            imageData:'',
            type: '',
            contentType: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onCkChange = this.onCkChange.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
    }

    onSubmit(e) {
       e.preventDefault();
       this.setState({
           time: Date.now()
       });

      let imageData = {
          imageData: this.state.imageData,
          imageName: this.state.imageName,
          contentType: this.state.contentType,
          type: this.state.type
      };

       http.uploadImage(imageData).then(imageSnapShot => {
           let postDate = {
               title: this.state.title,
               body: this.state.body,
               image: this.state.imageName,
               time: this.state.time
           };
           http.add('posts', postDate).then((data) => {
               window.location.href='/';
           }).catch((error) => {
               console.log(error);
           })
       }).catch(error => {
           console.log(error);
       });

    }
    onCkChange (e) {
        this.setState({
            body: e.editor.getData(),
            time: new Date()

        })
    }
    onChange (e) {
        this.setState({
            [e.target.name]: e.target.value,
            time: new Date()
        });
    }

    onFileChange (e) {
        let file = e.target.files[0];
        let reader = new FileReader();
        let contentType = file.type;
        let type = contentType.split('/');
        let imageName = Date.now() + '.' + type[1];


        const $this = this;
        reader.addEventListener("load", function () {
            $this.setState((prevState) => {
                return {
                    imageName: imageName,
                    imageData: reader.result,
                    type: type[1],
                    contentType: contentType
                };
            });
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    }

    render () {
        return (
            <div>
                <h1>Add a new post</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label >Title</label>
                        <input type="text" name="title" value={this.state.title} onChange={this.onChange} className="form-control" id="exampleFormControlInput1" placeholder="Title" />
                    </div>

                    <div className="form-group">
                        <label >Post Content</label>
                        <CKEditor content={this.state.body}
                                  events={{
                                      "change": this.onCkChange
                                  }}/>
                    </div>

                    <div className="form-group">
                        <label >Post Image</label>
                        <input type="file" name="image" onChange={this.onFileChange} className="form-control-file" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <img src={this.state.image} alt="Post"/>
            </div>
        );
    }
}

export default Addpost;