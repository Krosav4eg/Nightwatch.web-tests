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

    'search by 3 letters': function (browser) {
        browser
            .setValueByXpath('//tr/td[7]/input[@type="text"]', ['RWE ', browser.Keys.ENTER])
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 30000)
            .useXpath()
            .verify.containsText('//tr[1]/td[7]/span/ul/li','RWE GBS GmbH')
            .verify.elementPresent('//tr[2]/td[7]/span/ul/li','RWE Group Business Services GmbH');
    },
});