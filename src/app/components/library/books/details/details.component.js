var template = require('./details.html'),
    controller = require('./details.controller');


var bookDetails = {
    restrict: 'E',
    bindings: {},
    template: template,
    controller: controller,
    controllerAs: 'vm'
};

module.exports = bookDetails;