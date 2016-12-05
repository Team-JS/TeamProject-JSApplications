/**
 * Created by ivan on 12/5/16.
 */
import React, { Component } from 'react';

export default class DetailsBookView extends Component{
    render(){
        return(
            <div className="jumbotron">
                <h1>{this.props.title}</h1>
                <br/>
                <h2>By: {this.props.author}</h2>
                <br/>
                <img className="img-responsive img-rounded" src={this.props.url} role="presentation"/>
                <br/>
                <p>{this.props.description}</p>
                <p>{this.props.price}</p>

            </div>
        )
    }
}