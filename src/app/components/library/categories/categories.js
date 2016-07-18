var angular = require('angular');
var categoriesComponent = require('./categories.component');

var categories = angular
    .module('app.categories', [])
    .component('categoriesComponent', categoriesComponent);

module.exports = categories;