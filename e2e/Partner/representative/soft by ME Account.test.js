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

    'sort by ME Account up': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Event (#2)"]', 5000)
            .moveToElement('//tr/td[12]', 1298, 597)

            .clickBySelectorXpath('//th[contains(text(), "ME Account")]')
            .clickBySelectorXpath('//th[contains(text(), "ME Account")]')

            .verify.containsText('//tr[1]/td[12]/span', 'No')
            .verify.containsText('//tr[2]/td[12]/span', 'No')
            .verify.containsText('//tr[3]/td[12]/span', 'No')
            .verify.containsText('//tr[4]/td[12]/span', 'No')
            .verify.containsText('//tr[5]/td[12]/span', 'No')
    },

    'sort by ME Account down': function (browser) {
        browser
            .clickBySelectorXpath('//th[contains(text(), "ME Account")]')

            .verify.containsText('//tr[1]/td[12]/span', 'No')
            .verify.containsText('//tr[2]/td[12]/span', 'No')
            .verify.containsText('//tr[3]/td[12]/span', 'No')
            .verify.containsText('//tr[4]/td[12]/span', 'No')
            .verify.containsText('//tr[5]/td[12]/span', 'No')
    },

    'choose Yes': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="Yes"]')

            .verify.containsText('//div[@class="ng-grid-body"]/p', 'No results found')
    },

    'choose No': function (browser) {
        browser
            .clickBySelectorXpath('//option[text()="No"]')

            .verify.containsText('//tr[1]/td[12]/span', 'No')
            .verify.containsText('//tr[2]/td[12]/span', 'No')
            .verify.containsText('//tr[3]/td[12]/span', 'No')
            .verify.containsText('//tr[4]/td[12]/span', 'No')
            .verify.containsText('//tr[5]/td[12]/span', 'No')
    },
});
