var template = require('./authors.html'),
    controller = require('./authors.controller');

var authors = {
    restrict: 'E',
    bindings: {
        book: '='
    },
    template: template,
    controller: controller,
    controllerAs: 'vm'
};

module.exports = authors;