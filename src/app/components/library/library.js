var angular = require('angular');
var libraryComponent = require('./library.component');

var authors = require('./authors/authors');
var books = require('./books/books');
var categories = require('./categories/categories');

var library = angular
    .module('app.library', [
        authors.name,
        books.name
    ])
    .component('libraryComponent', libraryComponent);

module.exports = library;
