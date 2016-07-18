clientsController.$inject = ['CLIENTS'];

function clientsController (CLIENTS) {
    var vm = this;

    CLIENTS.fetch(function(data) {
        vm.clients = data;
    });
}


module.exports = clientsController;