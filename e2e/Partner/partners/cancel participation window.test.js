var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to representatives': function (browser) {
        browser
            .relUrl('/event/2/partners')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'search by company Blank': function (browser) {
        browser
            .setValueByXpath('//tr[1]/td[2]/input[@type="text"]', ['Crayon UAE', browser.Keys.ENTER])

            .verify.containsText('//tr[1]/td[2]/span', 'Crayon UAE')
    },

    'Cancel participation': function (browser) {
        browser
            .moveToElement('//tr/td[13]', 1298, 597)
            .clickBySelectorXpath('(//button[contains(text(), "Cancel participation")])[1]')

            .verify.containsText('(//h4[@class="modal-title"])[2]', 'Cancel participation')
            .verify.containsText('(//div[@class="form-group"])[2]', 'Are you sure you want to cancel this participation?')

            .clickBySelectorXpath('(//button[@aria-label="Close"]/span)[2]')

            .clickBySelectorXpath('(//button[contains(text(), "Cancel participation")])[1]')
            .clickBySelectorXpath('//button[text()="No"]')

            .verify.containsText('//tr[1]/td[2]/span', 'Crayon UAE')
    },

});