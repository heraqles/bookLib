var template = require('./rents.html'),
    controller = require('./rents.controller');

var rents = {
    restrict: 'E',
    bindings: {
        book: '='
    },
    template: template,
    controller: controller,
    controllerAs: 'vm'
};

module.exports = rents;