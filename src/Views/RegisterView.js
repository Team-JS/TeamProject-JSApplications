/**
 * Created by ivan on 12/2/16.
 */
import React, { Component } from 'react';

export default class RegisterView extends Component {
    render() {
        return (
            <div className="jumbotron">
                <form className="form-horizontal" onSubmit={this.submitForm.bind(this)}>
                    <h1>Register</h1>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Username:</label>
                            <div className="col-sm-10">
                                <input className="form-control" type="text" name="username" placeholder="Username" required
                                   ref={e => this.usernameField = e} />
                            </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Password:</label>
                        <div className="col-sm-10">
                            <input className="form-control" type="password" name="password" placeholder="Password" required
                                   ref={e => this.passwordField = e} />
                        </div>
                    </div>
                    <div className="col-sm-offset-2 col-sm-10">
                        <input className="btn btn-primary" type="submit" value="Register" />
                    </div>
                </form>
            </div>
        );
    }

    submitForm(event) {
        event.preventDefault();
        this.props.onsubmit(
            this.usernameField.value, this.passwordField.value);
    }
}
