var angular = require('angular');

AppRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

function AppRoutes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/library/books');

    $stateProvider
        .state('app', {
            url: '',
            redirectTo: 'app.library.books',
            views: {
                'menu': {
                    template: '<menu-component></menu-component>'
                },
                'header': {
                    template: '<header-component></header-component>'
                }
            }
        })
        .state('app.library', {
            url: '/library',
            redirectTo: 'app.library.books',
            views: {
                'section@': {
                    template: '<library-component></library-component>'
                }
            }
        })
        .state('app.library.books', {
            url: '/books',
            views: {
                'content': {
                    template: '<books-list-component></books-list-component>'
                }
            }
        })
        .state('app.library.details', {
            url: '/books/details/:id',
            views: {
                'content': {
                    template: '<book-details-component></book-details-component>'
                }
            }
        })
        .state('app.library.add', {
            url: '/books/add',
            views: {
                'content': {
                    template: '<book-add-component></book-add-component>'
                }
            }
        })
        .state('app.library.authors', {
            url: '/authors',
            views: {
                'content': {
                    template: '<authors-component></authors-component>'
                }
            }
        })
        .state('app.library.categories', {
            url: '/categories',
            views: {
                'content': {
                    template: '<categories-component></categories-component>'
                }
            }
        })
        .state('app.rent', {
            url: '/rent',
            redirectTo: 'app.rent.rents',
            views: {
                'section@': {
                    template: '<rent-component></rent-component>'
                }
            }
        })
        .state('app.rent.rents', {
            url: '/rents',
            views: {
                'content': {
                    template: '<rents-component></rents-component>'
                }
            }
        })
        .state('app.rent.clients', {
            url: '/clients',
            views: {
                'content': {
                    template: '<clients-component></clients-component>'
                }
            }
        });
}

run.$inject = ['$rootScope', '$state'];

function run($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function(evt, to, params) {
        if (to.redirectTo) {
            evt.preventDefault();
            $state.go(to.redirectTo, params, {location: 'replace'});
        }
    });
}

var routes = angular
    .module('myApp.routes', [])
    .run(run)
    .config(AppRoutes);

module.exports = routes;