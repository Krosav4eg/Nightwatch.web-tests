var _ = require('lodash');
var bootstrap = require('./includes/boot.js');

module.exports = _.assign(bootstrap, {
    '@tags': ['client'],

    'open page': function (client) {
        client
            .relUrl('/')
            .assert.title('Skynet 2');
    }
});
