var angular = require('angular');
var sidebarComponent = require('./sidebar.component');

var sidebar = angular
    .module('app.sidebar', [])
    .component('sidebarComponent', sidebarComponent);

module.exports = sidebar;