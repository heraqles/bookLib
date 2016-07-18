var angular = require('angular');
var clientsComponent = require('./clients.component');

var clients = angular
    .module('app.clients', [])
    .component('clientsComponent', clientsComponent);

module.exports = clients;