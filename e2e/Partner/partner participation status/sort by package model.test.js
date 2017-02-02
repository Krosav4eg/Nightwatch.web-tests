var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partner-participation-status')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'sort by company up': function (browser) {
        browser
            .clickBySelectorXpath('//*[contains(text(), "Package model")]')
            .clickBySelectorXpath('//*[contains(text(), "Package model")]')

            .clickBySelectorXpath('//option[text()="Event based"]')
            .verify.elementPresent('//*[contains(text(), "No results found")]')

            .clickBySelectorXpath('//option[text()="Credit based"]')
            .verify.elementPresent('//*[contains(text(), "No results found")]')

            .clickBySelectorXpath('(//option)[1]')
            .verify.containsText('//tr[1]/td[1]/span', 'Al Ryan Gate Computer Trading LLC')
            .verify.containsText('//tr[2]/td[1]/span', 'Al Rostamani Communications')
            .verify.containsText('//tr[3]/td[1]/span', 'ats Computer Accessories & Technical Services')
    },

});
