var angular = require('angular');
var authorsComponent = require('./authors.component');

var authors = angular
    .module('app.authors', [])
    .component('authorsComponent', authorsComponent);

module.exports = authors;