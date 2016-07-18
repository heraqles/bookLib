categories.$inject = ['$resource', 'api'];

function categories ($resource, api) {
    var api = $resource(api.url + 'collections/categories/:id',
        {
            apiKey: api.apiKey,
            id: "@id"
        },
        {
            update: {
                method: 'PUT'
            }
        });

    var categoriesModel = {
        categories: [],

        fetch: function (callback) {
            callback(api.query());
        }
    };

    return categoriesModel;
}

module.exports = categories;