var angular = require('angular');
var bookAddComponent = require('./add.component');

var bookAdd = angular
    .module('app.books.add', [])
    .component('bookAddComponent', bookAddComponent);

module.exports = bookAdd;