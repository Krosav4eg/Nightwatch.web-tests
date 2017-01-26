var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to awards': function (browser) {
        browser
            .relUrl('/event/1610/awards')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'choose "Project" candidate type': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//input[@id=3]', 30000)
            .click('//input[@id=3]');
    },

    'choose "Company" candidate type': function (browser) {
        browser
            .waitForElementVisible('//input[@id=2]', 30000)
            .click('//input[@id=2]');
    },

    'choose "Contact" candidate type': function (browser) {
        browser
            .waitForElementVisible('//input[@id=1]', 30000)
            .click('//input[@id=1]');
    },

    'click Save button ': function (browser) {
        browser
            .selectProjectRadioButton();
    },

    'select company radio button again': function (browser) {
        browser
            .selectCompanyRadioButton();
    },

    'select project radio button again': function (browser) {
        browser
            .selectProjectRadioButton();
    },
});
