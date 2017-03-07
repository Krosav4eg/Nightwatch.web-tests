var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {

    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
    },

    'check event data': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[text()="Event (#212)"]', 3000)
    },

    'pess on id': function (browser) {
        browser
            .clickBySelectorXpath('//a[@href="/presentations/edit/628"]')
    },

     'press on organizer name': function (browser) {
        browser
            .clickBySelectorXpath('//a[@href="/presentations/628/master-contact/95857"]')
            .useXpath()
            .waitForElementVisible('//h1[text()="Master Contact Edit"]', 3000)
            .waitForElementVisible('//h4[text()="Master Contact(#95857)"]', 3000)
    },

    'check information about organizer ': function (browser) {
        browser
            .verify.valueContains('//input[@id="lastName"]','Alphéus')
            .verify.valueContains('//input[@id="firstName"]','Ingo')
            .verify.valueContains('//input[@id="academicTitle"]','')
            .verify.valueContains('//input[@id="functionTitle"]','Geschäftsführer')
            .verify.valueContains('//input[@id="masterCompanyId"]','RWE GBS GmbH')
            .verify.valueContains('//input[@id="country"]','Germany')
            .verify.valueContains('//input[@id="mobile"]','+49 162 2565252')
            .verify.valueContains('//input[@id="email"]','ingo.alpheus@rwe.com')
    },
});