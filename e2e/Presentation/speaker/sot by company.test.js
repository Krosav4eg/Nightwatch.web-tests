var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to presentations': function (browser) {
        browser
            .relUrl('/event/212/presentations')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'go to the edit presentation': function (browser) {
        browser
            .clickBySelectorXpath('//a[@href="/presentations/edit/629"]')

            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)

            .useXpath()
            .verify.elementPresent('//h1[text()="Edit Presentation (#629)"]');
    },

    'sort by company up': function (browser) {
        browser
            .clickBySelectorXpath('//me-event-presentation-speaker-list//th[3]')

            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)

            .useXpath()
            .verify.containsText('//tr[1]/td[3]/span','RWE Group Business Services GmbH');
    },

    'sort by company down': function (browser) {
        browser
            .clickBySelectorXpath('//me-event-presentation-speaker-list//th[3]')

            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)

            .useXpath()
            .verify.containsText('//tr[1]/td[3]/span','RWE Group Business Services GmbH');
    },
});