var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {
    '@disabled': true,
    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },
    'select by id down': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//tr/th[1]', 10000)
            .click('//tr/th[1]')
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .waitForElementVisible('a[href="/presentations/edit/3985"]',5000)
            .assert.elementPresent('a[href="/presentations/edit/3985"]')


    },


});