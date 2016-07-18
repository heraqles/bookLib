sidebarController.$inject = [];

function sidebarController () {
    var vm = this;

    vm.search = {};
    vm.orderBy = 'title';
    vm.maxListSize = 5;
    vm.currentPage = 0;
    vm.listStart = 0;

    vm.sort = sort;
    vm.getNumber = getNumber;
    vm.setCurrentPage = setCurrentPage;


// -------------------------------------------------------------------------- //

    function sort(bool) {
        vm.orderBy = bool;
    }

    function getNumber (number) {
        return new Array(number);
    }

    function setCurrentPage (page) {
        vm.currentPage = page;
        vm.listStart = page * vm.maxListSize;
    }
}


module.exports = sidebarController;