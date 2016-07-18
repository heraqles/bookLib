var angular = require('angular');

var api = {
    url: 'https://api.mlab.com/api/1/databases/booklib/',
    apiKey: 'xOfYMo5k118PjuVKTkerRn_Yqpv6BJuR'
};

module.exports = angular
    .module('app.api', [])
    .constant('api', api);