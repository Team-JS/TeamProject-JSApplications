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
                            <div>Title:</div>
                            <input type="text" name="title" required ref={e => this.titleField = e}/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <div>Author:</div>
                            <input type="text" name="author" required
                                   ref={e => this.authorField = e}/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <div>Description:</div>
                            <textarea name="description" rows="10"
                                      ref={e => this.descriptionField = e}/>
                        </label>
                    </div>
                    <div>
                        <input className="btn btn-default" type="submit" value="Create" />
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
        )
    }
}