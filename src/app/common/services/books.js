var books = function ($resource, api) {
    var api = $resource(api.url + 'collections/books/:id',
        {
            apiKey: api.apiKey,
            id: "@id"
        },
        {
            update: {
                method: 'PUT'
            }
        });
    return api;
    // var booksModel = {
    //     books: [],
    //
    //     getModel: function () {
    //         if (booksModel.books.length === 0) {
    //             booksModel.fetch(function (data) {
    //                 booksModel.books = data;
    //                 return booksModel.books;
    //             });
    //         } else {
    //             return booksModel.books;
    //         }
    //     },
    //     fetch: function (callback) {
    //         callback(api.query());
    //     },
    //
    //     get: function (id) {
    //         booksModel.book = api.get(id);
    //
    //     }
    //
    // };
    //
    // return booksModel;
};

books.$inject = ['$resource', 'api'];

module.exports = books;