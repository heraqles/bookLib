var angular = require('angular');
var bookDetailsComponent = require('./details.component');

var bookDetails = angular
    .module('app.books.details', [])
    .component('bookDetailsComponent', bookDetailsComponent);

module.exports = bookDetails;