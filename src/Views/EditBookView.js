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
                        <label for="inputTitle">Title</label>
                            <input type="text" name="title" className="form-control" id="inputTitle" required
                                   defaultValue={this.props.title}
                                   ref={e => this.titleField = e} />
                    </div>
                    <div className="form-group">
                        <label for="inputAuthor">Author</label>
                            <input type="text" name="author" className="form-control" id="inputAuthor" required
                                   defaultValue={this.props.author}
                                   ref={e => this.authorField = e} />
                    </div>
                    <div className="form-group">
                        <label for="inputDescr">Description</label>
                            <textarea name="description" rows="10" className="form-control" id="inputDescr"
                                      defaultValue={this.props.description}
                                      ref={e => this.descriptionField = e} />
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
        );
    }
}
