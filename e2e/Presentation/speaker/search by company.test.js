var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to presentations': function (browser) {
        browser
            .relUrl('/event/2008/presentations')
    },

    'go to the edit presentation': function (browser) {
        browser
            .clickBySelectorXpath('//a[@href="/presentations/edit/5721"]')

            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)

            .useXpath()
            .verify.elementPresent('//h1[text()="Edit Presentation (#5721)"]');

    },

    'search by company name ': function (browser) {
        browser
            .setValueByXpath('//me-event-presentation-speaker-list//tr[1]/td[3]/input[@type="text"]', ['Citibank', browser.Keys.ENTER])

            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)

            .useXpath()
            .verify.containsText('//tr[1]/td[3]/span','Citibank');
    }

  });