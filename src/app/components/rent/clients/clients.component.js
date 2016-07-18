var template = require('./clients.html'),
    controller = require('./clients.controller');

var clients = {
    restrict: 'E',
    bindings: {
        book: '='
    },
    template: template,
    controller: controller,
    controllerAs: 'vm'
};

module.exports = clients;