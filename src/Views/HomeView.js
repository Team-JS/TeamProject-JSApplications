/**
 * Created by ivan on 12/2/16.
 */
import React, { Component } from 'react';

export default class HomeView extends Component{
    render(){
        return(
            <div className="jumbotron">
                <h1>Welcome to the Home of the Book</h1>
                { this.props.username ?
                    <h2>Welcome, {this.props.username}.</h2> :
                    <p>Welcome to this book site.</p>

                }
                <p>This is the Prodacvachnica and book-listings home.
                Here you will find a collection of all your favorite programming books,
                to which you can add, edit, sell and delete. Make this your first stop of reference
                to your book collection.</p>
                <div>
                    <img src="src/images/bookPic.jpg" alt="" className="img-responsive"/>
                </div>
            </div>
        );
    }
}