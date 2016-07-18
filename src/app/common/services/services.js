var angular = require('angular');

var authors     = require('./authors');
var books       = require('./books');
var categories  = require('./categories');
var clients     = require('./clients');
var rents     = require('./rents');

var services = angular
    .module('app.services', [])
    .service('AUTHORS', authors)
    .service('BOOKS', books)
    .service('CATEGORIES', categories)
    .service('CLIENTS', clients)
    .service('RENTS', rents);

module.exports = services;