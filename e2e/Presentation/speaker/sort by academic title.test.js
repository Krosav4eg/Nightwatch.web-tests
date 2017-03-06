var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to presentations': function (browser) {
        browser
            .relUrl('/event/212/presentations')
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'go to the edit presentation': function (browser) {
        browser
            .clickBySelectorXpath('//a[@href="/presentations/edit/628"]')

            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'sort by academic title up': function (browser) {
        browser
            .clickBySelectorXpath('//me-event-presentation-speaker-list//th[6][contains(text(),"Academic Title")]')
            .useXpath()
            .verify.containsText('(//tr/td[6]/span)', '')
    },

    'sort by academic title down': function (browser) {
        browser
            .verify.elementPresent('//me-event-presentation-speaker-list//th[6][contains(text(),"Academic Title")]')
            .clickBySelectorXpath('//me-event-presentation-speaker-list//th[6][contains(text(),"Academic Title")]')
            .useXpath()
            .verify.containsText('(//tr/td[6]/span)', '')
    },
});