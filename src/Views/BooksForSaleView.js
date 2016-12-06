import React, { Component } from 'react';

export default class BooksForSaleView extends Component {
    render(){
        let bookRows = this.props.books.map(book =>
            <tr key={book._id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.description}</td>
                <td>{book.price}</td>
                {this.getActions(book, this.props.userId)}
            </tr>
        );

        return (
            <div className="panel panel-default">
                <div className="panel-heading">Books</div>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th className="col-lg-3 col-sm-2 col-xs-1">Title</th>
                            <th>Author</th>
                            <th className="col-lg-3 col-sm-2 col-xs-1">Description</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {bookRows}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
    getActions(book, userId){
        if(book._acl.creator === userId){
            return(
                <td>
                    <input className="btn btn-info" type="button" value="Details"
                           onClick={this.props.detailsBookClicked.bind(this, book._id)} />
                    &nbsp;
                    <input className="btn btn-warning" type="button" value="Edit"
                           onClick={this.props.editBookClicked.bind(this, book._id)} />
                    &nbsp;
                    <input className="btn btn-danger" type="button" value="Delete"
                           onClick={this.props.deleteBookClicked.bind(this, book._id)} />
                </td>
            );
        } else {
            return (
                <td>
                    <input className="btn btn-info" type="button" value="Details"
                           onClick={this.props.detailsBookClicked.bind(this, book._id)} />
                </td>
            );
        }
    }
}