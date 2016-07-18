var angular = require('angular');

var library = require('./library/library');
var rent    = require('./rent/rent');

var components = angular
    .module('app.components', [
        library.name,
        rent.name
    ]);

module.exports = components;