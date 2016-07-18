var angular = require('angular');

var api      = require('./const/api');
var services = require('./services/services');
var router   = require('./const/router');

var header   = require('./header/header');
var menu     = require('./menu/menu');
var list     = require('./list/list');
var sidebar  = require('./sidebar/sidebar');

var common = angular.module('app.common', [
    api.name,
    services.name,
    router.name,
    header.name,
    menu.name,
    list.name,
    sidebar.name
]);

module.exports = common;