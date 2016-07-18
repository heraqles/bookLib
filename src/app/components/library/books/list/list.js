var angular = require('angular');
var booksListComponent = require('./list.component.js');

var booksList = angular
    .module('app.book.list', [])
    .component('booksListComponent', booksListComponent);

module.exports = booksList;