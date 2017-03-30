var _ = require('lodash');
var presteps = require('./../../presteps/presteps.js');
var auth = require('./../../presteps/auth.js');

module.exports = _.assign(presteps, auth, {
    'redirection to agenda': function (browser) {
        browser
            .relUrl('/event/212/event-participant-roles')
    },
    'search by function title ': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h1[text()="Event role"]', 3000)
            .moveToElement('//tr[1]/td[10]/input[@type="text"]', 10, 10)
            .setValueByXpath('//tr[1]/td[10]/input[@type="text"]', ['Xsolve Test User', browser.Keys.ENTER])
            .useCss()
            .waitForElementNotVisible('#thisIsMainLoader', 3000)
    },
});