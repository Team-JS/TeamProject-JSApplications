import React, { Component } from 'react';

export default class DeleteBookView extends Component {
    render() {
        return (
            <div className="jumbotron">
                <form className="form-horizontal" onSubmit={this.submitForm.bind(this)}>
                    <h1>Confirm Delete Book</h1>
                    <div className="form-group">
                        <label>
                            <div>Title</div>
                            <input className="form-control" type="text" name="title" disabled
                                   defaultValue={this.props.title} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <div>Author</div>
                            <input className="form-control" type="text" name="author" disabled
                                   defaultValue={this.props.author} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <div>Description</div>
                            <textarea className="form-control" name="description" rows="5" disabled
                                      defaultValue={this.props.description} />
                        </label>
                    </div>
                    <div className="form-group">
                        <input className="btn btn-danger" type="submit" value="Delete" />
                    </div>
                </form>
            </div>
        );
    }

    submitForm(event) {
        event.preventDefault();
        this.props.onsubmit(this.props.bookId);
    }
}

