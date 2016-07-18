var angular = require('angular');
var rentComponent = require('./rent.component');

var rents    = require('./rents/rents');
var clients  = require('./clients/clients');

var rent = angular
    .module('app.rent', [
        rents.name,
        clients.name
    ])
    .component('rentComponent', rentComponent);

module.exports = rent;
