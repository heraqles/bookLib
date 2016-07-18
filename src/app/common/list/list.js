var angular = require('angular');
var listComponent = require('./list.component');

var list = angular
    .module('app.list', [])
    .component('listComponent', listComponent);

module.exports = list;