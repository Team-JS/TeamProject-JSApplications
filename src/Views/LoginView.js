/**
 * Created by ivan on 12/2/16.
 */
import React, { Component } from 'react';

export default class LoginView extends Component {
    render() {
        return (
            <div className="jumbotron">
                <form className="form-horizontal" onSubmit={this.submitForm.bind(this)}>
                    <h1>Login</h1>
                    <div className="form-group">
                        <label>
                            <div>Username:</div>
                            <input type="text" name="username" required
                                   ref={e => this.usernameField = e} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <div>Password:</div>
                            <input type="password" name="password" required
                                   ref={e => this.passwordField = e} />
                        </label>
                    </div>

                    <div>
                        <input className="btn btn-default" type="submit" value="Login" />
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
