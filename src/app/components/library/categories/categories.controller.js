categoriesController.$inject = ['CATEGORIES'];

function categoriesController (CATEGORIES) {
    var vm = this;

    CATEGORIES.fetch(function(data) {
        vm.categories = data;
    });
}


module.exports = categoriesController;