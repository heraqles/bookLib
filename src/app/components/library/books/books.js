/**
 * Created by heraqles on 18.07.16.
 */
var angular = require('angular');


var bookList        = require('./list/list');
var bookDetails     = require('./details/details');
var bookAdd     = require('./add/add');

var books = angular.module('app.books', [
    bookList.name,
    bookDetails.name,
    bookAdd.name
]);

module.exports = books;