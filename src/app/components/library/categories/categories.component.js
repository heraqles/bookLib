var template = require('./categories.html'),
    controller = require('./categories.controller');

var categories = {
    restrict: 'E',
    bindings: {
        book: '='
    },
    template: template,
    controller: controller,
    controllerAs: 'vm'
};

module.exports = categories;