var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to presentations': function (browser) {
        browser
            .relUrl('/event/212/presentations')
    },

    'go to the edit presentation': function (browser) {
        browser
            .clickBySelectorXpath('//a[@href="/presentations/edit/629"]')

            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)

            .useXpath()
            .verify.elementPresent('//h1[text()="Edit Presentation (#629)"]');
    },

    'sort by title up': function (browser) {
        browser
            .clickBySelectorXpath('//me-event-presentation-speaker-list//th[7]')

            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)

            .useXpath()
            .verify.containsText('//tr[1]/td[7]/span','Senior Consultant & Analyst, Center of Expertise "Internal Reporting"');
    },

    'sort by title down': function (browser) {
        browser
            .clickBySelectorXpath('//me-event-presentation-speaker-list//th[7]')

            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)

            .useXpath()
            .verify.containsText('//tr[1]/td[7]/span','Senior Consultant & Analyst, Center of Expertise "Internal Reporting"');
    },
});