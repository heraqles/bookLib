var template = require('./sidebar.html'),
    controller = require('./sidebar.controller');

var sidebar = {
    restrict: 'E',
    bindings: {
        items: '='
    },
    template: template,
    controller: controller,
    controllerAs: 'vm'
};

module.exports = sidebar;