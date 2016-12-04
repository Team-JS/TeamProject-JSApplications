/**
 * Created by ivan on 12/2/16.
 */
import $ from 'jquery';

const KinveyRequests = (function () {
    const baseUrl = "https://baas.kinvey.com/";
    const appKey = "kid_Bk_RAl0Gl";
    const appSecret = "b5fdba40f89e4ca5a6ccf1187298b91a";
    const kinveyAppAuthHeaders = {
        'Authorization': "Basic " + btoa(appKey + ":" + appSecret),
    };
    function loginUser(username, password) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "user/" + appKey + "/login",
            headers: kinveyAppAuthHeaders,
            data: {username, password}
        });
    }
    function registerUser(username, password) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "user/" + appKey + "/",
            headers: kinveyAppAuthHeaders,
            data: { username, password }
        });
    }
    function getKinveyUserAuthHeaders() {
        return {
            'Authorization': "Kinvey " + sessionStorage.getItem('authToken'),
        };
    }
    function logoutUser() {
        return $.ajax({
            method: "POST",
            url: baseUrl + "user/" + appKey + "/_logout",
            headers: getKinveyUserAuthHeaders(),
        });
    }
    function findAllBooks() {
        return $.ajax({
            method: "GET",
            url: baseUrl + "appdata/" + appKey + "/books",
            headers: getKinveyUserAuthHeaders()
        });
    }
    function findBookById(bookId){
        return $.ajax({
            method: "GET",
            url: baseUrl + "appdata/" + appKey + "/books/" + bookId,
            headers: getKinveyUserAuthHeaders()
        });
    }
    function createBook(title, author, description) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "appdata/" + appKey + "/books",
            headers: getKinveyUserAuthHeaders(),
            data: { title, author, description }
        });
    }
    function listToSellBook(title, author, description, price) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "appdata/" + appKey + "/books",
            headers: getKinveyUserAuthHeaders(),
            data: {title, author, description, price}
        });
    }
    function editBook(bookId, title, author, description) {
        return $.ajax({
            method: "PUT",
            url: baseUrl + "appdata/" + appKey + "/books/" + bookId,
            headers: getKinveyUserAuthHeaders(),
            data: { title, author, description }
        })
    }
    function deleteBook(bookId) {
        return $.ajax({
            method: "DELETE",
            url: baseUrl + "appdata/" + appKey + "/books/" + bookId,
            headers: getKinveyUserAuthHeaders(),
        })
    }
    function aboutBook(bookId){
        return $.ajax({
            method: "GET",
            url: baseUrl + "appdata/" + appKey + "/books/" + bookId,
            headers: getKinveyUserAuthHeaders()
        });
    }
    return {
        deleteBook, loginUser, registerUser, logoutUser,
        findAllBooks, findBookById, createBook,
        editBook, listToSellBook, aboutBook
    }
})();
export default KinveyRequests;