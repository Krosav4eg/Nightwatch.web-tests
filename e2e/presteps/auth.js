auth = require('./../../config/auth.js');

module.exports = {
    'auth': function (client) {
        client.auth(auth.login, auth.pass)
            .waitForElementVisible('#thisIsMainLoader', 10000)
            .waitForElementNotVisible('#thisIsMainLoader', 10000)
            .waitForElementVisible('div#page-heading', 10000)
            .assert.containsText('div#page-heading', 'Dashboard');
    },
};