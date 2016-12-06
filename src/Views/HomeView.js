/**
 * Created by ivan on 12/2/16.
 */
import React, { Component } from 'react';

export default class HomeView extends Component{
    render(){
        return(
            <div className="jumbotron">
                <h1>Welcome Home</h1>
                { this.props.username ?
                    <p>Welcome, {this.props.username}.</p> :
                    <p>Welcome to this book site.</p>

                }
                <p>This is the Prodacvachnica and book-listings home.
                For any questions and concerns please login or register.</p>
                <div className="img-responsive">
                    <img href="../images/bookPic.jpg" alt=""/>
                </div>

            </div>
        );
    }
}