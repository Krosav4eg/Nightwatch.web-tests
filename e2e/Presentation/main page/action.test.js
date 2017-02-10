var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },

    'check event data': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Event (#212)"]', 3000)
    },

    'pess on id': function (browser) {
        browser
            .clickBySelectorXpath('//a[@href="/presentations/edit/3696"]')
    },

     'press on organizer name': function (browser) {
        browser
            .clickBySelectorXpath('//a[@href="/presentations/3696/master-contact/492282"]')
            .useXpath()
            .waitForElementVisible('//h1[text()="Master Contact Edit"]', 3000)
            .waitForElementVisible('//h4[text()="Master Contact(#492282)"]', 3000)
    },

    'check information about organizer ': function (browser) {
        browser
            .verify.valueContains('//input[@id="lastName"]','Sergey')
            .verify.valueContains('//input[@id="firstName"]','Potapoff')
            .verify.valueContains('//input[@id="academicTitle"]','Academic ')
            .verify.valueContains('//input[@id="functionTitle"]','Function ')
            .verify.valueContains('//input[@id="masterCompanyId"]','')
            .verify.valueContains('//input[@id="country"]','Ukraine')
            .verify.valueContains('//input[@id="mobile"]','0978544488')
            .verify.valueContains('//input[@id="email"]','Sergey_Potapof@mail.ru')
    },
});