var angular = require('angular');
var rentsComponent = require('./rents.component');

var rents = angular
    .module('app.rents', [])
    .component('rentsComponent', rentsComponent);

module.exports = rents;