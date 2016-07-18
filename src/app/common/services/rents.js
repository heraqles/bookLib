rents.$inject = ['$resource', 'api'];

function rents ($resource, api) {
    var api = $resource(api.url + 'collections/rents/:id',
        {
            apiKey: api.apiKey,
            id: "@id"
        },
        {
            update: {
                method: 'PUT'
            }
        });

    var rentsModel = {
        rents: [],

        fetch: function (callback) {
            callback(api.query());
        }
    };

    return rentsModel;
}

module.exports = rents;