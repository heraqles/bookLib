var template = require('./add.html'),
    controller = require('./add.controller');


var bookAdd = {
    restrict: 'E',
    bindings: {},
    template: template,
    controller: controller,
    controllerAs: 'vm'
};

module.exports = bookAdd;