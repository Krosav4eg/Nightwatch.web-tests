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

    'master Contact Information': function (browser) {
        browser
            .clickBySelectorXpath('//a[@href="/representatives/edit/50730"]')

            .verify.containsText('//*[contains(text(), "Master Contact ID")]/../div/span', '11046')
            .verify.containsText('//*[contains(text(), "Last Name")]/../div/span', 'Käkelä')
            .verify.containsText('//*[contains(text(), "First Name")]/../div/span', 'Ville')
            .verify.containsText('//*[contains(text(), "Company")]/../div/span', 'Management Events')
            .verify.containsText('//*[contains(text(), "ME Account")]/../div/span', 'No')
            .verify.containsText('//*[contains(text(), "Mobile")]/../div/span', '358405657227')
            .verify.containsText('//*[contains(text(), "Country")]/../div/span', 'Finland')
            .verify.containsText('//*[contains(text(), "Language")]/../div/span', 'Finnish');
    },

    'participation Information': function (browser) {
        browser
            .clickBySelectorXpath('//option[contains(text(), "Cancelled")]')
            .clickBySelectorXpath('//option[contains(text(), "Confirmed Rebook")]')
            .clickBySelectorXpath('//option[contains(text(), "Late cancellation")]')
            .clickBySelectorXpath('//option[contains(text(), "No show")]')
            //.clickBySelectorXpath('//option[contains(text(), "Prospect")]')
            .clickBySelectorXpath('//option[contains(text(), "Unconfirmed")]')
            .clickBySelectorXpath('//option[contains(text(), "Unconfirmed Rebook")]')
            .clickBySelectorXpath('//option[contains(text(), "Confirmed")]')

            .clickBySelectorXpath('//option[contains(text(), "Group 2 - violet")]')
            .clickBySelectorXpath('//option[contains(text(), "Group 1 - orange")]')
            .clickBySelectorXpath('//option[contains(text(), "[No group]")]')

            .verify.containsText('//*[contains(text(), "Availability From")]/../div/span', '2015-03-04 12:00:00')
            .verify.containsText('//*[contains(text(), "Availability To")]/../div/span', '2015-03-04 18:00:00');
    },

    'click by save button': function (browser) {
        browser
            .clickBySelectorXpath('//button[text()="Save"]')

            .waitForElementVisible('//div[@class="toast-content"]', 10000)
            .verify.containsText('//div[@class="toast-title"]', 'Success!')
            .verify.containsText('//div[@class="toast-message"]', 'Event Participant saved')
            .clickBySelectorXpath('//div[@class="toast-content"]');
    },

    'click by canceled button': function (browser) {
        browser
            .clickBySelectorXpath('//a[@href="/representatives/edit/50730"]')
            .clickBySelectorXpath('//button[text()="Cancel"]')
            .verify.urlContains('event/2/representatives');
    },
});
