var template = require('./header.html'),
    controller = require('./header.controller.js');

var header = {
    restrict: 'E',
    bindings: {
        book: '='
    },
    template: template,
    controller: controller,
    controllerAs: 'vm'
};

module.exports = header;