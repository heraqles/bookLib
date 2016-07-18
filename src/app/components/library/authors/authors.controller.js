authorsController.$inject = ['AUTHORS'];

function authorsController (AUTHORS) {
    var vm = this;

    AUTHORS.fetch(function(data) {
        vm.authors = data;
    });
}


module.exports = authorsController;