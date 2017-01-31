var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/representatives')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'press when partner wasnt choosen': function (browser) {
        browser
            .clickBySelectorXpath('//a[text()="Send email"]')

            .waitForElementVisible('//div[@class="toast-content"]', 10000)
            .verify.containsText('//div[@class="toast-title"]', 'Info!')
            .verify.containsText('//div[@class="toast-message"]', 'You need chose Partner first')
            .clickBySelectorXpath('//div[@class="toast-content"]')
    },

    'press when one partner was choosen': function (browser) {
        browser
            .clickBySelectorXpath('(//input[@type="checkbox"])[2]')
            .clickBySelectorXpath('//a[text()="Send email"]')
    },

    'press when all partner was choosen': function (browser) {
        browser
            .clickBySelectorXpath('(//input[@type="checkbox"])[1]')
            .clickBySelectorXpath('//a[text()="Send email"]')
    },
});
