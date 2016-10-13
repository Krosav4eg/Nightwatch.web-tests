var _ = require('lodash');
var boot = require('./includes/boot.js');
var auth = require('./../config/auth.js');

module.exports = _.assign(boot, {
    '@tags': ['client', 'read-only'],

    'open page login': function (client) {
        client
            .relUrl('/')
            .assert.title('Skynet 2');
    },

    'check login form': function (client) {
        client
            .assert.elementsCountCompare('input[name="username"]', 1)
            .assert.elementsCountCompare('input[type="password"]', 1)
            .assert.elementsCountCompare('button[type="submit"]', 1);
    }
});
