/**
 * Created by ivan on 12/2/16.
 */
import React, {Component} from 'react';

export default class NavigationBar extends Component{
    render(){
        let username = this.props.username;
        if(username == null){
            return(
                <nav className="navbar navbar-default navbar-fixed-top ">
                    <div className="container">
                        <a href="#" className="btn btn-default navbar-btn" onClick={this.props.homeClicked}>Home</a>
                        <a href="#" className="btn btn-default navbar-btn" onClick={this.props.loginClicked}>Login</a>
                        <a href="#" className="btn btn-default navbar-btn" onClick={this.props.registerClicked}>Register</a>
                    </div>
                </nav>
            );
        } else {
            return(
                <nav className="container">
                    <a href="#" className="btn btn-default" onClick={this.props.homeClicked}>Home</a>
                    <a href="#" className="btn btn-default" onClick={this.props.booksClicked}>List Books</a>
                    <a href="#" className="btn btn-default" onClick={this.props.createBookClicked}>Create Book</a>
                    <a href="#" className="btn btn-default" onClick={this.props.recomendedBooksClicked}>Recomended Books</a>
                    <a href="#" className="btn btn-default" onClick={this.props.forSaleClicked}>Books for Sale</a>
                    <a href="#" className="btn btn-default" onClick={this.props.aboutUsClicked}>About Us</a>
                    <a href="#" className="btn btn-default" onClick={this.props.logoutClicked}>Logout</a>
                </nav>
            );
        }
    }
}