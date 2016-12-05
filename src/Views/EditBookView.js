/**
 * Created by ivan on 12/3/16.
 */
import React, { Component } from 'react';

export default class EditBookView extends Component {
    render() {
        return (
            <div className="jumbotron">
                <form className="form-horizontal" onSubmit={this.submitForm.bind(this)}>
                    <h1>Edit Book</h1>
                    <div className="form-group">
                        <label>
                            <div>Title</div>
                            <input className="form-control" type="text" name="title"  id="inputTitle" required
                                   defaultValue={this.props.title}
                                   ref={e => this.titleField = e} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <div>Author</div>
                            <input className="form-control" type="text" name="author" id="inputAuthor" required
                                   defaultValue={this.props.author}
                                   ref={e => this.authorField = e} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <div>Description</div>
                            <textarea className="form-control" name="description" rows="10" id="inputDescr"
                                      defaultValue={this.props.description}
                                      ref={e => this.descriptionField = e} />
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
                        <input className="btn btn-warning" type="submit" value="Edit" />
                    </div>
                </form>
            </div>

        );
    }

    submitForm(event) {
        event.preventDefault();
        this.props.onsubmit(
            this.props.bookId,
            this.titleField.value,
            this.authorField.value,
            this.descriptionField.value,
            this.pictureUrlField.value,
        );
    }
}
