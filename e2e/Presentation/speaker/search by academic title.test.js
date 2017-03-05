var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to presentations': function (browser) {
        browser
            .relUrl('/event/2008/presentations')
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'go to the edit presentation': function (browser) {
        browser
            .clickBySelectorXpath('//a[@href="/presentations/edit/5721"]')

            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)

            .useXpath()
            .verify.elementPresent('//h1[text()="Edit Presentation (#5721)"]');

    },

    'search by academic title name ': function (browser) {
        browser
            .setValueByXpath('//me-event-presentation-speaker-list//tr[1]/td[6]/input[@type="text"]', ['Academic ', browser.Keys.ENTER])

            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)

            .useXpath()
            .verify.elementNotPresent('//tr[1]/td[6]/span[contains(text(),"")]');
    },

});