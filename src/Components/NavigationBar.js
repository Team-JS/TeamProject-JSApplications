/**
 * Created by ivan on 12/2/16.
 */
import React, {Component} from 'react';

export default class NavigationBar extends Component{
    render(){
        let username = this.props.username;
        if(username == null){
            return(
                <nav className="navbar">
                    <div className="container">
                        <a href="#" className="btn btn-link" onClick={this.props.homeClicked}>Home</a>
                        <a href="#" className="btn btn-link" onClick={this.props.loginClicked}>Login</a>
                        <a href="#" className="btn btn-link" onClick={this.props.registerClicked}>Register</a>
                    </div>
                </nav>
            );
        } else {
            return(
                <nav className="navbar">
                    <a href="#" className="btn btn-link" onClick={this.props.homeClicked}>Home</a>
                    <a href="#" className="btn btn-link" onClick={this.props.booksClicked}>List Books</a>
                    <a href="#" className="btn btn-link" onClick={this.props.createBookClicked}>Create Book</a>
                    <a href="#" className="btn btn-link" onClick={this.props.recomendedBooksClicked}>Recommended Books</a>
                    <a href="#" className="btn btn-link" onClick={this.props.forSaleClicked}>Books for Sale</a>
                    <a href="#" className="btn btn-link" onClick={this.props.aboutUsClicked}>About Us</a>
                    <a href="#" className="btn btn-link" onClick={this.props.logoutClicked}>Logout</a>
                </nav>
            );
        }
    }
}