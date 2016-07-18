var angular = require('angular'),
    menuComponent = require('./menu.component.js');

var menu = angular
    .module('app.menu', [])
    .component('menuComponent', menuComponent);

module.exports = menu;
