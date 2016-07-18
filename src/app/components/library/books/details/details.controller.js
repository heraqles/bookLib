detailsController.$inject = ['BOOKS', '$stateParams'];
function detailsController (BOOKS, $stateParams) {
    var vm = this;

    vm.book = BOOKS.get({id: $stateParams.id});
    
}


module.exports = detailsController;