rentsController.$inject = ['RENTS'];

function rentsController (RENTS) {
    var vm = this;

    RENTS.fetch(function(data) {
        vm.rents = data;
    });
}


module.exports = rentsController;