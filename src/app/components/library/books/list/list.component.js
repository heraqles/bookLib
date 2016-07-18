var template = require('./list.html'),
    controller = require('./list.controller.js');


var list = {
    restrict: 'E',
    bindings: {
        book: '='
    },
    template: template,
    controller: controller,
    controllerAs: 'vm'
};

module.exports = list;