var _ = require('lodash');
var presteps = require('./../../../presteps/presteps.js');
var auth = require('./../../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {
    '@disabled': true,
    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/presentations')
            .waitForElementVisible('#thisIsMainLoader', 30000)
            .waitForElementNotVisible('#thisIsMainLoader', 30000);
    },
    'search by 3 letters': function (browser) {
        browser
        .useXpath()
        .waitForElementVisible('//tr/td[7]/input[@type="text"]', 10000)
        .setValue('//tr/td[7]/input[@type="text"]', ['tel', browser.Keys.ENTER])
        .useCss()
        .waitForElementVisible('#thisIsMainLoader', 30000)
        .waitForElementNotVisible('#thisIsMainLoader', 30000)
        .useXpath()
        .waitForElementVisible('//tr[1]/td[7]/span/ul/li[text()="             Telenor ASA           "]', 5000)
        .assert.elementPresent('//tr[1]/td[7]/span/ul/li[text()="             Telenor ASA           "]')

           
    },


});