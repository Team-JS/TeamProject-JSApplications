/**
 * Created by ivan on 12/2/16.
 */
import React, { Component } from 'react';

export default class CreateBookView extends Component {
    render(){
        return (
            <div className="jumbotron">
                <form className="form-horizontal" onSubmit={this.submitForm.bind(this)}>
                    <h1>Create Book</h1>
                    <div className="form-group">
                        <label>
                            <div>Title</div>
                            <input className="form-control" type="text" name="title" required ref={e => this.titleField = e}/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <div>Author</div>
                            <input className="form-control" type="text" name="author" required
                                   ref={e => this.authorField = e}/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <div>Description</div>
                            <textarea className="form-control" name="description" rows="10"
                                      ref={e => this.descriptionField = e}/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <div>Picture Url</div>
                            <input className="form-control" type="text" name="url" required
                                   ref={e => this.pictureUrlField = e}/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <div>Date Published</div>
                            <input className="form-control" type="date" name="date" required
                                   ref={e => this.dateField = e}/>
                        </label>
                    </div>
                    <div>
                        <input className="btn btn-info" type="submit" value="Create" />
                    </div>
                </form>
            </div>
        );
    }
    submitForm(event){
        event.preventDefault();
        this.props.onsubmit(
            this.titleField.value,
            this.authorField.value,
            this.descriptionField.value,
            this.pictureUrlField.value,
            this.dateField.value
        )
    }
}