authors.$inject = ['$resource', 'api'];

function authors ($resource, api) {
    var api = $resource(api.url + 'collections/authors/:id',
        {
            apiKey: api.apiKey,
            id: "@id"
        },
        {
            update: {
                method: 'PUT'
            }
        });

    var authorsModel = {
        authors: [],

        fetch: function (callback) {
            callback(api.query());
        }
    };

    return authorsModel;
}

module.exports = authors;