auth = require('./../../config/auth.js');

module.exports = {
    'auth': function (client) {
        client.auth(auth.login, auth.pass)
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .waitForElementVisible('div#page-heading', 30000)
            .assert.containsText('div#page-heading', 'Dashboard');
    },
};