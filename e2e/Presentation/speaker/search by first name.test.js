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

    'search by last name ': function (browser) {
        browser
            .setValueByXpath('//me-event-presentation-speaker-list//tr[1]/td[5]/input[@type="text"]', ['Holger', browser.Keys.ENTER])

            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)

            .useXpath()
            .verify.containsText('//tr[1]/td[5]/span', 'Holger');
    },

});