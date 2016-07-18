var template = require('./menu.html'),
    controller = require('./menu.controller.js');

var menu = {
    restrict: 'E',
    bindings: {},
    template: template,
    controller: controller,
    controllerAs: 'vm'
};

module.exports = menu;