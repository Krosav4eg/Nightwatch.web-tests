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

    'sort by #M up': function (browser) {
        browser
            .clickBySelectorXpath('//me-event-presentation-speaker-list//th[1][contains(text(),"#M")]')

            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)

            .useXpath()
            .verify.elementPresent('//tr[1]/td[1]/span/a[@href="/presentations/629/master-contact/95510"]');
    },

    'sort by #M down': function (browser) {
        browser
            .clickBySelectorXpath('//me-event-presentation-speaker-list//th[1][contains(text(),"#M")]')

            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)

            .useXpath()
            .verify.elementPresent('//tr[1]/td[1]/span/a[@href="/presentations/629/master-contact/95510"]');
    },
});