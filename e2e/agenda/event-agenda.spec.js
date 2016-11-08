var _ = require('lodash');
var boot = require('./../includes/boot.js');
var auth = require('./../includes/auth.js');

module.exports = _.assign(boot, auth, {
    '@tags': ['client'],

    'open agenda page': function (client) {
        client
            .relUrl('/event/2008/agenda')
            .assert.title('Skynet 2')
            .waitForElementPresent('me-event-info', 2000)
            .waitForElementPresent('me-event-agenda-element-block', 2000)
            .assert.elementsCountCompare('me-event-agenda-element-block', 3);
    },

    'open modal window - add container': function (client) {
        client
            .click('button')
            .waitForElementPresent('modal me-event-agenda-container-form', 2000);
    }
});
