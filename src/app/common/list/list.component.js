var template = require('./list.html'),
    controller = require('./list.controller');

var list = {
    restrict: 'E',
    bindings: {
        items: '=',
        nameKey: '<',
        view: '@',
        client: '<',
        date: '<'
    },
    template: template,
    controller: controller,
    controllerAs: 'vm'
};

module.exports = list;