clients.$inject = ['$resource', 'api'];

function clients ($resource, api) {
    var api = $resource(api.url + 'collections/clients/:id',
        {
            apiKey: api.apiKey,
            id: "@id"
        },
        {
            update: {
                method: 'PUT'
            }
        });

    var clientsModel = {
        clients: [],

        fetch: function (callback) {
            callback(api.query());
        }
    };

    return clientsModel;
}

module.exports = clients;