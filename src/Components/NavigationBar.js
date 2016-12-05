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
                    <ul className="nav nav-pills">
                        <li className="active"><a href="#" onClick={this.props.homeClicked}><span className="glyphicon glyphicon-home"></span> Home</a></li>
                        <li><a href="#"  onClick={this.props.loginClicked}>Login</a></li>
                        <li><a href="#"  onClick={this.props.registerClicked}>Register</a></li>
                    </ul>
                </nav>
            );
        } else {
            return(
                <nav className="navbar">
                    <ul className="nav nav-pills">
                        <li className="active"><a href="#" onClick={this.props.homeClicked}><span className="glyphicon glyphicon-home"></span> Home</a></li>
                        <li><a href="#"onClick={this.props.booksClicked}>List Books</a></li>
                        <li><a href="#" onClick={this.props.createBookClicked}>Create Book</a></li>
                        <li><a href="#" onClick={this.props.sellBookClicked}>Sell Your Book</a></li>
                        <li><a href="#" onClick={this.props.forSaleClicked}>Books for Sale</a></li>
                        <li><a href="#" onClick={this.props.aboutUsClicked}>About Us</a></li>
                        <li><a href="#" onClick={this.props.logoutClicked}>Logout</a></li>
                    </ul>
                </nav>
            );
        }
    }
}