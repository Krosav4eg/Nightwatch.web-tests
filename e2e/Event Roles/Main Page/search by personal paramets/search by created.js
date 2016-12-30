var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {
    '@disabled': true,
    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/event-participant-roles')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },
    'search by full name of created ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h1[text()="Event role"]', 3000)
            .waitForElementVisible('//tr[1]/td[9]/input[@type="text"]', 3000)
            .setValue('//tr[1]/td[9]/input[@type="text"]', ['2016-12-07 15:18:48', browser.Keys.ENTER])
            .useCss()
            .waitForElementVisible('#thisIsMainLoader', 3000)
            .waitForElementNotVisible('#thisIsMainLoader', 3000)
            .useXpath()
            .waitForElementVisible('//span[text()="       2016-12-07 15:18:48     "]', 3000);

    },


});