var _ = require('lodash');
var bootstrap = require('./includes/boot.js');
var auth = require('./../config/auth.js');

module.exports = _.assign(bootstrap, {
    '@tags': ['client', 'read-only'],

    'login': function (client) {
        client.auth(auth.login, auth.pass);
    }
});
