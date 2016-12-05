import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavigationBar from './Components/NavigationBar';
import HomeView from "./Views/HomeView";
import LoginView from './Views/LoginView';
import RegisterView from './Views/RegisterView';
import BooksView from './Views/BooksView';
import CreateBookView from './Views/CreateBookView';
import EditBookView from './Views/EditBookView';
import DeleteBookView from './Views/DeleteBookView';
import SellYourBookView from './Views/SellYourBookView';
import BooksForSaleView from './Views/BooksForSaleView';
import AboutUsView from './Views/AboutUsView';
import DetailsBookView from './Views/DetailsBookView';


import KinveyRequests from './KinveyRequests';
import $ from 'jquery';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: sessionStorage.getItem("username"),
            userId: sessionStorage.getItem("userId")
        };
    }
  render() {
    return (
      <div className="container">
          <header>
              <NavigationBar
                  username={this.state.username}
                  homeClicked={this.showHomeView.bind(this)}
                  loginClicked={this.showLoginView.bind(this)}
                  registerClicked={this.showRegisterView.bind(this)}
                  logoutClicked={this.logout.bind(this)}
                  createBookClicked={this.showCreateBookView.bind(this)}
                  booksClicked={this.showBooksView.bind(this)}
                  sellBookClicked={this.showSellBooksView.bind(this)}
                  forSaleClicked={this.showBooksForSaleView.bind(this)}
                  aboutUsClicked={this.showAboutUsView.bind(this)}
              />
              <div id="loadingBox" className="alert alert-success">Loading ...</div>
              <div id="infoBox" className="alert alert-info">Info</div>
              <div id="errorBox" className="alert alert-danger">Error</div>
          </header>
          <main id="main"></main>
      </div>
    );
  }
  componentDidMount(){
        $(document).on({
            ajaxStart: function () { $('#loadingBox').show()},
            ajaxStop: function () { $('#loadingBox').hide()}
        });
        $(document).ajaxError(this.handleAjaxError.bind(this));
        $('#infoBox, #errorBox').click(function () {
            $(this).fadeOut();
        });
        this.showHomeView();
  }
  handleAjaxError(event, response){
      let errorMsg = JSON.stringify(response);
      if(response.readyState === 0){
          errorMsg = "There is a network error.";
      }
      if(response.responseJSON && response.responseJSON.description){
          errorMsg = response.responseJSON.description;
      }
      this.showError(errorMsg);
  }
  showInfo(message){
        $('#infoBox').text(message).show();
        setTimeout(function () {
            $('#infoBox').fadeOut();
        },2000);
  }
  showError(errorMsg){
      $('#errorBox').text("Error: " + errorMsg).show();
      setTimeout(function () {
          $('#errorBox').fadeOut()
      },2000)
  }
  showView(reactViewComponent){
        ReactDOM.render(reactViewComponent,
            document.getElementById('main'));
        $('#errorBox').hide();
  }

  showHomeView(){
        this.showView(<HomeView username={this.state.username} />);
  }
  showLoginView(){
      this.showView(<LoginView onsubmit={this.login.bind(this)} />);
  }
  showRegisterView(){
      this.showView(<RegisterView onsubmit={this.register.bind(this)} />);
  }
  showBooksView(){
      KinveyRequests.findAllBooks()
          .then(loadBooksSuccess.bind(this));

      function loadBooksSuccess(books) {
          this.showInfo("Books loaded.");
          this.showView(
              <BooksView
                  books={books}
                  userId={this.state.userId}
                  editBookClicked={this.booksForEdit.bind(this)}
                  deleteBookClicked={this.confirmBookDelete.bind(this)}
                  detailsBookClicked={this.detailsBook.bind(this)}
              />
          );
      }
  }
  showBooksForSaleView(){
      //TODO:...
      KinveyRequests.findAllBooks()
          .then(loadBooksForSaleSuccess.bind(this));
      function loadBooksForSaleSuccess(books) {
          if(this.books.price === null) {
              this.showInfo("Books For Sale loaded.");
              this.showView(
                  <BooksForSaleView
                      books={books}
                      userId={this.state.userId}

                  />
              )
          } else {
              this.showInfo("No books for sale.")
          }
      }
  }
  showCreateBookView(){
      this.showView(<CreateBookView onsubmit={this.createBook.bind(this)} />)
  }
  showSellBooksView(){
      this.showView(<SellYourBookView onsubmit={this.sellBook.bind(this)} />)
  }
  showAboutUsView(){
        this.showView(<AboutUsView />);
    }

  detailsBook(bookId){
      KinveyRequests.findBookById(bookId)
          .then(loadDetailsBookSuccess.bind(this));
      function loadDetailsBookSuccess(bookInfo) {
          this.showView(
              <DetailsBookView
                  bookId={bookInfo._id}
                  title={bookInfo.title}
                  author={bookInfo.author}
                  description={bookInfo.description}
                  url={bookInfo.url}
                  price={bookInfo.price}
              />
          )
      }
  }
  booksForEdit(bookId){
      KinveyRequests.findBookById(bookId)
          .then(loadBookForEditSuccess.bind(this));
      function loadBookForEditSuccess(bookInfo) {
          this.showView(
              <EditBookView
                  onsubmit={this.editBook.bind(this)}
                  bookId={bookInfo._id}
                  title={bookInfo.title}
                  author={bookInfo.author}
                  description={bookInfo.description}
              />
          );
      }
  }
  editBook(bookId, title, author, description, url){
      KinveyRequests.editBook(bookId, title, author, description, url)
          .then(editBookSuccess.bind(this));
      function editBookSuccess() {
          this.showBooksView();
          this.showInfo("Book created.");
      }
  }
  confirmBookDelete(bookId) {
        KinveyRequests.findBookById(bookId)
            .then(loadBookForDeleteSuccess.bind(this));

        function loadBookForDeleteSuccess(bookInfo) {
            this.showView(
                <DeleteBookView
                    onsubmit={this.deleteBook.bind(this)}
                    bookId={bookInfo._id}
                    title={bookInfo.title}
                    author={bookInfo.author}
                    description={bookInfo.description}
                />
            );
        }
    }
  deleteBook(bookId) {
        KinveyRequests.deleteBook(bookId)
            .then(deleteBookSuccess.bind(this));

        function deleteBookSuccess() {
            this.showBooksView();
            this.showInfo("Book deleted.");
        }
    }


  login(username, password){
      KinveyRequests.loginUser(username, password)
          .then(loginSuccess.bind(this));
      function loginSuccess(userInfo) {
          this.saveAuthInSession(userInfo);
          this.showBooksView();
          this.showInfo("Login successful.");
      }
  }
  logout(){
      KinveyRequests.logoutUser();
      sessionStorage.clear();
      this.setState({username: null, userId: null});
      this.showHomeView();
      this.showInfo('Logout successful.');
  }
  register(username, password){
      KinveyRequests.registerUser(username, password)
          .then(registerSuccess.bind(this));
      function registerSuccess(userInfo) {
          this.saveAuthInSession(userInfo);
          this.showHomeView();
          this.showInfo("User registration successful.");
      }
  }
  createBook(title, author, description, url){
      KinveyRequests.createBook(title, author, description, url)
          .then(createBookSuccess.bind(this));
      function createBookSuccess() {
          this.showBooksView();
          this.showInfo("Book created.")
      }
  }
  sellBook(title, author, description, price, date, url){
      KinveyRequests.listToSellBook(title, author, description, price, date, url)
          .then(listToSellSuccess.bind(this));
      function listToSellSuccess() {
          this.showBooksView();
          this.showInfo("Book listed for sale.")
      }
  }
  saveAuthInSession(userInfo){
      sessionStorage.setItem('authToken', userInfo._kmd.authtoken);
      sessionStorage.setItem('userId', userInfo._id);
      sessionStorage.setItem('username', userInfo.username);

      this.setState({
          username: userInfo.username,
          userId: userInfo._id
      })
  }
}

