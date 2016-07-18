listController.$inject = ['BOOKS'];
function listController (BOOKS) {
    var vm = this;

    // BOOKS.fetch(function(data) {
    //     vm.books = data;
    // });
    vm.books = BOOKS.query();
}


module.exports = listController;