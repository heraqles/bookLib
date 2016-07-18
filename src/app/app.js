/**
 * Created by heraqles on 08.07.16.
 */

var angular  = require('angular'),
    uiRouter = require('angular-ui-router'),
    resource = require('angular-resource');

var appComponent = require('./app.component'),
    components   = require('./components/components'),
    common       = require('./common/common');

require('./../assets/sass/main.scss');

angular
    .module('app', [
        uiRouter,
        resource,
        components.name,
        common.name
    ])
    .config(config)
    .component('app', appComponent);

// ----------------------------------------------------------------------- //
config.$inject = ['$locationProvider'];
function config ($locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
}