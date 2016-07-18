var angular = require('angular'),
    headerComponent = require('./header.component.js');

var header = angular
    .module('app.header', [])
    .component('headerComponent', headerComponent);

module.exports = header;
