var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to delegates': function (browser) {
        browser
            .relUrl('/event/200/delegates')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'page count': function (browser) {
        browser
            .clickBySelectorXpath('(//option[@value="20"])[1]')

            .verify.elementPresent('//span[text()="1 of 2"]')
            .verify.elementPresent('//a[1][@data-page="2"]')
            .verify.elementPresent('//a[2][text()="Next"]')
            .verify.elementPresent('//a[3][text()="Last"]')

            .clickBySelectorXpath('//option[2][@value="50"]')
            .verify.elementPresent('//span[text()="1 of 1"]')

            .clickBySelectorXpath('//option[3][@value="100"]')
            .verify.elementPresent('//span[text()="1 of 1"]');
    },

    'press on last button': function (browser) {
        browser
            .clickBySelectorXpath('(//option[@value="20"])[1]')
            .clickBySelectorXpath('//a[3][text()="Last"]')

            .verify.elementPresent('//span[text()="2 of 2"]')
            .verify.elementPresent('//a[1][@data-page="2"]')
            .verify.elementPresent('//a[1][text()="First"]')
            .verify.elementPresent('//a[2][text()="Prev"]')
            .verify.elementPresent('//span[text()="1"]')
            .verify.elementPresent('//a[3][@data-page="1"]');
    },

    'press on next button': function (browser) {
        browser
            .clickBySelectorXpath('//a[2][text()="Prev"]')
            .clickBySelectorXpath('//a[2][text()="Next"]')

            .verify.elementPresent('//a[1][text()="First"]')
            .verify.elementPresent('//a[2][text()="Prev"]')
            .verify.elementPresent('//span[text()="2 of 2"]')
            .verify.elementPresent('//a[3][@data-page="1"]')
            .verify.elementPresent('//span[text()="2"]');
    },

    'press on prev button. button': function (browser) {
        browser
            .clickBySelectorXpath('//a[2][text()="Prev"]')

            .verify.elementPresent('//span[text()="1 of 2"]')
            .verify.elementPresent('//a[1][@data-page="2"]')
            .verify.elementPresent('//a[2][text()="Next"]')
            .verify.elementPresent('//a[3][text()="Last"]');
    },

    'press on first button button': function (browser) {
        browser
            .clickBySelectorXpath('//a[3][text()="Last"]')
            .clickBySelectorXpath('//a[1][text()="First"]')

            .verify.elementPresent('//span[text()="1 of 2"]')
            .verify.elementPresent('//a[1][@data-page="2"]')
            .verify.elementPresent('//a[2][text()="Next"]')
            .verify.elementPresent('//a[3][text()="Last"]')
            .verify.elementPresent('(//span[contains(text(),"1")])[2]');
    },

    'press on another button': function (browser) {
        browser
            .clickBySelectorXpath('//a[1][@data-page="2"]')

            .verify.elementPresent('//span[text()="2 of 2"]')
            .verify.elementPresent('//a[3][@data-page="1"]')
            .verify.elementPresent('//a[1][text()="First"]')
            .verify.elementPresent('//a[2][text()="Prev"]')
            .verify.elementPresent('(//span[contains(text(),"2")])[2]');
    },


});