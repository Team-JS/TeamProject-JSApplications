/**
 * Created by ivan on 12/2/16.
 */
import React, { Component } from 'react';

export default class SellYourBookView extends Component {
    render(){
        return (
            <div className="jumbotron">
                <form className="form-horizontal" onSubmit={this.submitForm.bind(this)}>
                    <h1>Sell You Book</h1>
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
                    <div className="form-group">
                        <label>
                            <div>Price:</div>
                            <input input type="number" step="0.01" pattern="\d+(\.\d{2})?" name="price" required
                                      ref={e => this.priceField = e}/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <div>Date Published:</div>
                            <input input type="date" name="date" required
                                   ref={e => this.dateField = e}/>
                        </label>
                    </div>
                    <div>
                        <input className="btn btn-default" type="submit" value="Sell" />
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
            this.priceField.value,
            this.dateField.value,
        )
    }
}
